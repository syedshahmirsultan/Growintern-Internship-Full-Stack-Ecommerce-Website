"use client"
import { typeOfCart } from "@/lib/drizzle";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { LuLogIn } from "react-icons/lu";
import { getAllCartProductsByUserid } from "../utils/apiCalling";
import CartComp from "./CartComp";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";


const CartMain = async ({user}:{user:KindeUser|null}) => {
    
    if (!user) {
        return (
            <div className="h-48 flex items-center justify-center gap-x-4">
                <LoginLink>
                    <LuLogIn color={'blue'} size={30} />
                    <h2 className='text-xl font-semibold text-black-700'>Please Login to View your Cart</h2>
                </LoginLink>
            </div>
        );
    }

    const data: typeOfCart[] = await getAllCartProductsByUserid(user?.id as string);

    return (
        <>
            <CartComp data={data} user={user} />
        </>
    );
}

export default CartMain;
