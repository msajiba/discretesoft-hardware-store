import React, { useState } from 'react';
import axiosPrivate from '../../api/axiosPrivate';
import {useQuery} from 'react-query';
import Loader from '../../Shared/Loader';
import ManageProductRow from './ManageProductRow';
import ManageProductModal from './ManageProductModal';

const ManageProduct = () => {

    const [product, setProduct] = useState(null);

    const url = 'https://discretesoft-hardware.herokuapp.com/services';
    const {data:products, isLoading, refetch} = useQuery(['tools'], async()=> await axiosPrivate.get(url));

    if(isLoading){
        return <Loader> </Loader>
    };


    return (

        <div className="overflow-x-auto">
            <table className="table w-full">
            
            <thead>
                <tr>
                    <th> # </th>
                    <th> Avatar </th>
                    <th> Name  </th>
                    <th> Available Quantity</th>
                    <th> Price </th>
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>

                {
                    products.data.map((product,index)=> <ManageProductRow 
                                                            key={index}
                                                            setProduct={setProduct}
                                                            product={product} 
                                                            index={index}> 
                                                        </ManageProductRow> )
                }

            </tbody>
            </table>

            {product && <ManageProductModal product={product} refetch={refetch} setProduct={setProduct} /> }

        </div>
    );
};

export default ManageProduct;