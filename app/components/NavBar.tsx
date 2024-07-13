import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
    return (
        <section className='h-12 md:h-20 bg-white'>
            <div className='w-full pr-4 pl-4 md:max-w-6xl mx-auto bg-white flex justify-between'>
                {/* Logo */}
                <svg className ="mt-8 bg-white" width="120" height="26" viewBox="0 0 215 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M214.505 0L57.6344 66.5427C44.5737 72.0839 33.5865 74.8486 24.7325 74.8486C14.7701 74.8486 7.51288 71.3332 3.05605 64.3143C-2.72353 55.2576 -0.197201 40.6954 9.71747 25.3229C15.6043 16.3378 23.088 8.09142 30.381 0.202586C28.665 2.99109 13.5189 28.1948 30.083 40.0638C33.3601 42.4472 38.0195 43.615 43.7515 43.615C48.3513 43.615 53.6304 42.8643 59.4338 41.3508L214.505 0Z" fill="black"/>
</svg>


    <div>

<Link href="/cart"><FaShoppingCart size={24}  className="mt-8 text-gray-900 hover:text-black"/></Link></div>
</div>
           
            
        </section>
    );
}

export default NavBar;
