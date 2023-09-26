import React from 'react';

const DonationCard = ({ card }) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, description, price } = card || {};
    return (
        <div>

            <div className="card card-side bg-base-100 shadow-xl flex flex-col lg:flex-row">
                <figure className=' lg:w-2/5 lg:rounded-s-xl '><img class="h-full w-full    object-cover" src={picture} /></figure>
                <div className="card-body  lg:rounded-e-xl rounded-none" style={{ backgroundColor: card_bg_color }}>
                    <div className="card-actions  justify-start">
                        <button className=' text-sm px-2 py-0.5 rounded-sm' style={{ backgroundColor: category_bg_color, color: text_button_bg_color }}>{category}</button>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <h4 style={{ color: text_button_bg_color }} class="mb-2 text-xl font-semibold ">
                        {price}
                    </h4>
                    <div>
                        <button style={{ background: text_button_bg_color }} className='py-1 px-3 font-semibold rounded-sm text-white'>View Details</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default DonationCard;