import React from 'react';
import { RingLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
                <RingLoader />
        </div>
    );
};

export default Loader;