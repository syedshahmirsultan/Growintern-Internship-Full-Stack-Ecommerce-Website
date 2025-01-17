'use client';

import { typeOfCart } from "@/lib/drizzle";
import { urlForImage } from "@/sanity/lib/image";
import { singleProductType } from "@/types";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import Link from 'next/link';
import { Trash2, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { getProductFromIdCart, handleDelete } from "../utils/apiCalling";
import Pricing from "./Pricing";
import Quantity from "./Quantity";
import Image from "next/image";

const CartComp = ({ data, user }: { data: typeOfCart[], user: KindeUser | null }) => {
    const [productData, setProductData] = useState<singleProductType[]>([]);

    useEffect(() => {
        if (data.length > 0) {
            dataGetter();
        } else {
            setProductData([]);
        }
    }, [data]);

    const dataGetter = async () => {
        const productPromise = data.map((item) => getProductFromIdCart(item.productid));

        try {
            const products = await Promise.all(productPromise);

            const validProductData:singleProductType[] = products.map((item) => ({
                price: item.result[0]?.price,
                productname: item.result[0]?.productname,
                slug: item.result[0]?.slug,
                DescriptionText: item.result[0]?.DescriptionText,
                image: item.result[0]?.image,
                _id: item.result[0]?._id,
                producttype: item.result[0]?.producttype
            }));

            setProductData(validProductData);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    if (data.length === 0) {
        return (
            <div className="w-full md:max-w-6xl bg-white dark:bg-slate-800 md:mx-auto pt-20">
                <div className="h-80 bg-gray-100/50 dark:bg-slate-800 rounded-md w-full p-8 md:p-2 flex flex-col gap-y-4 items-center justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-950 dark:text-white">Your Cart is Empty</h2>
                    <Link href="/" className="mt-4">
                        <button className="bg-gray-950 dark:bg-white w-40 h-12 p-2 rounded-md text- dark:text-gray-950 font-semibold text-sm">
                            Start Shopping
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <section className="lg:ml-20 ml-2 lg:pb-60 pb-80 w-full p-4 bg-white dark:bg-slate-800 md:max-w-6xl">
            <h1 className="text-slate-800 dark:text-white font-bold text-center text-3xl md:text-5xl  mb-16 mt-12">
                Shopping Cart
            </h1>
            <div className="grid lg:grid-cols-2 gap-4">
                {productData.map((item, index: number) => (
                    <div key={index} className="flex flex-col bg-white gap-4 border border-white shadow-sm rounded-lg p-4 relative">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg lg:text-xl text-slate-800  font-bold">
                                {item.productname}
                            </h2>
                            <Trash2
                                size={24}
                                color={'red'}
                                onClick={() => handleDelete(user?.id as string, item._id)}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            {item.image && item.image[0] && (
                                <Image
                                    src={urlForImage(item.image[0])}
                                    width={150}
                                    height={70}
                                    alt="Product Image"
                                    className="object-cover"
                                />
                            )}
                            <Quantity data={data[index]} item={item} user={user} />
                        </div>
                        <p className="text-lg text-gray-900  font-extrabold ml-2">
                            ${item.price}
                        </p>
                        <div className="flex justify-between items-center flex-wrap">
                            <div className="flex items-center">
                                <Clock size={16} className="mr-1 text-blue-800" />
                                <p className="text-md text-blue-700 font-bold">Estimated Delivery:</p>
                                <p className="text-md text-gray-950 font-semibold ml-1">5 Working Days</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Pricing productData={productData} data={data} />
        </section>
    );
};

export default CartComp;

