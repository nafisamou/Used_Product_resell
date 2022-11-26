import React from 'react';
import Categories from '../../Categories/Categories';
import Advertisement from '../../Seller/Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Subscribe from "../Subscribe";

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisement></Advertisement>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;