import React from 'react';
import getAllProducts from '../utils/apiCalling';
import allProductType from '@/types';
import ProductGridViewer from './ProductGridViewer';

//ProductsSection Component Function
const ProductsSection = async() => {
    const data:allProductType = await getAllProducts();
    
    return (
        <section className='-mt-28 md:mt-12 w-full pb-20  dark:bg-slate-900 bg-white'>
            <div className=" w-full  md:max-w-7xl h-auto mx-auto md:h-[1500px] flex flex-col">
        <h2 className=' p-2 md:mt-12 md:p-0 text-gray-950 dark:text-white text-lg md:text-2xl font-bold text-center'>Cushioning for Your Miles</h2>
        <p className=" pt-1 pl-4 pr-4 md:p-0 md:mt-4 text-gray-950 font-medium text-sm md:text-lg dark:text-white text-center">A lightweight Nike ZoomX midsole is combined with increased stack heights to <br/>help provide cushioning during extended stretches of running.</p>
        
        {/*Product GridViewer Component*/}
       <ProductGridViewer productData={data.result}/>
        </div></section>
    );
}

export default ProductsSection;
