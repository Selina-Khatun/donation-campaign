import React from 'react';
import { Link } from 'react-router-dom';

const DonateCards = ({card}) => {
    // const { id, phone_name, brand_name, rating, price, image } = phone || {};

    const { id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color } = card || {};
    return (
        <div className=' mt-10'>
              {/* <Link to={`/phones/${id}`} state={phone_name}></Link> */}
          <Link to={`/cards/${id}`}>
          <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div style={{backgroundColor:card_bg_color}} className="card-body">
                <div className="card-actions  justify-start">
                        <button style={{backgroundColor:category_bg_color}}>{category}</button>
                    </div>
                   
                    <h2 style={{color:text_button_bg_color}} className="card-title">{title}</h2>

                    
                    
                   
                </div>
            </div>
          </Link>
        </div>
    );
};

export default DonateCards;