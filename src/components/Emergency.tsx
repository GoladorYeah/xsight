import Image from "next/image";
import {Link} from "@/navigation";
import {useTranslations} from "next-intl";

export default function Emergency() {

    const t = useTranslations('Emergency');
    const tb = useTranslations("Buttons");

    return (
        <section id="adHock">
            <div className="max-w-screen-xl px-3 py-16 md:py-24 mx-auto relative overflow-x-hidden">
                <div className="bg-gray-200/75 rounded-lg shadow-lg py-8 px-6">
                    <div
                        className="flex flex-col justify-center items-center md:flex-row gap-x-8">
                        <Image
                            src="/emergency.png"
                            alt="" width={192} height={187}
                            className=""/>
                        <div className="flex flex-col">
                            <h5 className="font-semibold text-xl mb-4 text-balance">
                                {t('title')}
                            </h5>
                            <ul className="flex flex-col gap-2 list-disc px-4">
                                <li className="text-sm md:text-base text-gray-500">
                                    {t('list-1')}
                                </li>
                                <li className="text-sm md:text-base text-gray-500">
                                    {t('list-2')}
                                </li>
                                <li className="text-sm md:text-base text-gray-500">
                                    {t('list-3')}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link href={"/services/ad-hoc-emergiences"}
                              className="px-5 py-2.5 font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-all">
                            {tb('LearnMore')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}