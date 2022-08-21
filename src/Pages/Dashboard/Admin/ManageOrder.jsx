import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import Loader from '../../Shared/Loader';
import OrderRow from '../OrderRow';
import ManageOrderRow from './ManageOrderRow';

const ManageOrder = () => {


    const url = 'http://localhost:5000/allOrder';
    const {data:orders, isLoading} = useQuery(['orders'], async()=> await axios.get(url));

    if(isLoading){
        return <Loader> </Loader>
    }

    return (
        
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th> #</th>
                        <th> User Name </th>
                        <th> Email </th>
                        <th> Product Name </th>
                        <th> Phone </th>
                        <th> Quantity </th>
                        <th> Price </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.data.map((order, index) => <ManageOrderRow index={index} key={order._id} order={order}> </ManageOrderRow>)
                    }
                    
                </tbody>
            </table>
      </div>

    );
};

export default ManageOrder;