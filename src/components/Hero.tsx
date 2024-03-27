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
                            <span
                                className="text-animation md:leading-snug">
                                {t('title-animation').toUpperCase()}
                            </span>
                        </h1>
                        <div className="text-sm lg:text-lg text-balance mb-8">
                            {t('text')}
                        </div>
                        <div className="flex flex-row gap-x-4 justify-center items-end">
                            <Link href="https://innovate.baselarea.swiss/services/acceleration/i4-challenge/"
                                  target="_blank">
                                <Image className="mb-4 object-contain"
                                       src="/i4c.png"
                                       alt="Banner"
                                       width={250}
                                       height={250}/>
                            </Link>
                            <Link href="https://innovate.baselarea.swiss/" target="_blank">
                                <Image className="mb-4 object-contain"
                                       src="/sip_basel_rgb.svg"
                                       alt="Banner"
                                       width={248}
                                       height={121}/>
                            </Link>
                        </div>
                    </div>


                    <div className="flex flex-1 justify-center mb-8">
                        <Image className="max-w-[250px] sm:max-w-[300px] md:max-w-full" src="/hero-banner.png"
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