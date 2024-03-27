import {Link} from "@/navigation";
import {useTranslations} from "next-intl";

export default function Meeting() {

    const t = useTranslations('Buttons')

    return (
        <div className="fixed bottom-7  lg:bottom-1/3  right-5 lg:right-4 z-20">
            <div id="tooltip-animation" role="tooltip"
                 className="relative hidden z-10 lg:inline-block px-4 py-4 text-xs font-medium text-white transition-opacity duration-300 bg-gray-600 rounded-lg shadow-sm mb-4">

                <Link href="#" className="text-sm text-center text-white">
                    {t('QuickStart')}
                </Link>


                <div
                    className="tooltip-arrow absolute before:absolute before:h-2 before:w-2 before:visible invisible before:content-[''] before:rotate-45 before:bg-gray-600 h-2 right-1/2 left-1/2 -bottom-1 w-5">

                </div>
            </div>
            <a data-modal-target="callbutton" data-modal-toggle="callbutton" className="cursor-pointer">
                <div className="relative flex h-16 w-16 mx-auto">
                    <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">

                    </span>
                    <div
                        className="relative inline-flex justify-center items-center rounded-full h-16 w-16 bg-sky-500">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 16 16"
                             fill="currentColor">
                            <path
                                fill="currentColor" d="M3 0h1v3h-1v-3z"></path>
                            <path fill="currentColor"
                                  d="M11 0h1v3h-1v-3z">

                            </path>
                            <path
                                fill="currentColor"
                                d="M6.6 14h-5.6v-8h13v0.6c0.4 0.2 0.7 0.4 1 0.7v-6.3h-2v3h-3v-3h-5v3h-3v-3h-2v14h7.3c-0.3-0.3-0.5-0.6-0.7-1z">

                            </path>
                            <path
                                fill="currentColor" d="M14 12h-3v-3h1v2h2z"></path>
                            <path fill="currentColor"
                                  d="M11.5 8c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5zM11.5 7c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5v0z">

                            </path>
                        </svg>
                    </div>
                </div>
            </a>

        </div>
    )
}