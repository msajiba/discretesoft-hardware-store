import React, { useState } from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import Loader from '../../Shared/Loader';
import ManageOrderRow from './ManageOrderRow';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase';
import axiosPrivate from '../../api/axiosPrivate';
import ManageOrderModal from './ManageOrderModal';

const ManageOrder = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;
    const [modalOrder, setModalOrder] = useState(null);

    const url = `http://localhost:5000/allOrder?email=${email}`;
    const {data:orders, isLoading, refetch} = useQuery(['orders'], async()=> await axiosPrivate.get(url));

    if(isLoading){
        return <Loader> </Loader>
    }

    return (
        
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th> #</th>
                        <th> User Name </th>
                        <th> Email </th>
                        <th> Product Name </th>
                        <th> Phone </th>
                        <th> Quantity </th>
                        <th> Price </th>
                        <th> Payment Status </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.data.map((order, index) => <ManageOrderRow 
                                                                setModalOrder={setModalOrder}
                                                                index={index}
                                                                key={order._id} 
                                                                order={order}> 
                                                        </ManageOrderRow>)
                    }
                    
                </tbody>
            </table>

        {
            modalOrder && <ManageOrderModal
                            modalOrder={modalOrder}
                            refetch={refetch} 
                            setModalOrder={setModalOrder}
                         />
        }

      </div>

    );
};

export default ManageOrder;