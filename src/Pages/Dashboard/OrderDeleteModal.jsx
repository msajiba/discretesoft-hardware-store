import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../api/axiosPrivate';

const OrderDeleteModal = ({showDelete, setShowDelete, refetch}) => {

    const {_id, name} = showDelete;

    const handleDeleteOrder = async(id) => {
        
        const url = `http://localhost:5000/order/${id}`
        
        const {data} = await axiosPrivate.delete(url);

        if(data.acknowledged){
            toast.success(`Delete successful ${name}`)
        };

        refetch();
        setShowDelete(null);
    }

    return (
        <>
            
            <input type="checkbox" id="order-delete-modal" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box relative">
                    <h3 className="text-lg font-bold"> Are you sure delete <span className='text-info'> {name} </span> order ? </h3>
                    <div className="text-end mt-10">
                        <button 
                            onClick={()=>handleDeleteOrder(_id)}
                            className="btn btn-xs btn-error mx-2"> Delete </button>
                        <label htmlFor="order-delete-modal" className="btn btn-xs"> Cancel </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderDeleteModal;