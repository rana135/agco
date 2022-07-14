import React, { useEffect, useState } from 'react';
import quote from '../../assets/images/quote.svg';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://still-retreat-27608.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;