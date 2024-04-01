'use client'

// @ts-ignore
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import IconShield from "@/components/Icons/IconShield";

import './module.css'

interface Data {
    Data: Array<{
        title: string;
        text: string;
    }>

}


function CaseSlider({Data}: Data) {


    return (
        <div className="slider-container">
            <Splide options={{
                pagination: true,
                direction: 'ttb',
                perPage: 1,
                height: '520px',
                wheel: true,
                gap: '2rem',
                padding: '0.5rem',
                breakpoints: {
                    640: {
                        height: 750,
                    }
                }
            }}
                    aria-label="My Favorite Images">
                {Data.map((data) => (
                    <SplideSlide key={data.title}>
                        <div className="flex flex-col h-full justify-center  bg-gray-200/75 rounded-lg shadow-md px-8">
                            <div className="flex flex-row items-center">
                                <div className="hidden md:block">
                                    <IconShield/>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900">
                                    {data.title}
                                </h3>
                            </div>
                            <div
                                className="border border-orange-500/50 md:ml-[47px] md:mr-2 mb-4 w-1/3 md:w-[100px]"></div>
                            <div className="flex flex-col gap-2" dangerouslySetInnerHTML={{__html: data.text}}></div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}

export default CaseSlider;