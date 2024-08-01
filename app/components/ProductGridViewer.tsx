import { singleProductType } from '@/types';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { urlForImage } from './../../sanity/lib/image';

//ProductGridViewer Component Function
const ProductGridViewer = ({productData}:{productData:singleProductType[]}) => {
    return (
        <section className='mt-6 md:mt-14 w-full p-8 md:p-0 md:max-w-7xl mx-auto'>
            
            {/*ProductData Mapping*/}
            <div className='w-full grid grid-cols-1 md:grid-cols-3 md:gap-x-6 gap-y-8'>
                {
                productData.map((item:singleProductType)=>{
                    return (
                    <Link href={`/brief/${item.slug.current}`} key={item.slug.current} className='hover:scale-110 duration-300'>
                    <div className='flex flex-col gap-y-3 h-[400px] border border-white dark:border-none shadow-sm rounded-lg'>
                    <Image src={urlForImage(item.image[0])} alt={item.productname} width={600} height={800} className='w-full h-[80%] object-fill'/>
                    <div className='flex flex-col items-center '><text className="text-gray-950 font-bold text-xl md:text-xl  dark:text-white">{item.productname}</text>
                    <p className='mt-1 text-gray-950 text-md font-extrabold  dark:text-white'>${item.price}.00</p>
                    </div></div>
                        
                    </Link>
                    )
                })
                }

            </div>
        </section>
    );
}

export default ProductGridViewer;
