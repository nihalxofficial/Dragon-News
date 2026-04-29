"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userImage from "@/assets/user.png"
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { LuLogOut } from 'react-icons/lu';
import { useRouter } from 'next/navigation'; 

const Navbar = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                },
            },
        });
    }
    console.log(session);
    


    return (
        <div className='flex justify-between items-center gap-5 py-4'>
            <div>

            </div>
            <ul className='flex justify-between items-center gap-4 text-gray-600 font-semibold'>
                <li><NavLink href={"/"}>Home</NavLink></li>
                <li><NavLink href={"/about"}>About</NavLink></li>
                <li><NavLink href={"/carrier"}>Carrier</NavLink></li>
            </ul>
            <div className='flex justify-between items-center gap-2'>
                {isPending ? <span className="loading loading-dots loading-xl"></span>
                    : user ?
                        <>
                            <Image src={user.image ?? userImage} alt='userImage' width={40} height={40} />
                            <button onClick={handleSignOut} className='btn bg-red-600 text-white flex justify-between items-center gap-2'> <LuLogOut className='text-xl' />LogOut</button>
                        </>
                        : <button className='btn bg-red-600 text-white'><Link href={"/login"}>Login</Link></button>}
            </div>

        </div>
    );
};

export default Navbar;