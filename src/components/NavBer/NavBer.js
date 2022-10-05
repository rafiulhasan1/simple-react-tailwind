import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid'


const NavBer = () => {
    const [open , setOpen] = useState(false);
    const routers = [
        {id : 1 , name : 'Home' , path : '/home'},
        {id : 2 , name : 'Products' , path : '/home'},
        {id : 3 , name : 'Orders' , path : '/home'},
        {id : 4 , name : 'Contruct' , path : '/home'},
        {id : 5 , name : 'About Us' , path : '/home'},
    ]

    return (
        <nav className='bg-purple-200'>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
            {
                open ? 
                <XMarkIcon/>  
                : <Bars3Icon/>
            }
            </div>  
            
            <ul className={` bg-purple-200 w-full md:flex justify-center absolute duration-500 md:static ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routers.map(router => <Link key={router.id} router={router}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBer;