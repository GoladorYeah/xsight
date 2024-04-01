import type {Metadata} from "next";
import {Inter} from "next/font/google";
import clsx from 'clsx';
import {GoogleAnalytics} from '@next/third-parties/google'


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Xsight Cybersecurity — modular & adaptive solutions",
    description: "Xsight Cybersecurity is a leading cybersecurity company offering comprehensive solutions to protect your business from evolving digital threats. Our expert team uses advanced technology and innovative strategies to safeguard your valuable data and maintain business continuity. Trust Xsight for reliable, proactive cybersecurity that keeps your organization ahead of the curve.",
};


export default function LocaleLayout(
    {
        children,
        params: {locale}
    }: {
        children: React.ReactNode;
        params: { locale: string };
    }) {
    return (
        <html lang={locale}>
        <body className={clsx(inter.className, 'antialiased text-gray-900 text-medium')}>
        {children}
        </body>
        <GoogleAnalytics gaId="G-MB758K0Y2T"/>
        </html>
    );
}