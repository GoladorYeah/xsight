'use client'

import {useState} from 'react';
import {z} from 'zod';
import {PhoneInput} from 'react-international-phone';
import 'react-international-phone/style.css';
import HeadingColor from "@/components/ui/HeadingColor";
import Heading2 from "@/components/ui/Heading2";
import {PhoneNumberUtil} from 'google-libphonenumber';
import {useLocale} from "next-intl";

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

const ContactForm: React.FC = () => {
    const locale = useLocale();
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            schema.parse(formData);
            // Формируем текст письма

            const emailContent = `
            First Name: ${formData.firstName}
            Last Name: ${formData.lastName}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Message: ${formData.message}
        `;

            const response = await fetch('/api/send-email', {
                method: 'POST',
                body: JSON.stringify({
                    text: emailContent,
                }),
            });
            console.log(formData);
            // После отправки формы можно сбросить состояние
            // setFormData({firstName: '', lastName: '', email: '', phone: '', message: ''});
            // setErrors({});
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
        }
    };

    // @ts-ignore
    return (
        <section className="relative bg-gray-200/75 overflow-hidden">

            <div className="max-w-screen-lg px-3 py-16 md:py-24 mx-auto relative">
                <HeadingColor>
                    GET STARTED NOW
                </HeadingColor>

                <Heading2>
                    Send us a Message
                </Heading2>
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
                            {errors.firstName && <span className="text-red-600">{errors.firstName}</span>}
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
                            {errors.lastName && <span className="text-red-600">{errors.lastName}</span>}
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
                            {errors.email && <span className="text-red-600">{errors.email}</span>}
                        </div>
                        <div className="basis-1/2 relative">
                            <PhoneInput

                                inputClassName="block w-full p-3 text-gray-700 border border-gray-200 rounded-lg bg-white text-base focus:ring-orange-300 focus:border-orange-300"
                                defaultCountry="ch"
                                value={formData.phone}
                                onChange={phone => formData.phone = phone}
                                required
                            />
                            {isPhoneValid(formData.phone) &&
                                <span className="text-red-600">{isPhoneValid(formData.phone)}</span>}
                        </div>
                    </div>

                    <div>
                        <textarea
                            className="block text-base min-h-32 p-3 w-full text-gray-700 bg-white rounded-lg border border-gray-200 focus:ring-orange-300 focus:border-orange-300"
                            id="message"
                            name="message"
                            placeholder="What Can We Help You With?"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <span className="text-red-600">{errors.message}</span>}
                    </div>
                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                        <button
                            className="px-5 py-2.5 font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-all"
                            type="submit">
                            Submit Now
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default ContactForm;
