import Background from "@/components/Background";
import {useTranslations} from "next-intl";

export default function Page() {

    const t = useTranslations("Pages.Policy")

    return (
        <>
            <section className="bg-gray-200/75 relative overflow-hidden">
                <Background align={"right"}/>
                <div className="max-w-screen-xl px-3 py-16 md:py-24 mx-auto relative">
                    <div
                        className="flex flex-col justify-center items-center w-full ">
                        <div className="flex flex-col justify-center text-center gap-y-2 mb-4">
                            <h1 className="text-3xl sm:text-4xl font-semibold md:leading-snug">
                                {t("title")}
                            </h1>
                        </div>
                        <div className="border border-orange-500/50 mb-4 w-32"></div>
                    </div>
                </div>
            </section>
            <section className="relative overflow-hidden">
                <div className="max-w-screen-lg px-3 py-16 md:py-24 mx-auto relative">
                    <div className="flex flex-col gap-y-8">
                        <div className="flex flex-col gap-y-2">
                            <h3 className="font-bold text-xl md:text-2xl text-balance mb-2">
                                {t("title-2")}
                            </h3>
                            <div className="border border-orange-500/50 mb-4 w-32"></div>

                            <div className="flex flex-col gap-y-2"
                                 dangerouslySetInnerHTML={{__html: t.raw("content")}}>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}
