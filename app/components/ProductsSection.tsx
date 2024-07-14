import React from 'react';

const ProductsSection = () => {
    return (
        <section className='w-full dark:bg-slate-900 bg-white'>
            <div className=" w-full  md:max-w-7xl h-auto mx-auto md:h-[1000px] flex flex-col">
        <h2 className='mt-4 md:mt-12 text-black dark:text-white text-lg md:text-2xl font-semibold text-center'>Cushioning for Your Miles</h2>
        <p className=" mt-2 md:mt-4 text-black text-sm md:text-lg dark:text-white text-center">A lightweight Nike ZoomX midsole is combined with increased stack heights to <br/>help provide cushioning during extended stretches of running.</p>
        </div></section>
    );
}

export default ProductsSection;
