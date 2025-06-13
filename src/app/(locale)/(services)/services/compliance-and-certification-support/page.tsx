import Background from "@/components/Background";
import {useTranslations} from "next-intl";

export default function Page() {

    const t = useTranslations("Services.compliance-and-certification-support")

    return (
        <>
            <section className="bg-gray-200/75 relative overflow-hidden">
                <Background align={"right"}/>
                <div className="max-w-screen-xl px-3 py-16 md:py-24 mx-auto relative">
                    <div
                        className="flex flex-col justify-center items-center w-full ">
                        <div className="flex flex-col justify-center text-center gap-y-2 mb-4">
                            <h1 className="text-2xl sm:text-4xl font-semibold md:leading-snug">
                                {t("title")}
                            </h1>
                            <p className="text-balance max-w-screen-md text-sm lg:text-lg mx-auto">
                                {t("description")}
                            </p>
                        </div>
                        <div className="border border-orange-500/50 mb-4 w-32"></div>
                    </div>
                </div>
            </section>
            <section className="relative overflow-hidden">
                <div className="max-w-screen-lg px-3 py-16 md:py-24 mx-auto relative">
                    <div className="flex flex-col gap-y-2 mb-4" dangerouslySetInnerHTML={{__html: t.raw("text")}}>
                    </div>
                    <div className="bg-gray-200/75 rounded-lg w-fit relative p-4 mb-8">
                        <h4 className="text-lg font-semibold">{t("ul")}</h4>
                        <ul className="list-disc text-gray-600 ml-4">
                            <li> {t("li-1")}</li>
                            <li> {t("li-2")}</li>
                            <li> {t("li-3")}</li>
                            <li> {t("li-4")}</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-y-8">
                        <div className="flex flex-col gap-y-2">
                            <h3 className="font-bold text-xl md:text-2xl text-balance mb-2">
                                {t("content.content-1.title")}
                            </h3>
                            <div className="border border-orange-500/50 mb-4 w-32"></div>
                            <div className="bg-gray-200/75 rounded-lg w-fit relative p-4">
                                <h4 className="text-lg font-semibold">{t("result")}</h4>
                                <ul className="list-disc text-gray-600 ml-4">
                                    <li> {t("content.content-1.list-1")}</li>
                                    <li> {t("content.content-1.list-2")}</li>
                                    <li> {t("content.content-1.list-3")}</li>
                                    <li> {t("content.content-1.list-4")}</li>
                                    <li> {t("content.content-1.list-5")}</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-y-2"
                                 dangerouslySetInnerHTML={{__html: t.raw("content.content-1.text")}}>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h3 className="font-bold text-xl md:text-2xl text-balance mb-2">
                                {t("content.content-2.title")}
                            </h3>
                            <div className="border border-orange-500/50 mb-4 w-32"></div>
                            <div className="bg-gray-200/75 rounded-lg w-fit relative p-4">
                                <h4 className="text-lg font-semibold">{t("result")}</h4>
                                <ul className="list-disc text-gray-600 ml-4">
                                    <li> {t("content.content-2.list-1")}</li>
                                    <li> {t("content.content-2.list-2")}</li>
                                    <li> {t("content.content-2.list-3")}</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-y-2">
                                <p>
                                    {t("content.content-2.text")}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h3 className="font-bold text-xl md:text-2xl text-balance mb-2">
                                {t("content.content-3.title")}
                            </h3>
                            <div className="border border-orange-500/50 mb-4 w-32"></div>
                            <div className="bg-gray-200/75 rounded-lg w-fit relative p-4">
                                <h4 className="text-lg font-semibold">{t("result")}</h4>
                                <ul className="list-disc text-gray-600 ml-4">
                                    <li> {t("content.content-3.list-1")} </li>
                                    <li> {t("content.content-3.list-2")}</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-y-2"
                                 dangerouslySetInnerHTML={{__html: t.raw("content.content-3.text")}}>

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h3 className="font-bold text-xl md:text-2xl text-balance mb-2">
                                {t("content.content-4.title")}
                            </h3>
                            <div className="border border-orange-500/50 mb-4 w-32"></div>
                            <div className="bg-gray-200/75 rounded-lg w-fit relative p-4">
                                <h4 className="text-lg font-semibold">{t("result")}</h4>
                                <ul className="list-disc text-gray-600 ml-4">
                                    <li> {t("content.content-4.list-1")} </li>
                                    <li> {t("content.content-4.list-2")}</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-y-2"
                                 dangerouslySetInnerHTML={{__html: t.raw("content.content-4.text")}}>

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h3 className="font-bold text-xl md:text-2xl text-balance mb-2">
                                {t("content.content-5.title")}
                            </h3>
                            <div className="border border-orange-500/50 mb-4 w-32"></div>
                            <div className="bg-gray-200/75 rounded-lg w-fit relative p-4">
                                <h4 className="text-lg font-semibold">{t("result")}</h4>
                                <ul className="list-disc text-gray-600 ml-4">
                                    <li> {t("content.content-5.list-1")} </li>
                                    <li> {t("content.content-5.list-2")}</li>
                                    <li> {t("content.content-5.list-3")}</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-y-2"
                                 dangerouslySetInnerHTML={{__html: t.raw("content.content-5.text")}}>

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h3 className="font-bold text-xl md:text-2xl text-balance mb-2">
                                {t("content.content-6.title")}
                            </h3>
                            <div className="border border-orange-500/50 mb-4 w-32"></div>
                            <div className="bg-gray-200/75 rounded-lg w-fit relative p-4">
                                <h4 className="text-lg font-semibold">{t("result")}</h4>
                                <ul className="list-disc text-gray-600 ml-4">
                                    <li> {t("content.content-6.list-1")} </li>
                                    <li> {t("content.content-6.list-2")}</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-y-2"
                                 dangerouslySetInnerHTML={{__html: t.raw("content.content-6.text")}}>

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h3 className="font-bold text-xl md:text-2xl text-balance mb-2">
                                {t("content.content-7.title")}
                            </h3>
                            <div className="border border-orange-500/50 mb-4 w-32"></div>
                            <div className="bg-gray-200/75 rounded-lg w-fit relative p-4">
                                <h4 className="text-lg font-semibold">{t("result")}</h4>
                                <ul className="list-disc text-gray-600 ml-4">
                                    <li> {t("content.content-7.list-1")} </li>
                                    <li> {t("content.content-7.list-2")}</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-y-2"
                                 dangerouslySetInnerHTML={{__html: t.raw("content.content-7.text")}}>

                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}
