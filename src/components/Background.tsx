import Image from "next/image";

export default function Background({align}: any) {

    const positionClass = align === "left" ? "absolute -left-[41%] -top-96 opacity-40" : "absolute -right-80 bottom-0 opacity-40";

    return (
        <figure className={positionClass}>
            <Image className="star" src="/background.png" alt="Background" width={1689} height={1262}
                   priority={true}/>
        </figure>
    )
}