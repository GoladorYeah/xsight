// src/app/api/send-email/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    if (req.method === 'POST') {
        try {
            const {firstName, lastName, email, phone, message} = await req.json();
            
            const emailContent = {
                from: 'Xsight <sent.mail@xsight.ch>', // Замените на ваш домен
                to: ['yaroprima8@gmail.com'],
                subject: 'Contact Form Submission',
                html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2>Contact Form Submission</h2>
                    <p><strong>First Name:</strong> ${firstName}</p>
                    <p><strong>Last Name:</strong> ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                </div>
                `
            };

            const userCopyContent = {
                from: 'Xsight <sent.mail@xsight.ch>',
                to: [email],
                subject: 'Copy of Contact Form Submission',
                html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <p><strong>Thank you for contacting us. We have received your message.</strong></p>
                    <h2>Your Submission</h2>
                    <p><strong>First Name:</strong> ${firstName}</p>
                    <p><strong>Last Name:</strong> ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                </div>
                `
            };

            // Отправка основного письма
            const response1 = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailContent),
            });

            // Отправка копии пользователю
            const response2 = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userCopyContent),
            });

            if (response1.ok && response2.ok) {
                console.log('Emails sent successfully');
                return NextResponse.json({message: 'Письма успешно отправлены'});
            } else {
                const error1 = await response1.text();
                const error2 = await response2.text();
                console.error('Failed to send emails:', error1, error2);
                return NextResponse.json({error: 'Не удалось отправить письма'}, {status: 500});
            }
            
        } catch (error) {
            console.error('Ошибка отправки письма:', error);
            return NextResponse.json({error: 'Не удалось отправить письмо'}, {status: 500});
        }
    } else {
        return NextResponse.json({error: 'Метод не разрешен'}, {status: 405});
    }
}