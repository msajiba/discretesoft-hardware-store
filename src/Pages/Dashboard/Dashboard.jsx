import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase/Firebase';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);


    return (

        <div className="drawer drawer-mobile">
        <input id="my-dashboard" type="checkbox" className="drawer-toggle" />
        
        <div className="drawer-content">
          <Outlet> </Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-dashboard" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

            <li> <Link to=''> My Profile </Link> </li>
            
            { (user&& !admin) &&   <>
                                      <li> <Link to='/dashboard/MyOrders'> My Orders </Link> </li>
                                      <li> <Link to='/dashboard/addReview'> Add Review </Link> </li>
                                    </>
            }

            {
              (user && admin) && <>
                                    <li> <Link to='/dashboard/manageOrder'> Manage All Order </Link> </li>
                                    <li> <Link to='/dashboard/addProduct'> Add Product </Link> </li>
                                    <li> <Link to='/dashboard/makeAdmin'> Make Admin </Link> </li>
                                    <li> <Link to='/dashboard/manageProduct'> Manage Product </Link> </li>
                                 </>
            }


          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;