import React from 'react';

const DetailsCard = ({ card }) => {
    // const { picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, description,price } = donation
    const { id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, description, price } = card || {};
    const handleAddDonation = () => {
        // console.log(card)
        const addedDetailsArray = [];
        const detailsItems = JSON.parse(localStorage.getItem('details'));
        if (!detailsItems) {
            addedDetailsArray.push(card);
            localStorage.setItem('details', JSON.stringify(addedDetailsArray))
            alert('added ')
        } else {

            const isExist = detailsItems.find((card) => card.id === id);
            // console.log(isExist);
            if (!isExist) {
                addedDetailsArray.push(...detailsItems, card);
                localStorage.setItem('details', JSON.stringify(addedDetailsArray))
                alert('added ')
            }else{
                alert('error ')
            }

        }

    }
    return (
        <div>
            <div className='pb-20'>
                <div className="card w-full pb-20">
                    <figure><img className='w-full h-[80vh]' src={picture} alt="Shoes" /></figure>
                    <div className='-mt-20'>
                        <button onClick={() => handleAddDonation(id)} style={{ background: text_button_bg_color }} className='ms-10 px-6 py-3 font-semibold text-white'>Donate: {price}</button>
                    </div>
                </div>
                <div>
                    <h2 className='text-5xl font-semibold py-4'>{title}</h2>
                    <p>{description}</p>
                </div>

            </div>
        </div>
    );
};

export default DetailsCard;