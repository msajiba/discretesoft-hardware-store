import React from 'react';
import axiosPrivate from '../../api/axiosPrivate';
import {toast} from 'react-toastify';

const ManageProductModal = ({product, setProduct, refetch}) => {
    const {name, img, _id} = product;

    const deleteProduct = async() =>{
        const url = `http://localhost:5000/product/${_id}`;

        const {data} = await axiosPrivate.delete(url);
        if(data.acknowledged){
            toast.success('Product delete successfully');
            setProduct(null);
            refetch()
        }
    };



    return (
        <>
            
            <input type="checkbox" id="manage-product-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative text-center">
                
                    <div class="avatar">
                        <div class="w-20 rounded-full">
                            <img src={img} />
                        </div>
                    </div>

                    <h3 class="text-lg font-bold"> Are you sure delete <span className='text-secondary'> {name} </span> ? </h3>
                   
                    <div className='text-end mt-5'>
                        <button onClick={deleteProduct} className='btn btn-xs btn-error mx-3 '> Delete </button>
                        <label for="manage-product-modal" class="btn btn-xs "> Cancel </label>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ManageProductModal;