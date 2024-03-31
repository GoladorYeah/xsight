import nodemailer from 'nodemailer';
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: Request) {
    if (req.method === 'POST') {
        // @ts-ignore
        const {messages} = await req.json(); // Предполагается, что ваша форма отправляет эти поля

        // Создать SMTP транспорт
        const transporter = nodemailer.createTransport({
            host: 'smtp.protonmail.ch',
            port: 587,
            auth: {
                user: 'sent.mail@xsight.ch',
                pass: 'HTLD42CDZNYLVWMF'
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
