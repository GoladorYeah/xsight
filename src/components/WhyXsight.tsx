import Image from "next/image";
import Background from "@/components/Background";
import HeadingColor from "@/components/ui/HeadingColor";
import Heading2 from "@/components/ui/Heading2";
import {useTranslations} from "next-intl";

export default function WhyXsight() {

    const t = useTranslations('Pages.OurTeam.why-xsight')

    return (
        <section className="relative bg-gray-200/75 overflow-hidden">
            <Background align={"right"}/>
            <div className="max-w-screen-xl px-3 py-16 md:py-24 mx-auto relative">
                <HeadingColor>
                    {t('color-title')}
                </HeadingColor>

                <Heading2>
                    {t('title')}
                </Heading2>
                <div className="flex flex-col gap-x-20 lg:flex-row items-center">
                    <div className="basis-1/2 relative mb-6 lg:mb-0">
                        <div className="flex items-baseline gap-x-4 lg:gap-x-28 mb-4  lg:mb-12">
                            <figure className="section-f1">
                                <Image src="/ibm-1.png" alt="" width={340} height={312}/>
                            </figure>
                            <figure className="section-f2">

                                <Image src="/ibm-2.png" alt="" width={145} height={135}/>
                            </figure>
                        </div>
                        <figure className="flex justify-center">
                            <Image src="/ibm-3.png" alt="" width={407} height={251}/>
                        </figure>
                    </div>
                    <div
                        className="flex flex-col justify-center basis-1/2">
                        <div className="flex flex-col mb-4 md:mb-8">
                            <h3 className="font-semibold text-lg md:text-xl mb-2 text-balance">
                                {t('block-1.title')}
                            </h3>
                            <div className="flex flex-col gap-y-2 text-sm md:text-base text-gray-500"
                                 dangerouslySetInnerHTML={{__html: t.raw('block-1.text')}}>

                            </div>

                        </div>
                        <div className="flex flex-col mb-4 md:mb-8">
                            <h3 className="font-semibold text-lg md:text-xl mb-2 text-balance">
                                {t('block-2.title')}
                            </h3>
                            <div className="flex flex-col gap-y-2 text-sm md:text-base text-gray-500"
                                 dangerouslySetInnerHTML={{__html: t.raw('block-2.text')}}>

                            </div>
                        </div>
                        <div className="flex flex-col mb-4 md:mb-8">
                            <h3 className="font-semibold text-lg md:text-xl mb-2 text-balance">
                                {t('block-3.title')}
                            </h3>
                            <div className="flex flex-col gap-y-2 text-sm md:text-base text-gray-500"
                                 dangerouslySetInnerHTML={{__html: t.raw('block-3.text')}}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}