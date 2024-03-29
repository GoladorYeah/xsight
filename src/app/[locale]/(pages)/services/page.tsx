import Image from "next/image";
import {Link} from "@/navigation";
import {useTranslations} from "next-intl";

export default function ServicesPage() {

    const tb = useTranslations("Buttons");
    const t = useTranslations("Pages.Services");

    return (
        <main>
            <section className="bg-white card-service">
                <div className="px-4 py-12 md:py-20 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col text-center mb-4">
                            <h6 className="text-lg font-normal text-orange-500 tracking-widest">
                                {t("color-title")}
                            </h6>
                            <h2 className="text-3xl sm:text-4xl lg:w-3/4 mx-auto  font-bold">
                                {t("title")}
                            </h2>
                        </div>
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center text-center gap-8 py-8">
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <Image
                                        src="/services/serv-1.png"
                                        alt="" width="170" height="158" priority={true}
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-base lg:text-lg font-bold text-gray-900">
                                        {t("service-1")}
                                    </h5>
                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"/services/cybersecurity-audits"}
                                              className="px-5 py-2.5 font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-all">
                                            {tb('LearnMore')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <Image
                                        src="/services/serv-2.png"
                                        alt="" width="170" height="158"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-base lg:text-lg font-bold text-gray-900">
                                        {t("service-2")}
                                    </h5>

                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"/services/vulnerability-scanning-service"}
                                              className="px-5 py-2.5 font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-all">
                                            {tb('LearnMore')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <Image
                                        src="/services/serv-3.png"
                                        alt="" width="170" height="158"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-base lg:text-lg font-bold text-gray-900">
                                        {t("service-3")}
                                    </h5>
                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"/services/penetration-testing-services"}
                                              className="px-5 py-2.5 font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-all">
                                            {tb('LearnMore')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <Image
                                        src="/services/serv-4.png"
                                        alt="" width="155" height="155"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-base lg:text-lg font-bold text-gray-900">
                                        {t("service-4")}
                                    </h5>
                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"/services/red-teaming-services"}
                                              className="px-5 py-2.5 font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-all">
                                            {tb('LearnMore')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <Image
                                        src="/services/serv-5.png"
                                        alt="" width="170" height="158"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-base lg:text-lg font-bold text-gray-900">
                                        {t("service-5")}
                                    </h5>
                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"/services/compliance-and-certification-support"}
                                              className="px-5 py-2.5 font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-all">
                                            {tb('LearnMore')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <Image
                                        src="/services/serv-6.png"
                                        alt="" width="170" height="158"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-base lg:text-lg font-bold text-gray-900">
                                        {t("service-6")}
                                    </h5>
                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"/services/security-trainings"}
                                              className="px-5 py-2.5 font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-all">
                                            {tb('LearnMore')}
                                        </Link>
                                    </div>

                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <Image
                                        src="/services/serv-7.png"
                                        alt="" width="155" height="155"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-base lg:text-lg font-bold text-gray-900">
                                        {t("service-7")}
                                    </h5>

                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"/services/security-operations-center"}
                                              className="px-5 py-2.5 font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-all">
                                            {tb('LearnMore')}
                                        </Link>
                                    </div>

                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <Image
                                        src="/services/serv-8.png"
                                        alt="" width="170" height="158"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-base lg:text-lg font-bold text-gray-900">
                                        {t("service-8")}
                                    </h5>
                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"/services/incident-response-and-recovery"}
                                              className="px-5 py-2.5 font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-all">
                                            {tb('LearnMore')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <Image
                                        src="/services/serv-9.png"
                                        alt="" width="170" height="158"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-base lg:text-lg font-bold text-gray-900">
                                        {t("service-9")}
                                    </h5>
                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"/services/ad-hoc-emergiences"}
                                              className="px-5 py-2.5 font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-all">
                                            {tb('LearnMore')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
