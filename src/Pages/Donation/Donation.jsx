import React, { useEffect, useState } from 'react';
import DonationCard from './DonationCard';

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState();
    useEffect(() => {
        const detailsItems = JSON.parse(localStorage.getItem('details'));
        if (detailsItems) {
            setDonation(detailsItems);
        } else {
            setNoFound("No Data Found")
            // console.log("No Data Found")
        }

    }, []);
    console.log(donation);
    return (
        <div>

            {noFound ? <h2 className=' h-[70vh] font-bold text-4xl text-[#FF444A] flex justify-center items-center'>{noFound}</h2> : <div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-7 w-[90%] mx-auto'>
{donation.map(card=><DonationCard key={card.id} card={card}></DonationCard>)}
                </div>
            </div>};


        </div>
    );
};

export default Donation;