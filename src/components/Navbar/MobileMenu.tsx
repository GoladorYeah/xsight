'use client'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {Menu, X} from "lucide-react";
import {Link, usePathname} from "@/navigation";
import clsx from "clsx";
import {useState} from "react";

interface NavbarClientProps {
    navLinks: Array<{ name: string; href: string }>;
    navButton: { name: string; href: string };
}

export function useActivePath(): (path: string) => boolean {
    const pathname = usePathname()

    return (path: string) => {
        return path === pathname
    }
}

export default function MobileMenu({navLinks, navButton}: NavbarClientProps) {

    // Обработчики событий
    const checkActivePath = useActivePath()

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuItemClick = () => {
        // Закрываем меню после выбора пункта
        setIsOpen(false);
        // Здесь можно выполнить другие действия после выбора пункта
    };

    return (
        <>
            <Drawer direction={"right"} open={isOpen}>
                <DrawerTrigger className="md:hidden"><Menu onClick={() => setIsOpen(!isOpen)}/></DrawerTrigger>

                <DrawerContent>
                    <DrawerHeader className="mt-4">
                        <DrawerClose className="w-min">
                            <X onClick={handleMenuItemClick}/>
                        </DrawerClose>
                    </DrawerHeader>

                    <ul className="flex flex-col space-y-2 p-6">
                        {navLinks.map((link) => {

                                return (

                                    <li key={link.name} className="w-full">

                                        <Link onClick={handleMenuItemClick}
                                              className={clsx((checkActivePath(link.href) ? "text-[--color-primary] drop-shadow-xl" : ""), "transition-all text-lg")}
                                              href={link.href}>{link.name}</Link>

                                    </li>

                                )
                            }
                        )}
                    </ul>

                    <div className="flex px-4">
                        <Link href={navButton.href} onClick={handleMenuItemClick}
                              className="w-content px-5 py-2.5 font-medium bg-orange-100 hover:bg-orange-200 hover:text-orange-600 text-orange-500 rounded-lg text-sm">
                            {navButton.name}
                        </Link>
                    </div>


                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>

            </Drawer>
        </>

    );
};