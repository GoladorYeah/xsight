import BackButton from "@/components/ui/BackButton";
import {ArrowLeft} from "lucide-react";

export default function NavbarBack() {
    return (
        <nav className="border-gray-200 sticky top-0 backdrop-blur-xl bg-white/50 shadow-md z-40">
            <div
                className="max-w-screen-xl px-2.5 py-4 mx-auto flex items-center justify-between"> {/* For basic layout */}
                <div>
                    <BackButton className="flex items-center text-lg hover:text-gray-500 transition duration-150">
                        <ArrowLeft className="mr-2 "/> Back
                    </BackButton>
                </div>

            </div>
        </nav>
    )
}