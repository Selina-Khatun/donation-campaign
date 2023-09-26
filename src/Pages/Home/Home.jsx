import React from 'react';
import Banner from '../../components/Header/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Cards from '../../components/cards/cards';

const Home = () => {
    const cards = useLoaderData()
    return (
        <div>

            <Banner></Banner>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home ;