import type {Metadata} from "next";
import {Inter} from "next/font/google";
import clsx from 'clsx';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Xsight Cybersecurity — modular & adaptive solutions",
    description: "Xsight Cybersecurity is a leading cybersecurity company offering comprehensive solutions to protect your business from evolving digital threats. Our expert team uses advanced technology and innovative strategies to safeguard your valuable data and maintain business continuity. Trust Xsight for reliable, proactive cybersecurity that keeps your organization ahead of the curve.",
};


export default async function LocaleLayout(
    {
        children,
    }: {
        children: React.ReactNode;

    }) {
        const locale = await getLocale();
    return (
        <html lang={locale}>
        <body className={clsx(inter.className, 'antialiased text-gray-900 text-medium')}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </body>
        </html>
    );
}