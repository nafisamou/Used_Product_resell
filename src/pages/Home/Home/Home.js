import React from 'react';
import Categories from '../../Categories/Categories';
import Advertisement from '../../Seller/Advertisement/Advertisement';
import Article from '../Article/Article';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Subscribe from "../Subscribe";

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisement></Advertisement>
            <Article></Article>
            <Subscribe></Subscribe>
            <Review></Review>
        </div>
    );
};

export default Home;