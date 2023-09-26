import { useLoaderData, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Card = () => {
    const { id } = useParams();
    const idParse = parseInt(id)
    // console.log(params);
    const cards = useLoaderData();
    // console.log(cards);
    const findCard = cards?.find((card) => card.id === idParse);
    console.log(findCard)
    // const storedData=[]
    const { picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, description,price } = cards
    const handleAddToDonate = (id) => {
        const storedData=[]
        storedData.push(id)

localStorage.setItem('allDonationList',JSON.stringify(storedData))

        // const addedDonationArray = [];
        // const donateItems = JSON.parse(localStorage.getItem('donations'));
        // // console.log(donateItems)
        // if (!donateItems) {
        //     addedDonationArray.push(card);
        //     localStorage.setItem('donations', JSON.stringify(addedDonationArray));
        //     alert("good job");
        // } 
        // else {
        //     const isExits = donateItems.find((card) => card.id === id);
        //     // console.log(isExits);
        //     if (!isExits) {
        //         addedDonationArray.push(...donateItems, card);
        //         localStorage.setItem('donations', JSON.stringify(addedDonationArray));
        //         alert("good job");
        //     } else {
        //         alert("already exists");
        //     }


        // }
    };
   

    
    return (
        <div>
          
{/* <Link to={`/cards/${id}`}></Link> */}
            <div className="  bg-base-100 shadow-xl py-10">
                <div className='relative'><img className='w-[85%] mx-auto h-[85vh] rounded-lg' src={findCard.picture} alt="Shoes" /><button className=' lg:absolute rounded-sm bg-[#FF444A] text-white p-2 lg:-mt-20 lg:ml-36  my-7 items-center' onClick={()=>handleAddToDonate(id)}>Donate {findCard.price}</button> </div>

                <div className="card-body">
                
                    <h2 className=" font-bold text-3xl">{findCard.title}</h2>
                    <p>{findCard.description}</p>


                </div>
            </div>

        </div>
    );
};

export default Card;