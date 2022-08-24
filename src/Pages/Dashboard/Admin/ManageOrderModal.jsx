import React from 'react';
import axiosPrivate from '../../api/axiosPrivate';
import {toast} from 'react-toastify';

const ManageOrderModal = ({modalOrder, refetch, setModalOrder}) => {

    const {name, _id} = modalOrder;

    const deleteOrder = async() =>{

        const url = `https://discretesoft-hardware.herokuapp.com/admin/order/${_id}`;
        const {data} = await axiosPrivate.delete(url);
        if(data.acknowledged){
            toast.success('Product delete successfully');
            setModalOrder(null);
            refetch()
        };
    };



    return (
        <>
            
            <input type="checkbox" id="manage-order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative text-center">
                
                    <h3 className="text-lg font-bold"> Are you sure delete <span className='text-secondary'> {name} </span> order ?  </h3>
                   
                    <div className='text-end mt-5'>
                        <button onClick={deleteOrder} className='btn btn-xs btn-error mx-3 '> Delete </button>
                        <label htmlFor="manage-order-modal" className="btn btn-xs "> Cancel </label>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ManageOrderModal;