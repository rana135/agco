import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import './Payment.css';
import paymentImg from "../../../assets/images/payment.png";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51MlI9pAP2f3pNlGaofGvvj1eu7sSgRfze6CNAqOC7OFkafRyOdQEECDNJ7ckGwd78fV2o6PkOExZfJcPLNSJUnz300G2iSnF25');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`
    const { data: buy, isLoading, error } = useQuery(["order", id], () => fetch(url, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    if (error) {
        return 'An error has occurred: ' + error.message;
    }
    return (
        <div className='paymentContainer'>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">

                <img className='paymentImg' src={paymentImg} alt="" />
            </div>
            <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">

                <div className="card w-50 max-w-md bg-base-100 shadow-md  my-12">
                    <div className="card-body">
                        <p>Hello, <span className="font-bold">{buy?.name}</span></p>
                        <h2>
                            Pay for <span className='text-green-500'>{buy?.productName}</span>
                        </h2>
                        <p>Please pay: $ <span className='font-bold
                        text-success 
                        '>{buy?.price}</span></p>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-50 max-w-md shadow-md bg-base-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm buy={buy} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;