import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loader from '../Shared/Loader';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase';
import { toast } from 'react-toastify';
import axiosPrivate from '../api/axiosPrivate';


const Purchase = () => {

    const [user] = useAuthState(auth);

    const [quantityError, setQuantityError] = useState('');
    const {id} = useParams();

    const url = `http://localhost:5000/service/${id}`;
    const {data, isLoading} = useQuery(['tool', id], async()=> await axiosPrivate.get(url));

  
    if(isLoading){
        return <Loader> </Loader>
    };
    const {name, description, img, price, available, minimum} = data.data;


    const confirmOrder = async(e) => {

        e.preventDefault();
        const inputQuantity = parseInt(e.target.inputQuantity.value);
        const minimumQuantity = parseInt(minimum);
        const availableQuantity = parseInt(available);
        const email = e.target.email.value;
        const userName = e.target.userName.value;
        const phone = e.target.phone.value;
        const newPrice = parseInt(price);
        const address = e.target.address.value;
        const totalPrice = newPrice * inputQuantity;

        if(inputQuantity <= 0 ||  isNaN(inputQuantity) ){
            return setQuantityError("Please enter positive value");
        }
        else if(inputQuantity > availableQuantity){
           return setQuantityError("Stock not available");
        }
        else if(inputQuantity < minimumQuantity){
            return setQuantityError("Please add more quantity");
        }
        else{
            setQuantityError('');
            const orderInfo = {name, userName, email, phone, address, inputQuantity, totalPrice};
            
            const postOrder = async() => {
                const {data} = await axiosPrivate.post('http://localhost:5000/order', orderInfo);
                if(data?.acknowledged){
                    toast.success(`Your ${name} order complete`);
                }
            };
            postOrder();
            e.target.reset();
        }
    };



    return (

            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-center">
                        <img src={img}  className='mask mask-decagon w-36 mx-auto' alt="img" />
                        <h1 className="text-4xl font-bold text-secondary"> {name} </h1>
                        <p className="py-2"> Price :  ${price} <span> (per pics) </span> </p>
                        <p className="py-2"> Availability Quantity : {available} </p>
                        <p className="py-2"> Minimum Quantity : {minimum} </p>
                        <p className='pb-10'>{description} </p>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <form onSubmit={confirmOrder}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='userName' value={user?.displayName} className="input input-bordered " disabled readOnly />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' value={user?.email} className="input input-bordered" disabled readOnly />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="number" name='phone'  className="input input-bordered" required/>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <textarea name='address' className="textarea textarea-bordered" required />
                                </div>
                                
                                <div> 
                                    Quantity <span> 
                                                <input type="number" name='inputQuantity' placeholder={minimum} className='w-20 h-6 text-primary focus:outline-none input input-bordered border-yellow-500' /> 
                                                {quantityError && <p className='text-red-500'> {quantityError} </p> }
                                            </span> 
                                </div>

                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">order</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            
    );
};

export default Purchase;