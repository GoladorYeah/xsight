import Image from "next/image";

export default function IconShield() {

    return (
        <figure className="basis-[30px] md:basis-[35px] mr-3 shrink-0">
            <Image className="object-contain"
                   src="/icon-shield.png" width={35} height={41} alt="Icon Shield"/>
        </figure>
    )
}