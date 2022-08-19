import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    return (

        <div className="drawer drawer-mobile">
        <input id="my-dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet> </Outlet>
          <label htmlFor="my-dashboard" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-dashboard" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li> <Link to=''> My Orders </Link> </li>
            <li> <Link to='/dashboard/addReview'> Add Review </Link> </li>
            <li> <Link to='/dashboard/myProfile'> My Profile </Link> </li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;