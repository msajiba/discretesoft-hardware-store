import React from 'react';

const ManageOrderRow = ({order, index}) => {

const {email, inputQuantity, userName, totalPrice, name, phone} = order;

    return (
        <tr>
            <th> {index +1} </th>
            <td> {userName} </td>
            <td> {email} </td>
            <td> {name} </td>
            <td> {phone} </td>
            <td> {inputQuantity} </td>
            <td> ${totalPrice}.00 </td>
         </tr>
    );
};

export default ManageOrderRow;