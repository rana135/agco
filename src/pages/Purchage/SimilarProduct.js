import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import equipment1 from '../../assets/equipment/1.jpg';
import equipment2 from '../../assets/equipment/2.jpg';
import equipment3 from '../../assets/equipment/3.jpg';
import equipment4 from '../../assets/equipment/4.jpg';
import equipment5 from '../../assets/equipment/5.jpg';
import equipment6 from '../../assets/equipment/6.jpg';
import equipment7 from '../../assets/equipment/7.jpg';
import equipment8 from '../../assets/equipment/8.jpg';
import equipment9 from '../../assets/equipment/9.jpg';
import equipment10 from '../../assets/equipment/10.jpg';

const SimilarProduct = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };
    return (
        <div className='mt-16'>
            <h2 className='text-4xl text-primary font-bold text-center mb-12'>Similar Products</h2>
            <Slider {...settings}>
                <div className='client'>
                    <img src={1} alt="" />
                </div>
                <div className='client'>
                    <img src={equipment1} alt="" />
                </div>
                <div className='client'>
                    <img src={equipment2} alt="" />
                </div>
                <div className='client'>
                    <img src={equipment3} alt="" />
                </div>
                <div className='client'>
                    <img src={equipment4} alt="" />
                </div>
                <div className='client'>
                    <img src={equipment5} alt="" />
                </div>
                <div className='client'>
                    <img src={equipment6} alt="" />
                </div>
                <div className='client'>
                    <img src={equipment7} alt="" />
                </div>
                <div className='client'>
                    <img src={equipment8} alt="" />
                </div>
                <div className='client'>
                    <img src={equipment9} alt="" />
                </div>
                <div className='client'>
                    <img src={equipment10} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default SimilarProduct;