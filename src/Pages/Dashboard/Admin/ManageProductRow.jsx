import React from 'react';

const ManageProductRow = ({product, index, setProduct}) => {

    const {img, name, price, available, } = product;

    return (
        <tr>
            <th> {index +1} </th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={img} />
                    </div>
                </div>
            </td>
            <td> {name} </td>
            <td> {available} </td>
            <td> ${price} </td>
            <td> 
                <label onClick={()=> setProduct(product)} for="manage-product-modal" className='btn btn-xs btn-error'> Delete </label>
            </td>
        </tr>
    );
};

export default ManageProductRow;