import Image from "next/image";
import {Link} from "@/navigation";
import {useTranslations} from "next-intl";

export default function Custom() {

    const t = useTranslations("Subscriptions.Options");

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center text-center gap-8 modular-active aos-init aos-animate"
            data-aos="fade-up">
            <div
                className="shadow-lg w-full relative rounded-md">
                <div
                    className="bg-gray-200/75 rounded-md p-8 relative h-full flex justify-center flex-col gap-y-4">
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-1')}
                    </p>
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-2')}
                    </p>
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-3')}
                    </p>
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-4')}
                    </p>
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-5')}
                    </p>
                </div>
            </div>
            <div
                className="shadow-lg w-full relative rounded-md">
                <div
                    className="bg-gray-200/75 rounded-md p-8 relative h-full flex justify-center flex-col gap-y-4">
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-6')}
                    </p>
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-7')}
                    </p>
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-8')}
                    </p>
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-9')}
                    </p>
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-10')}
                    </p>
                </div>
            </div>
            <div
                className="shadow-lg w-full relative rounded-md">
                <div
                    className="bg-gray-200/75 rounded-md p-8 relative h-full flex justify-center flex-col gap-y-4">
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-11')}
                    </p>
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-12')}
                    </p>
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-13')}
                    </p>
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-14')}
                    </p>
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-15')}
                    </p>
                    <p className="border-b-2 border-gray-200 text-sm md:text-base text-gray-500">
                        {t('option-16')}
                    </p>
                </div>
            </div>
        </div>
    )
}