import {ReactNode} from "react";

export default function HeadingColor({children}: { children: ReactNode }) {

    return (
        <div className="text-sm md:text-lg text-balance text-center text-orange-500 mb-1">
            {children}
        </div>
    )
}