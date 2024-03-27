import HeadingColor from "@/components/ui/HeadingColor";
import Heading2 from "@/components/ui/Heading2";
import Image from "next/image";
import Background from "@/components/Background";
import {useLocale, useTranslations} from "next-intl";

export default function RoadMap() {

    const curLocale = 'en';
    const t = useTranslations('RoadMap')

    return (
        <section className="bg-gray-200/75 relative overflow-clip">
            <Background align={"right"}/>
            <div className="max-w-screen-xl px-3 py-16 md:py-24 mx-auto relative">
                <div className="flex flex-col text-center">
                    <HeadingColor>
                        {t('color-title')}
                    </HeadingColor>
                    <Heading2>
                        {t('title')}
                    </Heading2>
                </div>
                <div className="flex flex-col gap-x-20 md:flex-row relative">
                    <div className="basis-1/2 md:mt-8">
                        {curLocale != useLocale() ? (
                            <Image src="/roadmap-de.png"
                                   className="object-contain max-w-[320px] md:max-w-full mx-auto sticky top-20"
                                   width={518}
                                   height={371}
                                   alt="Roadmap image"/>
                        ) : (
                            <Image src="/roadmap.png"
                                   className="object-contain max-w-[320px] md:max-w-full mx-auto sticky top-20"
                                   width={518}
                                   height={371}
                                   alt="Roadmap image"/>
                        )}
                    </div>
                    <div className="basis-1/2 bg-white border-l-2 border-orange-500 mt-8 shadow-xl rounded-xl">

                        <ol className="relative">
                            <div className="mt-10"></div>
                            <li className="mb-10 ml-4">
                                <div
                                    className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -left-2 border border-white">
                                </div>
                                <h3 className="font-semibold text-lg md:text-xl mb-2 text-gray-900 text-balance">
                                    {t('step.start-up.title')}
                                </h3>
                                <p>{t('step.start-up.list-1')}</p>
                                <p>{t('step.start-up.list-2')}</p>
                                <p>{t('step.start-up.list-3')}</p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div
                                    className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -left-2 border border-white">
                                </div>
                                <h3 className="font-semibold text-lg md:text-xl mb-2 text-gray-900 text-balance">
                                    {t('step.formative.title')}
                                </h3>
                                <p>{t('step.formative.list-1')}</p>
                                <p>{t('step.formative.list-2')}</p>
                                <p>{t('step.formative.list-3')}</p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div
                                    className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -left-2 border border-white">
                                </div>
                                <h3 className="font-semibold text-lg md:text-xl mb-2 text-gray-900 text-balance">
                                    {t('step.established.title')}
                                </h3>
                                <p>{t('step.established.list-1')}</p>
                                <p>{t('step.established.list-2')}</p>
                                <p>{t('step.established.list-3')}</p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div
                                    className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -left-2 border border-white">
                                </div>
                                <h3 className="font-semibold text-lg md:text-xl mb-2 text-gray-900 text-balance">
                                    {t('step.strategic.title')}
                                </h3>
                                <p>{t('step.strategic.list-1')}</p>
                                <p>{t('step.strategic.list-2')}</p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div
                                    className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -left-2 border border-white">
                                </div>
                                <h3 className="font-semibold text-lg md:text-xl mb-2 text-gray-900 text-balance">
                                    {t('step.dynamic.title')}
                                </h3>
                                <p>{t('step.dynamic.list-1')}</p>
                                <p>{t('step.dynamic.list-2')}</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}