import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";


//Footer Component Function
const Footer = () => {


const iconsData = [
    {
       href:"https://www.linkedin.com/in/syedshahmirsultan/",
       icon:<FaInstagram size={22} color='black'/> 
    },
    {
        href:"https://www.linkedin.com/in/syedshahmirsultan/",
        icon:<FaLinkedinIn size={22} color='black'/> 
     },
     {
        href:"https://www.facebook.com/profile.php?id=100093155077830",
        icon:<FaFacebookF size={22} color='black' /> 
     },
     {
        href:"https://github.com/syedshahmirsultan",
        icon:<FaGithub  size={22} color='black'/> 
     },
     {
        href:"https://www.linkedin.com/in/syedshahmirsultan/",
        icon:<FaYoutube  size={22} color='black'/> 
     }
]




    return (
        <section className=' w-full h-[900px] md:h-[350px] bg-black overflow-x-hidden'>
            <div className="pr-4 pl-4 pt-12 md:p-12  md:max-w-7xl md:mx-auto grid gap-y-16 grid-cols-1 md:grid-cols-2 md:justify-between">
        {/* Column 1*/}
        <div className="w-[130%] flex flex-col gap-y-10 md:gap-y-0  md:flex-row gap-x-10 md:gap-x-24">
        <ul className="flex flex-col gap-y-2 text-white font-semibold text-md">
        <li className='cursor-pointer'>FIND A STORE</li>   
        <li className='cursor-pointer'>BECOME A PARTNER</li> 
        <li className='cursor-pointer'>SIGN UP FOR EMAIL</li>  
        <li className='cursor-pointer'>SEND US FEEDBACK</li> 
        <li className='cursor-pointer'>STUDENT DISCOUNT</li> 
            </ul> 

{/* Column 2*/}
        <ul className="flex flex-col gap-y-2">
        <li className="text-white font-semibold text-md cursor-pointer">GET HELP</li> 
        <li className='text-gray-400 text-[15px] hover:text-white cursor-pointer'>Order Status</li> 
        <li className='text-gray-400 text-[15px] hover:text-white cursor-pointer'>Delivery</li> 
        <li className='text-gray-400 text-[15px] hover:text-white cursor-pointer'>Returns</li> 
        <li className='text-gray-400 text-[15px] hover:text-white cursor-pointer'>Payment Options</li> 
        <li className='text-gray-400 text-[15px] hover:text-white cursor-pointer'>Contact Us</li> 
        </ul>

{/* Column 3*/}
        <ul className='flex flex-col gap-y-2'>
        <li className="text-white font-semibold text-md cursor-pointer">ABOUT NIKE</li> 
        <li  className='text-gray-400 text-[15px] hover:text-white cursor-pointer'>News</li> 
        <li className='text-gray-400 text-[15px] hover:text-white cursor-pointer'>Careers</li> 
        <li className='text-gray-400 text-[15px] hover:text-white cursor-pointer'>Investors</li> 
        <li className='text-gray-400 text-[15px] hover:text-white cursor-pointer'>Sustainability</li> 
        </ul>
            </div>

{/* IconsData Mapping*/}
            <div className="flex gap-x-6 justify-center md:justify-end">
    {
        iconsData.map((item,index)=> {
            return (
                <Link href={item.href} key={index}><div className='w-11 h-11 rounded-full bg-zinc-800 hover:bg-zinc-700 flex justify-center items-center'>
                   {item.icon} 
                    </div></Link>
            )
        })
    }
            </div>
            
            </div>
            <div className="flex flex-col gap-y-4 md:flex-row  md:max-w-7xl md:mx-auto md:justify-between md:mt-4 mt-8">
                {/* Copy right text*/}
  <p className="text-gray-400 hover:text-white text-[15px] md:text-[17px] text-center cursor-pointer">© 2024 Nike, Inc. All Rights Reserved</p>
 {/* Privacy Policy  Row*/}
  <ul className="flex gap-x-2 md:gap-x-4 text-[13px] md:text-[15px] justify-center md:justify-end text-gray-400">
    <li className=" hover:text-white cursor-pointer">Guides </li>
    <li className=" hover:text-white cursor-pointer">Terms of use</li>
    <li className=" hover:text-white cursor-pointer">Terms of sale</li>
    <li className=" hover:text-white cursor-pointer">Privacy Policy</li>
    </ul>
            </div>
            </section>
    );
}

export default Footer;
