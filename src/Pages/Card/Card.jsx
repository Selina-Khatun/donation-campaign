import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const Card = () => {
    const [card, setCard] = useState({})
    const { id } = useParams()
    const cards = useLoaderData()
   
    useEffect(() => {
       
        if (cards && id) {
            const findCard = cards.find(card => {
                return card.id === parseInt(id); 
            });
    
           
            setCard(findCard);
        }
    }, [id, cards]);
    
    return (
        <div>
           <DetailsCard card={card}></DetailsCard>
        </div>
    );
};

export default Card;