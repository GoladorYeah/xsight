import nodemailer, {Transporter} from 'nodemailer';
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: Request) {
    if (req.method === 'POST') {
        // @ts-ignore
        const {messages} = await req.json(); // Предполагается, что ваша форма отправляет эти поля

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
