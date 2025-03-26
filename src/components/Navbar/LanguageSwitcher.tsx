'use client';

import {useRouter, usePathname, Link} from '@/navigation';
import {useLocale} from "next-intl";

export default function LanguageChanger() {
    const router = useRouter();
    const pathname = usePathname();
    const curLocale = useLocale();

    const handleChange = (e: { target: { value: string; }; }) => {
        router.push(pathname, {locale: e.target.value});
    };

    return (
        <>
            <select className="cursor-pointer hidden bg-inherit" value={curLocale} onChange={handleChange}>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
            </select>
        </>

    );
}
