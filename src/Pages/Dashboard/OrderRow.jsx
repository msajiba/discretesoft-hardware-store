import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderRow = ({order, index, setShowDelete}) => {
    
    const {name, totalPrice, inputQuantity, paid, _id} = order;

    const navigate = useNavigate();

    return (

        <tr>
            <th> {index +1 } </th>
            <td> {name} </td>
            <td> {inputQuantity} </td>
            <td> {totalPrice} </td>
            <td> 
                <label htmlFor="order-delete-modal" onClick={()=>setShowDelete(order)} className='btn btn-xs btn-error'> Delete </label>   
            </td>

            <td> 

               { (totalPrice && !paid) && <button onClick={()=> navigate(`/payment/${_id}`)}  className='btn btn-info btn-xs'> Pay</button> }
               { (totalPrice && paid) && <button className='btn btn-success'> Paid</button> }

            </td>
        </tr>
    );
};

export default OrderRow;