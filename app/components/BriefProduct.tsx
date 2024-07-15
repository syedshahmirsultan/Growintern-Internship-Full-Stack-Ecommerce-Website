import { singleProductType } from '@/types';
import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

// BriefProduct Component Function
const BriefProduct = ({productData}:{productData :singleProductType}) => {
    return (
        <main className="w-full bg-white dark:bg-slate-900 h-auto pt-8 pb-20 ">
        <div className='w-full mt-6 mb-12 p-6 md:p-0 md:max-w-6xl md:mx-auto flex flex-col gap-y-8 md:flex-row md:gap-x-16'>
     {/* Product Image */}
    <Image src={urlForImage(productData.image[0])} alt={productData.productname} width={620} height={620} className=' border border-gray-100/90 rounded-md cursor-pointer'/>
      <div className='flex flex-col gap-y-4'>
        {/* Product Name */}
        <h1 className='text-gray-950 text-2xl md:text-3xl font-bold dark:text-white'>{productData.productname}</h1>
        {/* Product Type */}
        <p className='text-blue-700 text-xl md:text-2xl font-semibold'>{productData.producttype}</p>
        {/* Product Price */}
        <p className='text-gray-950 font-extrabold text-xl md:text-2xl dark:text-white'>${productData.price}.00</p>
        {/* Product Description */}
        <div>
         <h2 className="text-gray-950 font-bold text-xl md:text-2xl dark:text-white">Product Description </h2>  
         <p className='mt-2 text-gray-950 font-medium text-md dark:text-white'>{productData.DescriptionText}</p> 
        </div>
        {/* Button */}
        <button className='px-8 mt-4 md:mt-2 dark:font-bold font-semibold py-4 flex justify-center bg-slate-950 text-white dark:text-gray-950 text-lg dark:bg-white dark:hover:bg-gray-100/90 rounded-md hover:bg-slate-900 '>Add to Cart</button>
        </div> 
        </div>
            
        </main>
    );
}

export default BriefProduct;
