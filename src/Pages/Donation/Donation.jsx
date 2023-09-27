import React, { useEffect, useState } from 'react';
import DonationCard from './DonationCard';

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState();
    const [seeAll, setSeeAll] = useState(false)
    useEffect(() => {
        const detailsItems = JSON.parse(localStorage.getItem('details'));
        if (detailsItems) {
            setDonation(detailsItems);
        } else {
            setNoFound("No Data Found")
           
        }

    }, []);
   
    return (
        <div>

            {noFound ? <h2 className=' h-[70vh] font-bold text-4xl text-[#FF444A] flex justify-center items-center'>{noFound}</h2>
                :
                <div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-7 w-[90%] mx-auto'>
                        {
                            seeAll ? donation.map((card) => (<DonationCard key={card.id} card={card}></DonationCard>
                            )) : donation.slice(0, 4).map((card) => (<DonationCard key={card.id} card={card}></DonationCard>))


                        }
                    </div>
                </div>};
           <div className='flex justify-center my-10 pb-10'>
           {donation.length > 4 && !seeAll && (
            <button onClick={() => setSeeAll(true)} className='px-3 text-white py-1 rounded-md hover:bg-green-700 bg-green-600'>
                See All
            </button>
        )}
           </div>


        </div>
    );
};

export default Donation;