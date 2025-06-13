import Image from "next/image";
import {Link} from "@/navigation";
import Background from "@/components/Background";
import {useTranslations} from "next-intl";
import {YouTubeEmbed} from '@next/third-parties/google'

export default function Ibm() {

    const t = useTranslations('Ibm')

    // @ts-ignore
    return (
        <section className="relative bg-gray-200/75 overflow-hidden">
            <Background align={"left"}/>
            <div className="max-w-screen-xl px-3 py-16 md:py-24 mx-auto relative">
                <div className="flex flex-col gap-x-20 lg:flex-row justify-center items-center">
                    <div className="basis-1/2 relative mb-8 lg:mb-0">
                        <div className="flex items-baseline gap-x-4 lg:gap-x-28 mb-4  lg:mb-12">
                            <figure className="section-f1">
                                <Image className="rounded-xl brightness-[0.85]" src="/i4Challenge-closing-event.jpg"
                                       alt=""
                                       width={340}
                                       height={312}/>

                            </figure>
                            <figure className="section-f2">

                                <Image className="rounded-xl brightness-[0.85]" src="/ibm-2.jpeg" alt="" width={145}
                                       height={135}/>
                            </figure>
                        </div>
                        <figure className="flex justify-center youtube">
                            <YouTubeEmbed videoid="3ouQs32MiZ8" width={447} height={251} params="controls=0"/>

                            {/*<iframe className="rounded-xl max-w-[351px] max-h-[197px] md:max-h-full md:max-w-full"*/}
                            {/*        width="447"*/}
                            {/*        height="251"*/}
                            {/*        src="https://www.youtube.com/embed/3ouQs32MiZ8?si=Ge3qxaOvLYm_Wg8D&amp;controls=0"*/}
                            {/*        title="YouTube video player" frameBorder="0"*/}
                            {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                            {/*        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>*/}
                            {/*</iframe>*/}
                        </figure>
                    </div>
                    <div
                        className="flex flex-col justify-center items-center text-center basis-1/2">
                        <div className="flex flex-col mb-4 md:mb-8">
                            <p className="font-semibold text-lg md:text-xl mb-2 text-gray-900 text-balance">
                                {t('text-1')}
                            </p>
                        </div>
                        <div className="border border-orange-500/50 mb-4 w-1/3"></div>

                        <div className="flex flex-col items-center justify-center mb-4 md:mb-8">
                            <p className="font-semibold text-lg md:text-xl mb-2 text-gray-900 text-balance">
                                {t('text-2')}
                            </p>
                            <p className="font-semibold text-lg md:text-xl mb-2 text-gray-900 text-balance">
                                {t('text-3')}
                            </p>
                        </div>
                        <div className="border border-orange-500/50 mb-4 w-1/3"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}