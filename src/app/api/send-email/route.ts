import nodemailer from 'nodemailer';
import {NextResponse} from "next/server";

export async function POST(req: Request) {
    if (req.method === 'POST') {
        // @ts-ignore
        const {message} = req.json(); // Предполагается, что ваша форма отправляет эти поля

        // Создать SMTP транспорт
        const transporter = nodemailer.createTransport({
            host: 'smtp.protonmail.ch',
            port: 587,
            secure: true,
            auth: {
                user: 'sent.mail@xsight.ch',
                pass: 'HTLD42CDZNYLVWMF'
            }
        });

        try {
            // Отправить письмо
            const info = await transporter.sendMail({
                from: 'sent.mail@xsight.ch',
                to: 'info@xsight.ch',
                subject: 'Contact form',
                text: `Получено новое сообщение: ${message}` // Здесь включены данные из формы
            });

            console.log('Письмо отправлено:', info.response);
            NextResponse.json({message: 'Письмо успешно отправлено'});
        } catch (error) {
            console.error('Ошибка отправки письма:', error);
            NextResponse.json({error: 'Не удалось отправить письмо'});
        }
    } else {
        NextResponse.json({error: 'Метод не разрешен'});
    }
}
