import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase';
import {useLocation, Navigate} from 'react-router-dom';
import Loader from '../Shared/Loader';

const RequireAuth = ({children}) => {

   const [user, loading] = useAuthState(auth);
   const location = useLocation();

    if(loading){
        return <Loader />
    };

    if(!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    };


    return children;
};

export default RequireAuth;