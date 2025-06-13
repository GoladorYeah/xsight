// src/app/api/send-email/route.ts
import nodemailer, {Transporter} from 'nodemailer';
import {NextResponse} from "next/server";

export async function POST(req: Request) {
    if (req.method === 'POST') {
        try {
            const {firstName, lastName, email, phone, message} = await req.json();
            
            const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h2 style="color: #333; border-bottom: 2px solid #fc7331; padding-bottom: 10px;">New Contact Form Submission</h2>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold; width: 30%;">First Name:</td>
                            <td style="padding: 12px; border: 1px solid #dee2e6;">${firstName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Last Name:</td>
                            <td style="padding: 12px; border: 1px solid #dee2e6;">${lastName}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Email:</td>
                            <td style="padding: 12px; border: 1px solid #dee2e6;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Phone:</td>
                            <td style="padding: 12px; border: 1px solid #dee2e6;">${phone}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold; vertical-align: top;">Message:</td>
                            <td style="padding: 12px; border: 1px solid #dee2e6;">${message.replace(/\n/g, '<br>')}</td>
                        </tr>
                    </table>
                    <div style="margin-top: 30px; padding: 15px; background-color: #e7f3ff; border-left: 4px solid #2196F3; border-radius: 4px;">
                        <p style="margin: 0; color: #1976D2;">
                            <strong>Note:</strong> This email was sent from the XSight contact form on ${new Date().toLocaleString()}.
                        </p>
                    </div>
                </div>
            </div>
            `;

            const userHtmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <h1 style="color: #fc7331; margin: 0;">XSight Cybersecurity</h1>
                        <p style="color: #666; margin: 10px 0 0 0;">Thank you for contacting us!</p>
                    </div>
                    
                    <div style="background-color: #e8f5e8; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
                        <h2 style="color: #2e7d2e; margin: 0 0 10px 0; font-size: 18px;">✓ Message Received Successfully</h2>
                        <p style="color: #2e7d2e; margin: 0;">We have received your message and will get back to you within 24 hours.</p>
                    </div>

                    <h3 style="color: #333; border-bottom: 2px solid #fc7331; padding-bottom: 8px;">Your Submission Details:</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold; width: 30%;">Name:</td>
                            <td style="padding: 12px; border: 1px solid #dee2e6;">${firstName} ${lastName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Email:</td>
                            <td style="padding: 12px; border: 1px solid #dee2e6;">${email}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Phone:</td>
                            <td style="padding: 12px; border: 1px solid #dee2e6;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold; vertical-align: top;">Message:</td>
                            <td style="padding: 12px; border: 1px solid #dee2e6;">${message.replace(/\n/g, '<br>')}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 30px; text-align: center; padding: 20px; background-color: #f0f7ff; border-radius: 6px;">
                        <p style="margin: 0; color: #1976D2;">
                            <strong>Next Steps:</strong> Our team will review your message and respond promptly. 
                            If urgent, please call us directly.
                        </p>
                    </div>

                    <div style="margin-top: 25px; text-align: center; font-size: 12px; color: #999;">
                        <p>XSight Cybersecurity | Sent on ${new Date().toLocaleString()}</p>
                    </div>
                </div>
            </div>
            `;

            // Проверяем наличие всех переменных окружения
            if (!process.env.SMTP_SERVER || !process.env.SMTP_USERNAME || !process.env.SMTP_TOKEN || !process.env.SMTP_PORT) {
                console.error('Missing SMTP environment variables');
                return NextResponse.json({error: 'SMTP configuration incomplete'}, {status: 500});
            }

            // Создать SMTP транспорт для ProtonMail
            const transporter: Transporter = nodemailer.createTransport({
                host: process.env.SMTP_SERVER, // smtp.protonmail.ch
                port: parseInt(process.env.SMTP_PORT), // 587
                secure: false, // true для 465, false для 587
                auth: {
                    user: process.env.SMTP_USERNAME, // sent.mail@xsight.ch
                    pass: process.env.SMTP_TOKEN, // ваш токен
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            // Проверяем соединение перед отправкой
            await transporter.verify();
            console.log('ProtonMail SMTP connection verified successfully');

            // Отправить письмо админу
            const adminInfo = await transporter.sendMail({
                from: `"XSight Contact Form" <${process.env.SMTP_USERNAME}>`,
                replyTo: email, // Ответ пойдет на email пользователя
                to: 'info@xsight.ch',
                subject: `New Contact Form Submission from ${firstName} ${lastName}`,
                html: htmlContent,
                text: `
New Contact Form Submission - XSight

First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Message: ${message}

Sent on: ${new Date().toLocaleString()}
                `.trim(),
                headers: {
                    'X-Mailer': 'XSight Contact System v1.0',
                    'X-Priority': '1',
                    'Importance': 'High'
                }
            });

            // Отправляем подтверждение пользователю
            const userInfo = await transporter.sendMail({
                from: `"XSight Cybersecurity" <${process.env.SMTP_USERNAME}>`,
                replyTo: 'info@xsight.ch',
                to: email,
                subject: 'Thank you for contacting XSight - We received your message',
                html: userHtmlContent,
                text: `
Thank you for contacting XSight Cybersecurity!

We have received your message and will get back to you within 24 hours.

Your Submission Details:
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Message: ${message}

Next Steps: Our team will review your message and respond promptly.

XSight Cybersecurity
Sent on: ${new Date().toLocaleString()}
                `.trim(),
                headers: {
                    'X-Mailer': 'XSight Contact System v1.0',
                    'X-Auto-Response-Suppress': 'All'
                }
            });

            console.log('Emails sent successfully via ProtonMail:', adminInfo.messageId, userInfo.messageId);
            return NextResponse.json({message: 'Письма успешно отправлены через ProtonMail'});
            
        } catch (error) {
            console.error('Ошибка отправки письма через ProtonMail:', error);
            
            if (error instanceof Error) {
                return NextResponse.json({
                    error: 'Не удалось отправить письмо через ProtonMail',
                    details: error.message
                }, {status: 500});
            }
            
            return NextResponse.json({error: 'Не удалось отправить письмо'}, {status: 500});
        }
    } else {
        return NextResponse.json({error: 'Метод не разрешен'}, {status: 405});
    }
}