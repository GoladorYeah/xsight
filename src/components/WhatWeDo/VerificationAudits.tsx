import Image from "next/image";
import Slider from "@/components/WhatWeDo/Slider";
import './module.css'
import {useTranslations} from "next-intl";


export default function VerificationAudits() {

    const t = useTranslations('VerificationData');

    const VerificationData = [
        {
            id: 1,
            title: t('items.item-1.title'),
            items: [
                t('items.item-1.list-1'),
                t('items.item-1.list-2'),
                t('items.item-1.list-3')
            ],
        },
        {
            id: 2,
            title: t('items.item-2.title'),
            items: [
                t('items.item-2.list-1')
            ],

        },
        {
            id: 3,
            title: t('items.item-3.title'),
            items: [
                t('items.item-3.list-1'),
                t('items.item-3.list-2')
            ],

        },
        {
            id: 4,
            title: t('items.item-4.title'),
            items: [
                t('items.item-4.list-1')
            ],

        },
        {
            id: 5,
            title: t('items.item-5.title'),
            items: [
                t('items.item-5.list-1'),
                t('items.item-5.list-2')
            ],

        },
        {
            id: 6,
            title: t('items.item-6.title'),
            items: [
                t('items.item-6.list-1')
            ],

        },
    ];

    return (
        <section className="relative" id="monitoringProtection">
            <div className="max-w-screen-xl px-3 py-10 mx-auto relative overflow-x-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 content-center gap-4 grid-flow-dense">
                    <div className="row-start-2 md:row-start-1 col-span-1 md:col-start-2 md:text-end">
                        <h6 className="text-sm md:text-lg text-balance text-orange-500 mb-1">
                            WHAT WE DO
                        </h6>
                        <h2 className="font-bold text-xl md:text-2xl text-balance">
                            {t('title')}
                        </h2>
                        <p className="lg:text-lg text-gray-500 text-balance">
                            {t('text')}
                        </p>
                    </div>
                    <div className="row-start-1 md:row-span-2 md:col-span-1 self-center">
                        <Image className="object-contain mx-auto w-[250px] lg:w-[320px]"
                               src="/audits.png" width={320} height={409} alt=""/>
                    </div>
                    <div className="row-start-3 md:row-start-2 md:col-span-1 md:col-start-2 self-center">
                        <Slider Data={VerificationData}/>
                    </div>

                </div>
            </div>
        </section>
    )
}