import Image from "next/image";
import {Link} from "@/navigation";
import {useTranslations} from "next-intl";

export default function Standart() {

    const t = useTranslations("Subscriptions.Standart");
    const tb = useTranslations("Buttons");

    return (
        <div
            className="shadow-lg w-full relative rounded-md">
            <div
                className="bg-gray-200/75 rounded-md p-8 relative h-full flex flex-col justify-between">
                <Image
                    src="/tier-2.png"
                    alt="" width={155} height={155}
                    className="object-contain mx-auto"/>
                <h5 className="mb-1 text-base md:text-lg font-semibold text-gray-900">
                    Standard Tier: better for SME
                </h5>
                <div>
                    <p className="text-sm md:text-base text-gray-500">
                       - IT Infrastructure Compliance Audit
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                       - 24/7 monitoring and threat detection
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                       - Incident response, Forensic & Recovery
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                       - Cybersecurity Training
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                       - Costs Cut
                    </p>
                </div>

                <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                    {/* Button */}
                    <Link href={"/meetings"}
                          className="px-5 py-2.5 font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-all">
                        {tb('GetStarted')}
                    </Link>
                </div>
            </div>
        </div>
    )
}