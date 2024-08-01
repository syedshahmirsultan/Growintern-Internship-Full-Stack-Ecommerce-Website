"use client"
import { typeOfCart } from "@/lib/drizzle";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { LuLogIn } from "react-icons/lu";
import CartComp from "./CartComp";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";


const CartMain = ({user,data}:{user:KindeUser|null, data:typeOfCart[]}) => {
    
    if (!user) {
        return (
            <div className="h-48 flex dark:bg-slate-800 items-center justify-center">
                <LoginLink className="flex gap-x-2 md:gap-x-4">
                    <LuLogIn color={'blue'} size={30} />
                    <h2 className='text-xl md:text-2xl font-semibold text-black-700 dark:text-white'> Please Login to View your Cart</h2>
                </LoginLink>
            </div>
        );
    }


    return (
        <>
            <CartComp data={data} user={user} />
        </>
    );
}

export default CartMain;
