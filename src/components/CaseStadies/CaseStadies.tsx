import HeadingColor from "@/components/ui/HeadingColor";
import Heading2 from "@/components/ui/Heading2";
import {useTranslations} from "next-intl";
import CaseSlider from "@/components/CaseStadies/CaseSlider";

export default function CaseStadies() {

    const t = useTranslations("Cases");

    const Data = [
        {
            title: t('case-1.title'),
            text: t.raw('case-1.text'),
        },
        {
            title: t('case-2.title'),
            text: t.raw('case-2.text'),
        },
        {
            title: t('case-3.title'),
            text: t.raw('case-3.text'),
        },
        {
            title: t('case-4.title'),
            text: t.raw('case-4.text'),
        },
        {
            title: t('case-5.title'),
            text: t.raw('case-5.text'),
        },
        {
            title: t('case-6.title'),
            text: t.raw('case-6.text'),
        }
    ];

    return (
        <section>
            <div className="max-w-screen-xl px-3 py-16 md:py-24 mx-auto relative overflow-x-hidden">
                <HeadingColor>
                    {t('color-title')}
                </HeadingColor>

                <Heading2>
                    {t('title')}
                </Heading2>
                <CaseSlider Data={Data}/>
            </div>
        </section>
    );
}