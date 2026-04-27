import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { format } from "date-fns";


const Header = () => {
    return (
        <div className='text-center my-8 space-y-3'>
            <Image
            src={logo}
            width={300}
            height={200}
            alt='logo'
            className='mx-auto'
            ></Image>
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <h2>{format(new Date(), "EEEE, MMM dd, yyyy")}</h2>
            
        </div>
    );
};

export default Header;