// src/components/Hero.tsx
import Background from "@/components/Background";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {Link} from "@/navigation";

export default function Hero() {

    const t = useTranslations('Hero');

    return (
        <section className="bg-gray-200/75 relative overflow-hidden">
            <Background align={"right"}/>
            <div className="max-w-screen-xl px-3 py-16 md:py-24 mx-auto relative">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full">
                    <div className="flex-1 flex flex-col justify-center text-center items-center md:px-8">
                        <h1 className="text-3xl sm:text-4xl font-semibold mb-4 md:leading-snug">
                            {t('title').toUpperCase()}
                            <br/>
                            <span className="text-animation md:leading-snug">
                                {t('title-animation')}
                            </span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl font-medium mb-4 text-orange-600">
                            Cybersecurity can be cost-efficient!
                        </h2>
                        <div className="text-sm lg:text-lg text-balance mb-8">
                            With the Investment MATRIX® approach, we&apos;ll <strong>reduce</strong> your cybersecurity and IT expenses by <strong>up to 30%</strong>—while still increasing your cybersecurity maturity to the highest, <strong>most reliable level</strong>.
                        </div>
                        <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-4 justify-center items-center">
                            <div className="mb-4">
                                <Image className="object-contain w-full max-w-[280px] sm:max-w-[300px] h-auto"
                                       src="/i4c.png"
                                       alt="i4Challenge Banner"
                                       width={300}
                                       height={180}/>
                            </div>
                            
                            {/* Новый баннер для Catalisto */}
                            <a href="https://www.catalisto.com/" target="_blank"
                               className="mb-4 block group cursor-pointer w-full max-w-[280px] sm:max-w-[300px]">
                                <div className="flex items-center justify-center px-4 sm:px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 w-full h-[58px]"
                                     style={{backgroundColor: '#72bfd6'}}>
                                    <div className="text-white text-center">
                                        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                                            <span className="text-[10px] sm:text-xs font-semibold tracking-wider opacity-90">
                                                IN PARTNERSHIP with
                                            </span>
                                            <span className="text-sm sm:text-lg font-bold tracking-tight">
                                                CATALISTO
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-1 justify-center mb-8">
                        <Image className="max-w-[250px] sm:max-w-[300px] lg:max-w-full" src="/hero-banner.png"
                               alt="Banner"
                               width={400}
                               height={534}
                               priority={true}/>
                    </div>
                </div>
            </div>
        </section>
    )
}