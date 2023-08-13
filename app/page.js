'use client'

import Menu from '@/components/Menu';
import { useRouter } from 'next/navigation';

import React from 'react';

const page = () => {

    const router = useRouter();

    const GoTo=()=>{
        // router.push("/profile")
        // router.replace("/profile")
        router.push("/product?name=Mobile&price=5000")
    }

    return (
        <div>
            <Menu/>
            <h1>This is Home page</h1>
            <button onClick={GoTo}>Click</button>
        </div>
    );
};

export default page;



