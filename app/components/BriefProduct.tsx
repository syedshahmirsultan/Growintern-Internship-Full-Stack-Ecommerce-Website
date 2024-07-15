import { singleProductType } from '@/types';
import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

// BriefProduct Component Function
const BriefProduct = ({productData}:{productData :singleProductType}) => {
    return (
        <section className="w-full bg-white dark:bg-slate-900">
        <div className='w-full p-6 md:p-0 md:max-w-7xl md:mx-auto flex flex-col gap-y-8 md:flex-row md:gap-x-24'>
     {/* Product Image */}
    <Image src={urlForImage(productData.image[0])} alt={productData.productname} width={500} height={500}/>
      <div className='flex flex-col gap-y-4'>
        {/* Product Name */}
        <h1 className='text-gray-950 text-xl font-bold dark:text-white'>{productData.productname}</h1>
        {/* Product Type */}
        <p className='text-blue-700 text-lg font-semibold'>{productData.producttype}</p>
        {/* Product Price */}
        <p className='text-gray-950 font-extrabold text-lg dark:text-white'>${productData.price}.00</p>
        
        {/* Product Description */}
        <div>
         <h2 className="text-gray-950 font-bold text-lg dark:text-white">Product Description </h2>  
         <p className='text-gray-950 font-medium text-[15px] dark:text-white'>{productData.DescriptionText}</p> 
        </div>
        {/* Button */}
        <button className='px-6 py-3 flex justify-center bg-slate-950 text-white dark:text-gray-950 dark:bg-white dark:hover:bg-gray-100/70 rounded-md hover:bg-slate-900 '>Add to Cart</button>
        </div> 
        </div>
            
        </section>
    );
}

export default BriefProduct;
