import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';

const MakeAdmin = () => {

    
    const makeAdminHandler = async(e)=> {
        e.preventDefault();
        const email = e.target.email.value;
        
        const url = `http://localhost:5000/user/admin/${email}`

        const {data} = await axiosPrivate.put(url);

        if(data?.modifiedCount ===1 ){
            toast.success('Make an admin successfully');
        };

        e.target.reset();

    };


    return (

        <div className='h-screen flex justify-center items-center'>
            <form onSubmit={makeAdminHandler} className='border shadow-2xl p-10 rounded-2xl'>
                <input type="email" name='email' placeholder="Enter Email " className="input focus:outline-none input-bordered w-full max-w-xs"  required/>
                <button type='submit' className='btn btn-secondary hover:btn-primary btn-sm mt-3'> Make Admin </button>
            </form>
        </div>
    );
};

export default MakeAdmin;