import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {

    const {id} = useParams();

    return (
        <div>
            <h4> Payment for ${id} </h4>
        </div>
    );
};

export default Payment;