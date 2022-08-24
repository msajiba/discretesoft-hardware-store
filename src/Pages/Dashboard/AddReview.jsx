import React, { useState } from 'react';
import auth from '../../Firebase/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {toast} from 'react-toastify';
import axiosPrivate from '../api/axiosPrivate';


const AddReview = () => {

    const [user] = useAuthState(auth);


    const handleAddReview = async(e) => {
        
        e.preventDefault();
        const name = e.target.name.value;
        const company = e.target.company.value;
        const ratting = e.target.ratting.value;
        const description = e.target.description.value;

        const reviewInfo = {name, company, ratting, description};

        const url = `https://discretesoft-hardware.herokuapp.com/review`
        const {data} = await axiosPrivate.post(url, reviewInfo)
        if(data?.acknowledged){
            toast.success(`Review add successful. Thank you Mr.${user.displayName} `)
        }
        e.target.reset();
    };

    return (
        <div className="card w-96 mx-auto bg-base-100 shadow-xl my-16">
            <div className="card-body">

                <form onSubmit={handleAddReview}>
                    <input type="text" name='name' value={user?.displayName} className="input input-bordered w-full max-w-xs " disabled  />
                    <input type="text" name='company' placeholder="Company Name" className="input input-bordered w-full max-w-xs my-2 " />
                    <select name='ratting' className="select select-bordered w-full max-w-xs my-2">
                        <option disabled defaultValue > Please Ratting </option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <textarea name='description' className="textarea textarea-bordered mb-5" rows={3} cols={42} placeholder="Description"></textarea> <br />
                    <button className="btn btn-primary w-full"> Add Review </button>
                </form>

            </div>
        </div>
    );
};

export default AddReview;