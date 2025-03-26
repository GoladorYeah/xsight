import {Link} from "@/navigation";
import Image from "next/image";
import {useTranslations} from "next-intl";

export default function Footer() {

    const t = useTranslations('Menu')

    return (
        <footer>
            <div className="max-w-screen-xl px-3 py-16 mx-auto relative overflow-x-hidden">
                <div className="flex justify-center text-center items-center flex-col md:flex-row gap-x-12">
                    <div className="mb-6 basis-1/4 md:mb-0">
                        <Link href="/" className="flex">
                            <Image src="/logo-main.png"
                                   className="object-contain h-full" width={250} height={162} alt="XSight Logo"/>
                        </Link>
                    </div>
                    <ul className="basis-1/4 mb-4 md:mb-0">
                        <li className="mb-4">
                            <Link href={"/"}
                                  className="drop-shadow-xl transition-all">
                                {t('home')}
                            </Link>
                        </li>
{/*                         <li className="mb-4">
                            <Link href={"/our-team"}
                                  className="drop-shadow-xl transition-all">
                                {t('our-team')}
                            </Link>
                        </li> */}
                         <li className="mb-4">
                            <Link href={"/contact"}
                                  className="drop-shadow-xl transition-all">
                                {t('contact')}
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href={"/services"}
                                  className="drop-shadow-xl transition-all">
                                {t('services')}
                            </Link>
                        </li>
                    </ul>
{/*                     <ul className="basis-1/4 mb-4 md:mb-0">
                       
                        
                    </ul> */}
{/*                     <ul className="basis-1/4 mb-4 md:mb-0">
                        <li className="mb-4">
                            <Link href={"/privacy-policy"}
                                  className="drop-shadow-xl transition-all">
                                {t('privacy-policy')}
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href={"/terms-of-use"}
                                  className="drop-shadow-xl transition-all">
                                {t('terms-of-use')}
                            </Link>
                        </li>
                    </ul> */}
                </div>
            </div>
            <hr className="border-gray-200 sm:mx-auto"/>
            <div className="flex items-center justify-center align-baseline">
                <div className="text-sm text-gray-700 sm:text-center py-6">
                    © 2023
                    <Link href="/"
                          className="hover:underline"> XSight.ch™
                    </Link>
                    . All Rights Reserved.
                </div>
            </div>


        </footer>
    )
}
