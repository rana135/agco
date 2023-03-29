import React, { useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go'

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import useItem from '../../../hook/useItem';
import Item from './Item';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,])

const productlinkdata = [
    { id: 1, name: "Latest" },
    { id: 2, name: "Best Seller " },
    { id: 3, name: "Most Viewed" },
    { id: 4, name: "Special" },
]

const Items = () => {
    const [count, setCount] = useState(0)
    const { products } = useItem(count)

    return (
        <div className='mt-24 w-[92%] mx-auto'>
            <div className='text-center'>
                <h2 className='text-4xl text-bold font-extrabold services-title'>Our Products</h2>
                <div class="divider w-[200px] mx-auto"><GoPrimitiveDot className='text-2xl text-slate-400 inline-block' /><GoPrimitiveDot className='text-2xl inline-block relative right-4' /></div>
            </div>
            <div className='flex items-center justify-center gap-4 md:gap-16'>
                {
                    productlinkdata.map((data, index) =>
                        <li key={data.id} onClick={() => {
                            setCount(index)
                        }} className={`list-none uppercase font-bold  cursor-pointer ${count === index ? "text-slate-900" : "text-slate-500"}`} >{data.name}</li>
                    )
                }
            </div>
            <div className='mt-14'>
                <Swiper style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-navigation-size": "25px",
                }}
                    freeMode={true}
                    grabCursor={true}
                    navigation={true}
                    loop={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                    onSlideChange={() => console.log('')}
                    onSwiper={(swiper) => console.log('')}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 15
                        },
                    }}
                >
                    {
                        count === 0 ? products.map(product =>

                            <SwiperSlide key={product._id}>
                                <Item product={product} ></Item>
                            </SwiperSlide>
                        ) : ""
                    }
                    {
                        count === 1 && products.slice(4, 12).map(product =>
                            <SwiperSlide key={product._id}>
                                <Item product={product} ></Item>
                            </SwiperSlide>
                        )
                    }
                    {
                        count === 2 && products.slice(8, 11).map(product =>
                            <SwiperSlide key={product._id}>
                                <Item product={product} ></Item>
                            </SwiperSlide>
                        )
                    }
                    {
                        count === 3 && products.reverse().map(product =>
                            <SwiperSlide key={product._id}>
                                <Item product={product} ></Item>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Items;