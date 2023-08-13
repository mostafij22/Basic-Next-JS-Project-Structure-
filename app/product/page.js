import React from 'react';

import styles from '../page.module.css'
import Menu from '@/components/Menu';

const page = ({searchParams}) => {
    return (
        <div>
            <Menu/>
            <h1 className={styles.myText}>This is Product page</h1>
            <h1>{searchParams.name}</h1>
            <h1>{searchParams.price}</h1>
        </div>
    );
};

export default page;   



