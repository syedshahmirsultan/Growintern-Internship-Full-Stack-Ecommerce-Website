import React from 'react';
import {RegisterLink, LoginLink ,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';


//Auth Component Function
const AuthComp = ({user}: { user: KindeUser | null}) => {
   
    return (
      
      <section>
      <div className='hidden md:flex ml-10'>
        {
           user ? (
           <div className="flex gap-x-2">
            <LogoutLink className="md:px-4 md:py-1.5 px-2 py-1 text-xs md:text-sm rounded-md bg-slate-950 hover:bg-slate-900 dark:hover:bg-gray-100/90 dark:bg-white dark:text-gray-950 font-semibold  text-white">Log out</LogoutLink>
            </div>
            ) :(
        <div className=" flex gap-x-2 md:gap-x-4">
            <LoginLink className="md:px-5 md:py-2.5  px-3 py-1.5 text-xs md:text-sm rounded-md bg-slate-950 hover:bg-slate-900 dark:hover:bg-gray-100/90 dark:bg-white dark:text-gray-950 font-semibold  text-white">Sign in</LoginLink>
            <RegisterLink className="md:px-5 md:py-2.5  px-3 py-1.5 text-xs md:text-sm rounded-md bg-slate-950 hover:bg-slate-900 dark:hover:bg-gray-100/90 dark:bg-white dark:text-gray-950 font-semibold  text-white">Sign up</RegisterLink>
            
        </div>)  }
        
        </div>
        <div className='flex md:hidden'>
        {
           user ? (
           <div>
            <LogoutLink className='text-gray-950 px-1.5 py-1.5 font-semibold hover:text-gray-800 text-xs dark:hover:text-gray-100/90 dark:text-white'>Log out</LogoutLink>
            </div>
            ) :(
        <div className=" flex gap-x-2">
            <LoginLink className='  font-semibold px-1.5 rounded-md py-1.5 hover:bg-slate-900 bg-slate-950 text-xs text-white dark:bg-white dark:hover:bg-gray-100/90 dark:text-gray-950'>Sign in</LoginLink>
            <RegisterLink className='  font-semibold px-1.5 rounded-md py-1.5 hover:bg-slate-900 bg-slate-950 text-xs text-white dark:bg-white  dark:hover:bg-gray-100/90 dark:text-gray-950'>Sign up</RegisterLink>
            
        </div>)  } </div>
        </section>
    );
}

export default AuthComp;
