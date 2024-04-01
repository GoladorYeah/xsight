import Image from "next/image";

export default function Background({align}: any) {

    const positionClass = align === "left" ? "absolute -left-[41%] -top-96 opacity-40" : "absolute -right-80 bottom-0 opacity-40";

    return (
        <figure className={positionClass}>
            <Image className="star md:w-[1689px] md:h-[1200px]" src="/background.png" alt="Background" width={750}
                   height={533}
                   priority={true}/>
        </figure>
    )
}