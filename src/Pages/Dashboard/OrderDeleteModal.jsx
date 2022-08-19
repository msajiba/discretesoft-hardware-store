import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const OrderDeleteModal = ({showDelete, setShowDelete, refetch}) => {
    const {_id, name, useName} = showDelete;

    const handleDeleteOrder = async(id) => {
        
        const url = `http://localhost:5000/order/${id}`
        
        const {data} = await axios.delete(url);

        if(data.acknowledged){
            toast.success(`Delete successful ${name}`)
        };

        refetch();
        setShowDelete(null);
    }

    return (
        <>
            
            <input type="checkbox" id="order-delete-modal" class="modal-toggle" />
                <div class="modal">
                <div class="modal-box relative">
                    <h3 class="text-lg font-bold"> Are you sure delete <span className='text-info'> {name} </span> order ? </h3>
                    <div className="text-end mt-10">
                        <button 
                            onClick={()=>handleDeleteOrder(_id)}
                            class="btn btn-xs btn-error mx-2"> Delete </button>
                        <label for="order-delete-modal" class="btn btn-xs"> Cancel </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderDeleteModal;