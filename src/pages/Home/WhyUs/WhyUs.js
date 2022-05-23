import React from 'react';
import whyUs from '../../../assets/images/why-us.png'

const WhyUs = () => {
    return (
        <div>
            <h1 className='text-4xl text-primary text-center mt-28 font-bold'>Why You Should Choose Us???</h1>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-100' src={whyUs} alt="Album" /></figure>
                <div className="card-body lg:w-44">
                    <p>We conduct our business in accordance with the highest standards of professional behavior and ethics. We are transparent, honest and ethical in all our interactions with employees, clients, consumers, vendors and the public.
                        We take pride in providing high value products and services that we stand behind, which ensures customer satisfaction, profitability and the future of our employees and our growth.We strive to provide exceptional customer service through flexible scheduling, quality products, efficient services, and innovative solutions resulting in value to the customer and company.</p>
                    <h2 className="card-title">We achieve this because we believe in providing quality not just the first time, but every time.</h2>
                    <div>
                        <li>Experience & knowledge of more than 50 years</li>
                        <li>Comparative prices</li>
                        <li>Top quality products</li>
                        <li>Transparent and ethical business practices</li>
                        <li>Strong network of dealers & distributors</li>
                        <li>Growth oriented philosophy</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;