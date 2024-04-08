import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {SquareArrowDown} from "lucide-react";
import {LogoTech} from "@/components/Navbar/LogoTech";
import {Link} from "@/navigation";

export default function DropDownLogo() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><SquareArrowDown color="#767676" size={15} strokeWidth={3}/></DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-white mt-2">
                <DropdownMenuItem>
                    <Link href="https://tech.xsight.ch" className="flex" target="_blank">
                        <LogoTech/>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}