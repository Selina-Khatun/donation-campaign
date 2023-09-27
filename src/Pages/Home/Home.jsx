import React, { useState } from 'react';
import Banner from '../../components/Header/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Cards from '../../components/cards/cards';

const Home = () => {
    const cards = useLoaderData()
    const [query,setQuery]=useState("");
    return (
        <div >
            <Banner setQuery={setQuery}></Banner>
<div className=' container'>

</div>
            
            <Cards query={query} setQuery={setQuery} cards={cards}></Cards>
        </div>
    );
};

export default Home ;