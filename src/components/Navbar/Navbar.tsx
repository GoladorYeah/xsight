import {useTranslations} from "next-intl";
import NavLinks from '@/components/Navbar/NavLinks';
import {Link} from "@/navigation";
import {Logo} from "@/components/Navbar/Logo";
import LanguageSwitcher from "@/components/Navbar/LanguageSwitcher";
import MobileMenu from "@/components/Navbar/MobileMenu";

export default function Navbar() {


    const t = useTranslations('Menu');

    const navLinks = [
        {name: t('home'), href: '/'},
        {name: t('our-team'), href: '/our-team'},
        {name: t('services'), href: '/services'},
        {name: t('contact'), href: '/contact'},
    ]
    const navButton =
        {name: t('button'), href: '/'}


    return (
        <nav className="border-gray-200 sticky top-0 backdrop-blur-xl bg-white/50 shadow-md z-40">
            <div
                className="max-w-screen-xl px-2.5 py-4 mx-auto flex items-center justify-between"> {/* For basic layout */}
                {/* Logo */}
                <Link href="/" className="flex">
                    <Logo/>
                </Link>
                <div className="hidden md:flex items-center space-x-4">
                    <NavLinks navLinks={navLinks}/>
                    <Link href={"#adHock"}
                          className="px-5 py-2.5 font-medium bg-orange-100 hover:bg-orange-200 hover:text-orange-600 text-orange-500 rounded-lg text-sm">
                        {t('button')}
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    {/* Language Switcher */}
                    <LanguageSwitcher/>

                    <div>

                    </div>
                    <MobileMenu navButton={navButton} navLinks={navLinks}/>
                </div>

                {/* Mobile Menu (Conditional) */}

                {/*<div className="/!* Your mobile menu styles *!/">*/}
                {/*    /!* Navigation links here - structure similar to desktop *!/*/}
                {/*    /!* ... *!/*/}
                {/*</div>*/}
            </div>
        </nav>
    );
};