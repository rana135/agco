import React, { useEffect, useState } from 'react';
import quote from '../../assets/images/quote.svg';
import people1 from '../../assets/reviews/review1.png'
import people2 from '../../assets/reviews/review2.png'
import people3 from '../../assets/reviews/review3.png'
import people4 from '../../assets/reviews/review4.png'
import people5 from '../../assets/reviews/review5.png'
import people6 from '../../assets/reviews/review6.png'
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch("reviews.json")
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <section className='mt-24 m-3'>
            <div className='flex justify-between'>
                <div className='ml-6'>
                    <h2 className='text-xl text-primary'>Customers Reviews</h2>
                    <h1 className='text-3xl'>What Our Patience Say's</h1>
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