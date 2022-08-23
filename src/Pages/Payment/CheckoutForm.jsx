import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axiosPrivate from '../api/axiosPrivate';


const CheckoutForm = ({tools}) => {

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    const {totalPrice, userName, phone, name, email, _id} = tools?.data;

    useEffect(()=> {

        const url = 'http://localhost:5000/create-payment-intent';
        const getSecret = async()=> {
            const {data} = await axiosPrivate.post(url, {totalPrice})
            if(data?.clientSecret){
                setClientSecret(data.clientSecret);
            };
        }

        getSecret()

    }, [totalPrice]);




    const handleSubmit = async(event) => {

        event.preventDefault();

        if(!stripe || !elements){ 
            return;
        };

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        };

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
      
        {setCardError(error) || '' };
        setSuccess('')

        //Confirm card payment --------->

        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: userName,
                  email: email
                },
              },
            },
        );

        if(intentError){
            setCardError(intentError.message)
        }
        else{
            setCardError('')
            setTransactionId(paymentIntent.id)
            setSuccess('Congress! Your payment is success');

            //Send database patch to transactionId

            const payment ={
                bookingId : _id,
                transactionId: paymentIntent?.id
            };

            const url = `http://localhost:5000/booking/${_id}`;

            const patchPayment = async()=> {
                const {data} = await axiosPrivate.patch(url, payment );
            };
            patchPayment();


        };

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
                <button type="submit" className='btn btn-info btn-xs mt-5' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
        </form>

            {
                cardError && <p className='text-red-500'> {cardError?.message} </p>
            }

            {
                success && <>
                            <p className='text-green-500'> {success} </p>
                            <p className='text-info'> transactionId : {transactionId} </p>
                          </>
            }

        </>
       
    );
};

export default CheckoutForm;