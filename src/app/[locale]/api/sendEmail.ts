import {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {to, subject, text} = req.body;
        console.log('Hi');
        // Create an SMTP transporter
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
            // Send email
            const info = await transporter.sendMail({
                from: 'sent.mail@xsight.ch',
                to: 'info@xsight.ch',
                subject: 'Contact form',
                text
            });

            console.log('Email sent:', info.response);
            res.status(200).json({message: 'Email sent successfully'});
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({error: 'Failed to send email'});
        }
    } else {
        res.status(405).json({error: 'Method Not Allowed'});
    }
}
