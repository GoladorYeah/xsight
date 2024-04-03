import nodemailer, {Transporter} from 'nodemailer';
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: Request) {
    if (req.method === 'POST') {
        // @ts-ignore
        const {firstName, lastName, email, phone, message} = await req.json(); // Предполагается, что ваша форма отправляет эти поля
        const messages = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
  </head>
  <body>
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2>Contact Form Submission</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    </div>
  </body>
  </html>
`;


        // Создать SMTP транспорт
        const transporter: Transporter = nodemailer.createTransport({
            port: process.env.SMTP_PORT as number | undefined,
            host: process.env.SMTP_SERVER,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_TOKEN,
            }
        });

        try {
            // Отправить письмо
            const info = await transporter.sendMail({
                from: 'Xsight <sent.mail@xsight.ch>',
                sender: 'Cyber',
                to: 'info@xsight.ch',
                subject: 'Contact form',
                html: messages // Здесь включены данные из формы
            });

            console.log('Письмо отправлено:', info.response);
            return NextResponse.json({message: 'Письмо успешно отправлено'});
        } catch (error) {
            console.error('Ошибка отправки письма:', error);
            return NextResponse.json({error: 'Не удалось отправить письмо'});
        }
    } else {
        return NextResponse.json({error: 'Метод не разрешен'});
    }
}
