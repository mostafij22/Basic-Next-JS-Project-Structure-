"use client"

import Menu from '@/components/Menu';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const page = () => {
    const params = useSearchParams();
    return (
        <div>
            <Menu/>
            <h1>This is Profile of {params.get('name')}</h1>
            <h2>He is famous {params.get('title')}</h2>
            <img src="/images/1.jpg" alt="" />
        </div>
    );
};

export default page;



