'use client'

import {useState} from 'react';
import {z} from 'zod';
import {PhoneInput} from 'react-international-phone';
import 'react-international-phone/style.css';
import {PhoneNumberUtil} from 'google-libphonenumber';
import {X} from "lucide-react";

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
    try {
        return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
        return false;
    }
};

const schema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email(),
    phone: z.string().min(9),
    message: z.string().max(500),
});

type FormData = z.infer<typeof schema>;

export default function Meeting() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>({});
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            schema.parse(formData);
            const objectFormData = formData;

            const response = await fetch('/api/send-email', {
                method: 'POST',
                body: JSON.stringify(objectFormData),
            });
            if (response.ok) {
                console.log('Email sent successfully!');
                setFormData({firstName: '', lastName: '', email: '', phone: '', message: ''});
                setErrors({});
                setIsSubmitted(true);
                // Закрываем модальное окно через 2 секунды после успешной отправки
                setTimeout(() => {
                    setIsModalOpen(false);
                    setIsSubmitted(false);
                }, 2000);
            } else {
                console.error('Failed to send email');
            }
            setLoading(false);
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors: { [key in keyof FormData]?: string } = {};
                error.errors.forEach(err => {
                    const path = err.path[0];
                    if (path) {
                        fieldErrors[path as keyof FormData] = err.message;
                    }
                });
                setErrors(fieldErrors);
            }
            setLoading(false);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
        setIsSubmitted(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFormData({firstName: '', lastName: '', email: '', phone: '', message: ''});
        setErrors({});
        setIsSubmitted(false);
    };

    const renderSuccessMessage = () => {
        return (
            <div className="text-green-600 text-center">Form submitted successfully!</div>
        );
    };

    return (
        <>
            <div className="fixed bottom-7 right-5 lg:right-4 z-20 flex flex-col items-center">
                <div id="tooltip-animation" role="tooltip"
                     className="relative hidden z-10 lg:flex lg:flex-col items-center text-center px-4 py-2 text-xs font-medium text-white transition-opacity duration-300 bg-gray-600 rounded-lg shadow-sm mb-4">
                    <button onClick={openModal} className="text-sm text-center text-white">
                        Quick START
                    </button>
                    <div className="tooltip-arrow absolute before:absolute before:h-2 before:w-2 before:visible invisible before:content-[''] before:rotate-45 before:bg-gray-600 h-2 -bottom-1 w-5"></div>
                </div>
                
                <button onClick={openModal} className="cursor-pointer">
                    <div className="relative flex h-16 w-16 mx-auto">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <div className="relative inline-flex justify-center items-center rounded-full h-16 w-16 bg-sky-500">
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 16 16"
                                 fill="currentColor">
                                <path fill="currentColor" d="M3 0h1v3h-1v-3z"></path>
                                <path fill="currentColor" d="M11 0h1v3h-1v-3z"></path>
                                <path fill="currentColor" d="M6.6 14h-5.6v-8h13v0.6c0.4 0.2 0.7 0.4 1 0.7v-6.3h-2v3h-3v-3h-5v3h-3v-3h-2v14h7.3c-0.3-0.3-0.5-0.6-0.7-1z"></path>
                                <path fill="currentColor" d="M14 12h-3v-3h1v2h2z"></path>
                                <path fill="currentColor" d="M11.5 8c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5zM11.5 7c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5v0z"></path>
                            </svg>
                        </div>
                    </div>
                </button>
            </div>

            {/* Модальное окно */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Get Started Now</h2>
                                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                                    <X size={24} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6 mb-6">
                                    <div className="basis-1/2 relative">
                                        <input
                                            className="block w-full p-3 text-gray-700 border border-gray-200 rounded-lg bg-white text-base focus:ring-orange-300 focus:border-orange-300"
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="First name*"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors.firstName && <span className="text-red-600 text-sm">{errors.firstName}</span>}
                                    </div>
                                    <div className="basis-1/2 relative">
                                        <input
                                            className="block w-full p-3 text-gray-700 border border-gray-200 rounded-lg bg-white text-base focus:ring-orange-300 focus:border-orange-300"
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Last name*"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors.lastName && <span className="text-red-600 text-sm">{errors.lastName}</span>}
                                    </div>
                                </div>
                                
                                <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6 mb-6">
                                    <div className="basis-1/2 relative">
                                        <input
                                            className="block text-base w-full p-3 text-gray-700 border border-gray-200 rounded-lg bg-white focus:ring-orange-300 focus:border-orange-300"
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email*"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
                                    </div>
                                    <div className="basis-1/2 relative">
                                        <PhoneInput
                                            inputClassName="block w-full p-3 text-gray-700 border border-gray-200 rounded-lg bg-white text-base focus:ring-orange-300 focus:border-orange-300"
                                            defaultCountry="ch"
                                            value={formData.phone}
                                            onChange={phone => setFormData({...formData, phone})}
                                            required
                                        />
                                        {errors.phone && <span className="text-red-600 text-sm">{errors.phone}</span>}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <textarea
                                        className="block text-base min-h-32 p-3 w-full text-gray-700 bg-white rounded-lg border border-gray-200 focus:ring-orange-300 focus:border-orange-300"
                                        id="message"
                                        name="message"
                                        placeholder="What Can We Help You With?"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                    {errors.message && <span className="text-red-600 text-sm">{errors.message}</span>}
                                </div>
                                
                                <div className="flex flex-col items-center justify-center mt-4 space-x-3 md:mt-6">
                                    <button
                                        className="w-fit px-5 py-2.5 font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-all"
                                        type="submit"
                                        disabled={loading}>
                                        {loading ? 'Sending...' : 'Submit Now'}
                                    </button>
                                    {isSubmitted && renderSuccessMessage()}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}