import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = ({tools}) => {

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    const {totalPrice} = tools?.data;


    useEffect(()=> {

        fetch('http://localhost:5000/create-payment-intent', {
            method : 'POST',
            headers: {
                'content-type': 'application/json',
                
            },
            body:JSON.stringify({totalPrice})
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
        });

      
    }, [])


    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        };

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        };

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
      
        {setCardError(error) || '' };

      

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
                <button type="submit" className='btn btn-info btn-xs mt-5' disabled={!stripe}>
                Pay
                </button>
        </form>

            {
                cardError && <p className='text-red-500'> {cardError?.message} </p>
            }

        </>
       
    );
};

export default CheckoutForm;