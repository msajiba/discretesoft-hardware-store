import React from 'react';
import axiosPrivate from '../../api/axiosPrivate';
import {toast} from 'react-toastify';

const ManageProductModal = ({product, setProduct, refetch}) => {
    const {name, img, _id} = product;

    const deleteProduct = async() =>{
        const url = `https://discretesoft-hardware.herokuapp.com/product/${_id}`;

        const {data} = await axiosPrivate.delete(url);
        if(data.acknowledged){
            toast.success('Product delete successfully');
            setProduct(null);
            refetch()
        }
    };



    return (
        <>
            
            <input type="checkbox" id="manage-product-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative text-center">
                
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <img src={img} />
                        </div>
                    </div>

                    <h3 className="text-lg font-bold"> Are you sure delete <span className='text-secondary'> {name} </span> ? </h3>
                   
                    <div className='text-end mt-5'>
                        <button onClick={deleteProduct} className='btn btn-xs btn-error mx-3 '> Delete </button>
                        <label htmlFor="manage-product-modal" className="btn btn-xs "> Cancel </label>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ManageProductModal;