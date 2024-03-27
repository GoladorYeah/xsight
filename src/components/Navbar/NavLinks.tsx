// components/Navbar.tsx
'use client'

import {Link, usePathname} from '@/navigation';
import clsx from "clsx";

interface NavbarClientProps {
    navLinks: Array<{ name: string; href: string }>;
}

export function useActivePath(): (path: string) => boolean {
    const pathname = usePathname()

    return (path: string) => {
        return path === pathname
    }
}


export default function NavLinks({navLinks}: NavbarClientProps) {

    const checkActivePath = useActivePath()

    return (
        <ul className="flex items-center space-x-4">
            {navLinks.map((link) => {

                    return (
                        <li key={link.name}>
                            <Link
                                className={clsx((checkActivePath(link.href) ? "text-[--color-primary] drop-shadow-xl" : ""), "transition-all")}
                                href={link.href}>{link.name}</Link>
                        </li>
                    )
                }
            )}
        </ul>
    );
};