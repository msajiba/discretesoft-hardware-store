import {Link} from 'react-router-dom';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <div className='shadow-2xl px-64 py-5 rounded-md'> 

                    <h3 className='md:text-5xl'> Page Not Found <span className='text-red-500'> 404 ! </span> </h3>
                    <h4 className='text-white my-10 text-center md:text-2xl border bg-secondary t shadow-2xl inline-block px-10 rounded-3xl '> <Link to='/'> HOME </Link> </h4> 
                </div>
            </div>
        </div>
    );
};

export default NotFound;