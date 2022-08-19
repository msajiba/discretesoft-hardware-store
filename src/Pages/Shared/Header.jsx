import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase';
import { BeakerIcon, UserCircleIcon, } from '@heroicons/react/solid'

const Header = () => {

    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
    }

  

    const menu = <>
    
                    <li><Link className='hover:text-secondary' to='/'> Home </Link></li>
                    <li><Link className='hover:text-secondary' to='/'> Blog </Link></li>
                    { 
                        user?.email ?  <>   
                                            <li><Link className='hover:text-secondary' to='/dashboard'> Dashboard </Link></li>
                                            <li> <button className='bg-transparent cursor-default' > <UserCircleIcon  className='w-8' /> {user.displayName} </button> </li> 
                                            <li> <button className='text-red-500' onClick={logOut}> Sign Out </button> </li> 
                                        </>
                                    :  <li><Link className='hover:text-secondary' to='/login'> Login </Link></li> 
                    }
    
                </> 


    return (


        <div className="navbar md:px-20 bg-primary">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <p className="normal-case text-xl"> Discretesoft <br /> <span className='text-secondary text-sm '> Hardware Store </span></p>
            </div>

            <div className="navbar-start hidden lg:flex text-slate-100 font-semibold md:text-lg">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>

      </div>


    );
};

export default Header;