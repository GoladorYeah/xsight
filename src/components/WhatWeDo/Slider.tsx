'use client'

// @ts-ignore
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import IconShield from "@/components/Icons/IconShield";
import {Link} from "@/navigation";
import './module.css'

interface Data {
    Data: Array<{
        id: number;
        title: string;
        text?: string;
        items: Array<string>
    }>

}


function AutoPlay({Data}: Data) {


    return (
        <div className="slider-container">
            <Splide options={{
                pagination: true,
                arrows: false,
                autoHeight: true,
                type: 'loop',
                perPage: 1,
                gap: '6rem',
            }}
                    aria-label="My Favorite Images">
                {Data.map((data) => (
                    <SplideSlide key={data.id}>
                        <div className="flex flex-col bg-gray-200/75 rounded-lg shadow-md p-6 mb-2 module">
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
                            <p>{data.text}</p>
                            <ul className="flex flex-col gap-1 list-disc justify-between px-4">
                                {data.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                <Link href={"/services#adHock"}
                                      className="px-5 py-2.5 font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-all">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}

export default AutoPlay;
