import React, {useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loader from '../Shared/Loader';
import OrderRow from './OrderRow';
import OrderDeleteModal from './OrderDeleteModal';
import axiosPrivate from '../api/axiosPrivate';

const MyOrders = () => {

    const [showDelete , setShowDelete] = useState(null);
    const [user] = useAuthState(auth);
    const email = user?.email;

    const url = `http://localhost:5000/order/${email}`;

    const {data:orders, isLoading, refetch} = useQuery(['order', user], async()=> await axiosPrivate.get(url));
    
    if(isLoading){
        return <Loader> </Loader>
    };

    return (


        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                <tr>
                    <th> # </th>
                    <th> Tool Name</th>
                    <th> Quality </th>
                    <th> Price </th>
                    <th> Transaction Id </th>
                    <th> Action </th>
                    <th> Payment </th>
                    <th> Order Status </th>
                </tr>
                </thead>
                <tbody>
                    {
                        orders?.data.map((order, index) =>   <OrderRow 
                                                                key={index} 
                                                                index={index} 
                                                                order={order}
                                                                setShowDelete={setShowDelete}> 
                                                            </OrderRow>)
                    }
                </tbody>
            </table>

            {
                showDelete && <OrderDeleteModal 
                                refetch={refetch}
                                setShowDelete={setShowDelete} 
                                showDelete={showDelete}>
                            </OrderDeleteModal>
            }

            </div>


    );
};

export default MyOrders;