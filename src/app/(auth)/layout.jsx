import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';

const layout = ({children}) => {
    return (
        <div className={` ${montserrat.className}`}>
            <Navbar/>
            {children}
            
        </div>
    );
};

export default layout;