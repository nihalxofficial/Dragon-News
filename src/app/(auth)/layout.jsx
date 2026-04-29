import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';

const layout = ({children}) => {
    return (
        <div className={`${montserrat.className} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
            <Navbar/>
            <main className="py-6">
                {children}
            </main>
        </div>
    );
};

export default layout;