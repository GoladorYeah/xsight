import Image from "next/image";
import {Link} from "@/navigation";
import {useTranslations} from "next-intl";

export default function Advanced() {

    const t = useTranslations("Subscriptions.Advanced");
    const tb = useTranslations("Buttons");

    return (
        <div
            className="shadow-lg w-full relative rounded-md">
            <div
                className="bg-gray-200/75 rounded-md p-8 relative h-full flex flex-col justify-between">
                <Image
                    src="/tier-3.png"
                    alt="" width={155} height={155}
                    className="object-contain mx-auto"/>
                <h5 className="mb-1 text-base md:text-lg font-semibold text-gray-900">
                    Advanced Tier: for any Corporate need
                </h5>
                <div>
                    <p className="text-sm md:text-base text-gray-500">
                       - IT Asset Inventory Compliance (ISO 27001/NIST)
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                       - 24/7 SOC deployment / Red Teaming
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                       - Strategic Guidance
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                       - Training & Knowlage sharing
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                       - Significant Costs Cut
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