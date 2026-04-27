import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userImage from "@/assets/user.png"
import NavLink from './NavLink';
const Navbar = () => {
    return (
        <div className='flex justify-between items-center gap-5'>
            <div>

            </div>
            <ul className='flex justify-between items-center gap-4 text-gray-600 font-semibold'>
                <li><NavLink href={"/"}>Home</NavLink></li>
                <li><NavLink href={"/about"}>About</NavLink></li>
                <li><NavLink href={"/carrier"}>Carrier</NavLink></li>
            </ul>
            <div className='flex justify-between items-center gap-2'>
                <Image src={userImage} alt='userImage' width={40} height={40}/>
                <button className='btn bg-black text-white'><Link href={"/login"}>Login</Link></button>
            </div>
            
        </div>
    );
};

export default Navbar;