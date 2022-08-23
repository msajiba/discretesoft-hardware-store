import React from 'react';
import { useParams } from 'react-router-dom';
import {useQuery} from 'react-query';
import Loader from '../Shared/Loader';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import axiosPrivate from '../api/axiosPrivate';



const stripePromise = loadStripe('pk_test_51La0RWJjr0c2qOrY21Ump1jIEx6QZVnGY9BLgK0JuA6lra7u2adr4wnOK6b7R1UeiaU7ImK60WRc4nOO3Mz1ZCws00T6DoVZhQ');


const Payment = () => {

    const {id} = useParams();

    const url = `http://localhost:5000/orderService/${id}`;
    const {data:tools, isLoading} = useQuery(['specificTool', id], async()=> await axiosPrivate.get(url));

    
    if(isLoading){
        return <Loader> </Loader>
    };
    
    const { name, totalPrice, userName} = tools.data;

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm tools={tools} />
                            </Elements>
                        </div>
                    </div>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-info"> Hello, {userName} </h2>
                            <p> Please Pay for <span className='text-info'> {name} </span> </p>
                            <p> Please Pay : <span className='text-info'> {totalPrice} </span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;