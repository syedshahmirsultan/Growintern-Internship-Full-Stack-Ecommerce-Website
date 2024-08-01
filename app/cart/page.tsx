// "use client"
// import { typeOfCart } from "@/lib/drizzle";
// import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
// import { LuLogIn } from "react-icons/lu";
// import CartComp from "../components/CartComp";
// import { getAllCartProductsByUserid } from "../utils/apiCalling";

// const Cart = async () => {
//     const { getUser } = getKindeServerSession();
//     const user: KindeUser | null = await getUser();
    
//     if (!user) {
//         return (
//             <div className="h-48 flex items-center justify-center gap-x-4">
//                 <LoginLink>
//                     <LuLogIn color={'blue'} size={30} />
//                     <h2 className='text-xl font-semibold text-black-700'>Please Login to View your Cart</h2>
//                 </LoginLink>
//             </div>
//         );
//     }

//     const data: typeOfCart[] = await getAllCartProductsByUserid(user?.id as string);

//     return (
//         <>
//             <CartComp data={data} user={user} />
//         </>
//     );
// }

// export default Cart;


import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

import CartMain from "../components/CartMain";

const Cart = async () => {
    const { getUser } = getKindeServerSession();
    const user: KindeUser | null = await getUser();
    
   
    return (
        <>
            <CartMain user={user} />
        </>
    );
}

export default Cart;