import React from 'react';
import axiosPrivate from '../../api/axiosPrivate';

const ManageOrderRow = ({order, index, setModalOrder,refetch }) => {

const {email, inputQuantity, userName, totalPrice, name, phone, paid, status, _id} = order;

    const handlePendingStatus = async() => {
        const url = `https://discretesoft-hardware.herokuapp.com/payment-complete/${_id}`
        const {data} = await axiosPrivate.patch(url);
    };
    
    refetch();
    

    return (
        <tr>
            <th> {index +1} </th>
            <td> {userName} </td>
            <td> {email} </td>
            <td> {name} </td>
            <td> {phone} </td>
            <td> {inputQuantity} </td>
            <td> ${totalPrice}.00 </td>

            <td>
                {!paid && <button onClick className='btn btn-info btn-xs'> unpaid</button> }
                { (paid && status) && <button className='btn btn-success btn-xs'> Shipped </button> }
                { (paid && !status) &&  <button onClick={handlePendingStatus} className='btn btn-success btn-xs'> Pending </button> }
            </td>

            <td>
                { 
                    !paid && 
                        <label 
                            onClick={()=> setModalOrder(order)}
                            htmlFor="manage-order-modal" 
                            className='btn btn-error btn-xs'>
                                 Delete 
                        </label>
                }
            </td>

         </tr>
    );
};

export default ManageOrderRow;