'use client'

// @ts-ignore
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';
import Image from "next/image";

function CertificatesImage() {

    const dataImg = [
        {src: "/certificates/c1.png"},
        {src: "/certificates/c2.png"},
        {src: "/certificates/c3.png"},
        {src: "/certificates/c4.png"},
        {src: "/certificates/c5.png"},
        {src: "/certificates/c6.png"},
        {src: "/certificates/c7.png"},
        {src: "/certificates/c8.png"},
        {src: "/certificates/c9.png"},
    ]

    return (


        <div className="slider-container">
            <Splide options={{
                type: 'loop',
                autoWidth: true,
                arrows: false,
                gap: '1.5rem',
                pagination: false,
                autoScroll: {
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    rewind: false,
                    speed: 0.3,
                }
            }}
                    extensions={{AutoScroll}}
                    aria-label="My Favorite Images">

                {dataImg.map((image) => {
                        return (
                            <SplideSlide key={image.src}>
                                <Image src={image.src} alt="Banner" width={120} height={112}/>
                            </SplideSlide>
                        )
                    }
                )}

            </Splide>
        </div>
    );
}

export default CertificatesImage;
