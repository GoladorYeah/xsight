import Navbar from "@/components/Navbar/Navbar";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import Meeting from "@/components/Meeting";

export default function PagesLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <section>
            <Navbar/>
            {children}
            <Form/>
            <Footer/>
            <Meeting/>
        </section>
    )

}