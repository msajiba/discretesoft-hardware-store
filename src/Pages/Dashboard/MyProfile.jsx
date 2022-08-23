import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase';
import Loader from '../Shared/Loader';
import {useQuery} from 'react-query';
import axiosPrivate from '../api/axiosPrivate';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;

    const url = `http://localhost:5000/profile/${email}`
    const {data:profile, isLoading, refetch} = useQuery(['profile', user], async()=> await axiosPrivate.get(url))
    
    if(isLoading){
        return <Loader> </Loader>
    };

    const {education, location, phone, linkdin} = profile.data;

    const handleUpdateProfile = async(e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const education = e.target.education.value;
        const location = e.target.location.value;
        const phone = e.target.phone.value;
        const linkdin = e.target.linkdin.value;

        const profileInfo = {name, email, education, location, phone, linkdin};

        const url = `http://localhost:5000/profile/${email}`
        const {data} = await axiosPrivate.put(url, profileInfo)

        if(data?.upsertedCount ===1){
            toast.success('Profile Update Successful');
        };

        e.target.reset();
        refetch();

    };


    return (


        <div className="hero min-h-screen bg-base-200">  
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                <div className="card-body">
                   
                    <form onSubmit={handleUpdateProfile}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Your Name </span>
                            </label>
                            <input type="text" name='name'  defaultValue={user.displayName} placeholder="email" className="input input-bordered" required disabled readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input type="text" name='email' defaultValue={user.email} placeholder="password" className="input input-bordered" readOnly disabled required/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Education </span>
                            </label>
                            <input type="text" defaultValue={education} name='education' placeholder="Your School & College" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Location </span>
                            </label>
                            <input type="text" defaultValue={location} name='location' placeholder="City / District" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Phone Number </span>
                            </label>
                            <input type="number" defaultValue={phone} name='phone' placeholder="Enter Your Phone Number" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Linkdin Profile </span>
                            </label>
                            <input type="text" defaultValue={linkdin}  name='linkdin' placeholder="Linkdin Profile Link" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary"> Update </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default MyProfile;