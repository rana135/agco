import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ buy }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [processing, setProcessing] = useState(false);

    const { _id, price, productName, email } = buy;
    console.log({ buy });

    useEffect(() => {
        fetch("https://agco-server.onrender.com/create-payment-intent", {
            method: "POST",
            headers: {
                'content-type': "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        // if (error) {
        //     console.log(error.message);
        // }
        // else{
        //     setCardError('');
        // }
        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true);
        // Confirm Card Payment:-
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: productName,
                        email: email,
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess("Congrats! Your payment is completed");

            const payment = {
                payment: _id,
                transactionId: paymentIntent.id,
            }
            // updated
            fetch(`https://agco-server.onrender.com/orders/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': "application/json",
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    setProcessing(false);
                    console.log(data);
                });
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-xs mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}
            {success && <div>
                <p className='text-green-500'>{success}</p>
                <p>Id: <span className='text-orange-500 font-bold'>{transactionId}</span></p>
            </div>}
        </>
    );
};

export default CheckoutForm;
