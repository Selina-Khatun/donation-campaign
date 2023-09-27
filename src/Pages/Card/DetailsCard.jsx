import React from 'react';
import swal from 'sweetalert';

const DetailsCard = ({ card }) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, description, price } = card || {};
    const handleAddDonation = () => {
        const addedDetailsArray = [];
        const detailsItems = JSON.parse(localStorage.getItem('details'));
        if (!detailsItems) {
            addedDetailsArray.push(card);
            localStorage.setItem('details', JSON.stringify(addedDetailsArray))
            swal("Good job!", "You have successfully donated ", "success");
        } else {

            const isExist = detailsItems.find((card) => card.id === id);
            if (!isExist) {
                addedDetailsArray.push(...detailsItems, card);
                localStorage.setItem('details', JSON.stringify(addedDetailsArray))
                swal("Good job!", "You have successfully donated", "success");
            } else {
                swal("opps!", "already exixted!");
            }

        }

    }
    return (
        <div>
           
            <div className='pb-20 relative'>
                <div className="card w-full relative">
                    <figure>
                        <img className='w-full h-[80vh] rounded-lg' src={picture} alt="donation" />
                    </figure>
                    <div className="absolute bottom-0 left-0 w-full h-[33%] bg-gray-700 opacity-60 rounded-lg"></div>
                    <div className='absolute  bottom-4 left-4 mb-2 ml-2 z-10'>
                        <button onClick={() => handleAddDonation(id)} style={{ background: text_button_bg_color }} className='px-6 py-3 rounded-md font-semibold text-white'>Donate: {price}</button>
                    </div>
                </div>
                <div>
                    <h2 className='text-4xl font-semibold pt-10'>{title}</h2>
                    <p className='py-5 text-sm'>{description}</p>
                </div>
            </div>



        </div>
    );
};

export default DetailsCard;