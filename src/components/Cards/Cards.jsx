import React from 'react';
import DonateCards from './donateCards';


const Cards = ({cards,query}) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {cards
        ?.filter((card) => card.category.toLowerCase().includes(query))
        .map((card) => <DonateCards key={card.id} card={card}></DonateCards>)}  
        </div>
    );
};

export default Cards;