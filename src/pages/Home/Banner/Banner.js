import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import banner3 from '../../../assets/banner/banner3.jpg'
import banner4 from '../../../assets/banner/banner4.jpg'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner4} alt="" />
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Banner;