import {ReactNode} from "react";

export default function Heading2({children}: { children: ReactNode }) {

    return (
        <h2 className="font-bold text-xl md:text-2xl text-center mb-8 text-balance">
            {children}
        </h2>
    )
}