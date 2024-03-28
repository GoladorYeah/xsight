import {useTranslations} from 'next-intl';
import Background from "@/components/Background";
import {Link} from "@/navigation";
import Image from "next/image";
import {Mail, MapPin} from "lucide-react";

export default function ContactPage() {

    const t = useTranslations('Pages.Contact');

    return (
        <main>
            <section className="bg-gray-200/75 relative overflow-hidden">
                <Background align={"right"}/>
                <div className="max-w-screen-xl px-3 py-16 md:py-24 mx-auto relative">
                    <div
                        className="flex flex-col justify-center items-center w-full text-3xl sm:text-4xl font-semibold mb-4 md:leading-snug">

                        <div className="flex space-x-2">
                            <h1 className="">
                                {t("title")}
                            </h1>
                            <div
                                className="text-animation md:leading-snug">
                                {t("animation")}
                            </div>
                        </div>

                        <div className="border border-orange-500/50 mb-4 w-32"></div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden">
                <div className="max-w-screen-xl px-3 py-16 md:py-24 mx-auto relative">
                    <div
                        className="flex flex-col justify-center items-center text-center">

                        <h2 className="font-bold text-xl md:text-2xl text-balance mb-8">
                            {t("title-2")}
                        </h2>
                        <div
                            className="flex flex-col md:flex-row items-start justify-center gap-y-12 md:gap-x-12 text-left text-gray-500">
                            <div className="flex gap-x-2">
                                <MapPin color="#fc7331" size={30}/>
                                <div>
                                    <p className="font-semibold text-lg text-gray-900 mb-2">
                                        {t("item-1.title")}
                                    </p>
                                    <p>c/o Switzerland Innovation Park Basel Area AG,</p>
                                    <p>Place des Sciences 2, 2822 Courroux,</p>
                                    <p>Switzerland</p>
                                </div>

                            </div>

                            <div className="flex gap-x-2">
                                <Mail size={30} color="#fc7331"/>
                                <div>
                                    <p className="font-semibold text-lg text-gray-900 mb-2">{t("item-2.title")}</p>
                                    <Link href="mailto:info@xsight.ch">info@xsight.ch</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
