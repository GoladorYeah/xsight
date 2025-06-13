import NavbarBack from "@/components/Navbar/NavbarBack";

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