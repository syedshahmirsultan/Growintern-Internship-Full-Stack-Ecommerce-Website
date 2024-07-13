'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const Hero = () => {
    
    //imagesUrl Array
    const imagesUrl =["/images/slide-1.png","/images/slide-2.png","/images/slide-3.png"];
// State for CurrentImageIndex
    const [currentImageIndex,setCurrentImageIndex] = useState<number>(0);

    //UseEffect hook
    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentImageIndex((i :number) => (i == imagesUrl.length -1 ? 0 : i+1))
      }, 1000);

      return ()=> clearInterval(timer);

    }, [currentImageIndex]);

//return Statement
    return (
        <section className='w-full h-[500px]'>
        
        <div className="relative " key={currentImageIndex}>
    <Image src={imagesUrl[currentImageIndex]} alt="Background Image" width={1000} height={1000} className=' w-full h-full object-cover'/>
  <div className='absolute bottom-2 md:bottom-20 w-24 h-12 text-md  rounded-md left-0  md:w-52 md:h-24 dark:bg-slate-900 dark:text-white bg-white text-gray-900 md:text-3xl font-bold flex justify-center items-center'>
Shop Now
  </div>
        </div>
            
        </section>
    );
}

export default Hero;

