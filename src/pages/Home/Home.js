import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Client from './Client/Client';
import Products from './Products/Products';
import Reviews from './Reviews';
import WhyUs from './WhyUs/WhyUs';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <WhyUs></WhyUs>
            <Client></Client>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;