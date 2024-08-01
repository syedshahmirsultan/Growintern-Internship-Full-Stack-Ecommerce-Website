'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
    // Images URL Array
    const imagesUrl = [
        "/images/slide-1.png",
        "/images/slide-2.png",
        "/images/slide-3.png"
    ];

    // State for Current Image Index
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    // UseEffect hook
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImageIndex((i: number) => (i === imagesUrl.length - 1 ? 0 : i + 1));
        }, 3000);

        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    // Return Statement
    return (
        <section className='w-full h-[300px] relative overflow-hidden'>
            {imagesUrl.map((url, index) => (
                <Image
                    key={url}
                    src={url}
                    alt={`Slide Image ${index + 1}`}
                    width={1000}
                    height={1000}
                    className={`absolute top-0 left-0 w-full h-full object-fill transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    priority
                />
            ))}
            <div className='absolute bottom-2 md:bottom-20 left-0 md:left-10 w-[88px] h-[36px] cursor-pointer dark:hover:bg-slate-900 text-sm rounded-sm md:rounded-md md:w-52 md:h-20 dark:bg-slate-950 dark:text-white hover:bg-gray-100/90 bg-white text-gray-900 md:text-3xl font-bold flex justify-center items-center'>
                Shop Now
            </div>
        </section>
    );
}

export default Hero;
