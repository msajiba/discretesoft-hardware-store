import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase';
import useToken from '../hooks/useToken';
import Loader from '../Shared/Loader';



const Login = () => {

    const { register, handleSubmit, reset } = useForm();
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    let errors;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user || gUser);

    if(loading || gLoading || sending){
        return <Loader />
    };

    if(error || gError || resetError){
        errors = error?.message || gError?.message || resetError?.message;
    };

  
    if(token){
        navigate(from, { replace: true });
    };

   
    const onSubmit = async(data) => {
        const email = data.email;
        const password = data.password;
        setPassword(password);
        await signInWithEmailAndPassword(email,password);
        reset();
    };

    const resetHandler = async() => {
        sendPasswordResetEmail(password);
        toast.info('Reset password send on your email ! Please check');
    }


    return (

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col justify-center lg:flex-row-reverse w-full">

                        <div className="text-center lg:text-center ">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <button
                                 onClick={()=> signInWithGoogle()}
                                 className='btn btn-accent mt-5 uppercase text-white'> Login With Google </button>
                        </div>

                        <div className="divider lg:divider-horizontal">OR</div> 
      
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <h3 className="text-2xl text-primary text-center"> Please Login </h3>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Enter Email" className="input input-bordered w-full mb-5"  {...register("email", { required: true })} />

                                    <label className="label">
                                        <span className="label-text"> Password </span>
                                    </label>
                                    <input type="password" placeholder="Enter Password" className="input input-bordered w-full"  {...register("password", { required: true })} />

                                    <label className="label mb-5">
                                        <button onClick={resetHandler} className="label-text-alt link link-hover">Forgot password?</button>
                                    </label>

                                    {errors && <p className='text-red-500'> {errors}</p> }
                                                            
                                    <input className='bg-yellow-500 btn border-none w-full' type="submit" value='Login' />
                                </form>
                                <label className="label mb-5">
                                        <p className="label-text-alt "> You don't have an account? <Link to='/register' className='text-emerald-600 hover:text-yellow-500'> Please Register </Link> </p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

    );
};

export default Login;