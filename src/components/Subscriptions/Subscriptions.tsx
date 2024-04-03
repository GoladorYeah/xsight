import Basic from "@/components/Subscriptions/Basic";
import Advanced from "@/components/Subscriptions/Advanced";
import Standart from "@/components/Subscriptions/Standart";
import Custom from "@/components/Subscriptions/Custom";
import Heading2 from "@/components/ui/Heading2";
import HeadingColor from "@/components/ui/HeadingColor";
import {useTranslations} from "next-intl";

export default function Subscriptions() {

    const t = useTranslations("Subscriptions");

    return (
        <section className="relative" id="modular">
            <div className="max-w-screen-xl px-3 py-16 md:py-24 mx-auto relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col text-center max-w-2xl mx-auto">
                        <HeadingColor>
                            {t('color-title')}
                        </HeadingColor>

                        <Heading2>
                            {t('title')}
                        </Heading2>
                    </div>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center text-center gap-8 modular-active aos-init aos-animate"
                        data-aos="fade-up">
                        <Basic/>
                        <Standart/>
                        <Advanced/>
                    </div>
                    <div className="flex justify-center py-4 font-bold text-orange-500 text-3xl">+</div>
                    <div className="flex flex-col text-center">
                        <h2 className="font-bold text-lg md:text-xl text-center mb-8 text-balance"
                            data-aos="fade-up">
                            {t('Options.title')}
                        </h2>
                    </div>
                    <Custom/>
                </div>
            </div>
        </section>
    )
}