import HeadingColor from "@/components/ui/HeadingColor";
import Heading2 from "@/components/ui/Heading2";
import CertificatesImage from "@/components/Certificates/CertificatesImage";
import {useTranslations} from "next-intl";

export default function Certificates() {

    const t = useTranslations("Certificates");

    return (
        <section>
            <div className="max-w-screen-xl px-3 pt-0 pb-16 md:py-24 md:pt-0 mx-auto relative overflow-x-hidden">
                <HeadingColor>
                    {t('color-title')}
                </HeadingColor>

                <Heading2>
                    {t('title')}
                </Heading2>
                <CertificatesImage/>
            </div>
        </section>
    );
}
