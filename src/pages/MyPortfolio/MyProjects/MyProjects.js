import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './MyProjects.css';
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
// import image:-
import foodHouse from '../../../assets/myProjects/food-house.png'
import healthCoach from '../../../assets/myProjects/healthCoach.png'
import starFurniture from '../../../assets/myProjects/star-furntiture.png'
import newOrleansCenter from '../../../assets/myProjects/newOrleansCenter.png'
import influencer from '../../../assets/myProjects/influencer.png'


const MyProjects = () => {
    return (
        <div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={foodHouse} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={starFurniture} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={newOrleansCenter} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={influencer} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={healthCoach} alt='' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MyProjects;