import React from 'react';
import Banner from './Banner/Banner';
import BusinessPartner from './BusinessPartner/BusinessPartner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Client from './Client/Client';
import Plan from './Plan/Plan';
import Products from './Products/Products';
import Reviews from './Reviews';
import SubscribeCard from './SubscribeCard/SubscribeCard';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Plan></Plan>
            <BusinessSummary></BusinessSummary>
            <BusinessPartner></BusinessPartner>
            <Client></Client>
            <SubscribeCard></SubscribeCard>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;