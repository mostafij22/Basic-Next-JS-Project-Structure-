'use client'

import Link from 'next/link';
import React from 'react';
import {usePathname} from "next/navigation"

const Menu = () => {

    let currentPath = usePathname();

    return (
        <div>
            <h1>{currentPath}</h1>
            <Link className={currentPath==="/"?'active-link':'pending-link'} href={"/"}>Home</Link><br />
            <Link className={currentPath==="/product"?'active-link':'pending-link'}
              href={{pathname:"/product", query:{name:"Book",price:"200Taka"}}}
             >Product</Link><br />
            <Link className={currentPath==="/profile"?'active-link':'pending-link'} 
              href={{pathname:"/profile", query:{name:"Rabbil", title:"Teacher"}}}
            >Profile</Link>
        </div>
    );
};



export default Menu;

