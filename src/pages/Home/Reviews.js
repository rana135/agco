import React, { useEffect, useState } from 'react';
import quote from '../../assets/images/quote.svg';
import Review from './Review';
import Slider from "react-slick";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://agco-server.onrender.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className='mt-24 m-3 bg-gray-50'>
            <div className='flex justify-between'>
                <div className='ml-6'>
                    <h2 className='text-xl text-primary'>Customers Reviews</h2>
                    <h1 className='text-3xl'>What Our Customers Say's</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-18' src={quote} alt="" />
                </div>
            </div>
            <div>
                <Slider {...settings}>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Slider>
            </div>
        </section>
    );
};

export default Reviews;