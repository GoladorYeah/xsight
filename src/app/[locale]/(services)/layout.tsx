import NavbarBack from "@/components/Navbar/NavbarBack";
import clsx from "clsx";

export default function ServicesLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <section>
            <NavbarBack/>
            {children}
        </section>
    )
}