import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolsRow = ({tool}) => {
    
    const {_id ,name, description,  minimum, available, price, img} = tool;

    const navigate = useNavigate();

    return (

        <div className="card bg-base-100 hover:shadow-2xl hover:shadow-gray-500 rounded-2xl">
            <figure className="rounded-lg">
                <img className='h-52 w-full rounded-xl' src={img} alt="Shoes"  />
            </figure>

            <div className="card-body items-center text-center">
                <h2 className="card-title"> {name}   </h2>
                <span className='text-info'> Available Quantity : {available} </span>
                <p> Price : {price} </p>
                <div className="card-actions">
                    <button onClick={(()=> navigate(`/purchase/${_id}`))} className="btn btn-primary text-secondary hover:text-primary hover:btn-secondary w-80"> purchase </button>
                </div>
            </div>
            
        </div>
    );
};

export default ToolsRow;