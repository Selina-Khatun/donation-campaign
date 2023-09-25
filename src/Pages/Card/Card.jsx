import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const Card = () => {

    const { id } = useParams();
    const idParse = parseInt(id)
    // console.log(params);
    const cards = useLoaderData();
    console.log(cards);
    const findCard = cards?.find((card) => card.id === idParse);
    console.log(findCard)
    return (
        <div>
        {/* <div>
        <img className='' src={findCard.picture} alt="" /> 
        </div>
            <h2>{findCard.title}</h2>
            <p>{findCard.description}</p> */}
            <div className=" bg-base-100 shadow-xl py-10">
                <figure><img className='w-[85%] mx-auto h-[85vh]  rounded-lg' src={findCard.picture} alt="Shoes" /> <button></button> </figure>
                <div className="card-body">
            
                    <h2 className=" font-bold text-3xl">{findCard.title}</h2>
                    <p>{findCard.description}</p>

                    
                    
                   
                </div>
            </div>

        </div>
    );
};

export default Card;