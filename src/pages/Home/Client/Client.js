import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Client.css';
import Slider from "react-slick";
import escorts from '../../../assets/Our clients/escorts-logo.png'
import landini from '../../../assets/Our clients/landini-logo.png'
import massey from '../../../assets/Our clients/massey-logo.png'
import NewHolland from '../../../assets/Our clients/NewHolland-logo.png'
import same from '../../../assets/Our clients/same-logo.png'
import tafe from '../../../assets/Our clients/tafe-logo.png'

const Client = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };
    return (
        <div className='mt-16'>
            <h2 className='text-4xl text-primary font-bold text-center mb-12'>Our Clients</h2>
            <Slider {...settings}>
                <div className='client'>
                   <img src={escorts} alt="" />
                </div>
                <div className='client'>
                <img src={landini} alt="" />
                </div>
                <div className='client'>
                <img src={massey} alt="" />
                </div>
                <div className='client'>
                <img src={NewHolland} alt="" />
                </div>
                <div className='client'>
                <img src={same} alt="" />
                </div>
                <div className='client'>
                <img src={tafe} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Client;