import React from 'react';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import { typeOfCart } from '@/lib/drizzle';
import { singleProductType } from '@/types'; // Fixed import
import { updateCartItem } from '../utils/apiCalling';

const Quantity = ({ data, item, user }: { data: typeOfCart | undefined, item: singleProductType, user: KindeUser|null }) => {
    const quantity = data?.quantity ?? 0;

    return (
        <div className="flex justify-between">
            <div className="flex ml-1 md:gap-2 items-center text-lg">
                <button
                    onClick={() => updateCartItem(user?.id as string, item._id, quantity - 1)}
                    className="select-none cursor-pointer flex justify-center items-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200"
                >
                    -
                </button>
                <p className=" ring-sky-200 rounded-md cursor-pointer flex justify-center font-semibold  text-lg h-8 w-8">
                    {quantity}
                </p>
                <button
                    onClick={() => updateCartItem(user?.id as string, item._id, quantity + 1)}
                    className="select-none cursor-pointer flex justify-center items-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200"
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default Quantity;
