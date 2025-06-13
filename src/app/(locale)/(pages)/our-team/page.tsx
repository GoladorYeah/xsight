import WhyXsight from "@/components/WhyXsight";
import Background from "@/components/Background";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {Link} from "@/navigation";
import Team from "@/components/About/Team";

export default function OurTeamPage() {

    const t = useTranslations('Pages.OurTeam');

    return (
        <main>
            <section className="bg-gray-200/75 relative overflow-hidden">
                <Background align={"left"}/>
                <div className="max-w-screen-xl px-3 py-16 md:py-24 mx-auto relative">
                    <div className="flex flex-col items-center mx-auto max-w-screen-md">
                        <div className="border border-orange-500/50 mb-4 w-1/3"></div>
                        <h1 className="text-lg md:text-2xl text-center font-bold text-balance mb-4">
                            {t('hero-title')}
                        </h1>
                        <div className="border border-orange-500/50 mb-4 w-1/5"></div>
                        <div className="flex flex-row gap-x-4 justify-center items-end mt-8">


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
                </div>
            </section>

            <Team/>
            <WhyXsight/>
        </main>
    );
}
