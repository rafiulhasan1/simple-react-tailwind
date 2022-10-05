import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feaure = ({feaure}) => {
    return (
        <div>
            <div className='flex items-center pt-4'>
                <CheckCircleIcon className="h-5 w-5 text-blue-500"/>
                <p className='text-gray-100 pl-3'>{feaure}</p>
            </div>
        </div>
    );
};

export default Feaure;