import React from 'react';
import Feaure from '../Feasure/Feaure';


const Pricing = ({ card }) => {
    const {feature} = card
    return (
        <div className='bg-indigo-300 mx-6 p-10 rounded-md'>
            <div>
                <h3><span className='text-7xl font-bold text-white'>{card.price}$</span>
                    <span className='text-3xl text-gray-300'>/mon</span></h3>
                <p className='text-3xl text-white mt-3'>{card.name}</p>
            </div>
            {
                feature.map((feaure, idx) => <Feaure key={idx} feaure={feaure}></Feaure> )
            }
            <button className='text-xl mt-8 p-4 rounded-xl font-bold text-white bg-blue-400 w-full'>Buy Now</button>
        </div>
    );
};

export default Pricing;