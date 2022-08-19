import React from 'react';

const OrderRow = ({order, index, setShowDelete}) => {
    const {name, totalPrice, inputQuantity} = order;

    return (

        <tr>
            <th> {index +1 } </th>
            <td> {name} </td>
            <td> {inputQuantity} </td>
            <td> {totalPrice} </td>
            <td> 
                <label for="order-delete-modal" onClick={()=>setShowDelete(order)} className='btn btn-xs btn-error'> Delete </label>   
            </td>
        </tr>
    );
};

export default OrderRow;