import Background from "@/components/Background";
import {useTranslations} from "next-intl";

export default function Page() {

    const t = useTranslations("Services.cybersecurity-audits")

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
                            <p className="text-balance max-w-screen-md text-sm mx-auto lg:text-lg">
                                {t("description")}
                            </p>
                        </div>
                        <div className="border border-orange-500/50 mb-4 w-32"></div>
                    </div>
                </div>
            </section>
            <section className="relative overflow-hidden">
                <div className="max-w-screen-lg px-3 py-16 md:py-24 mx-auto relative">
                    <div className="flex flex-col gap-y-2 mb-8" dangerouslySetInnerHTML={{__html: t.raw("text")}}>


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
                                    <li> {t("content.content-1.list")}</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-y-2">
                                <p>
                                    {t("content.content-1.text")}
                                </p>
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
                                    <li> {t("content.content-2.list")}</li>
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
                                    <li> {t("content.content-3.list")} </li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-y-2">
                                <p>
                                    {t("content.content-3.text")}
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}