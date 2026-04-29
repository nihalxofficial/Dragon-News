"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaHome, FaInfoCircle, FaBriefcase } from 'react-icons/fa';

const NavLink = ({ href, children, icon }) => {
    const pathName = usePathname();
    const isActive = href === pathName;
    
    const getIcon = () => {
        if (icon) return icon;
        
        switch(href) {
            case '/':
                return <FaHome className="text-sm" />;
            case '/about':
                return <FaInfoCircle className="text-sm" />;
            case '/carrier':
                return <FaBriefcase className="text-sm" />;
            default:
                return null;
        }
    };
    
    return (
        <Link 
            href={href} 
            className={`flex items-center gap-2 ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600 transition-colors duration-200"}`}
        >
            {getIcon()}
            {children}
        </Link>
    );
};

export default NavLink;