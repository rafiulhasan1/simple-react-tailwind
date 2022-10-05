import React from 'react';
import Pricing from '../Pricing/Pricing';

const Card = () => {

    const cards = [
        {id : 1, price : 0 , name : 'Free', feature : [
            'awesome featcher noting',
            'rock featcher',
            'yo honey featcher',
            'hudai feacher',
            'hijibiji featcher',
            'lala featcher',
            'mamuli featcher'
        ] },
        {id : 1, price : 9.9 , name : 'Platinum', feature : [
            'awesome featcher on Free',
            'rock featcher',
            'yo honey featcher',
            'hudai feacher',
            'hijibiji featcher',
            'lala featcher',
            'mamuli featcher'
        ]},
        {id : 1, price : 19.9 , name : 'Premium', feature : [
            'awesome featcher on Premium',
            'rock featcher',
            'yo honey featcher',
            'hudai feacher',
            'hijibiji featcher',
            'lala featcher',
            'mamuli featcher'
        ]},
    ]

    return (
        <div>
            <h1 className='text-6xl bg-indigo-300 my-16 p-20 font-bold text-white'>Best Deal In The Town</h1>
            <div className='grid md:grid-cols-3 gap-3 mb-10'>
                {
                    cards.map(card => <Pricing key={card.id} card={card}></Pricing>)
                }
            </div>
        </div>
    );
};

export default Card;