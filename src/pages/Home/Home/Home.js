import React from 'react';
import Advertisement from '../../Seller/Advertisement/Advertisement';
import Subscribe from "../Subscribe";

const Home = () => {
    return (
        <div className='mx-5'>
            <Advertisement></Advertisement>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;