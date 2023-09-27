import React from 'react';
import swal from 'sweetalert';

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
            swal ("Good job!", "You have successfully donated ", "success");
        } else {

            const isExist = detailsItems.find((card) => card.id === id);
            // console.log(isExist);
            if (!isExist) {
                addedDetailsArray.push(...detailsItems, card);
                localStorage.setItem('details', JSON.stringify(addedDetailsArray))
                swal ("Good job!", "You have successfully donated", "success");
            } else {
                swal ("opps!", "already exixted!");
            }

        }

    }
    return (
        <div>
            <div className='pb-20'>
                <div className=" relative card w-full pb-20">
                    <figure><img className='w-full h-[80vh] rounded-lg' src={picture} alt="Shoes" /></figure>
                    <div className="absolute h-1/4 mt-[27.5%] inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                    <div className='-mt-20 z-10'>
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