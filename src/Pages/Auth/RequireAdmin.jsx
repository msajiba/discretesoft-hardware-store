import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase';
import {useLocation, Navigate} from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import Loader from '../Shared/Loader';
import { signOut } from 'firebase/auth';

const RequireAdmin = ({children}) => {

   const [user, loading] = useAuthState(auth);
   const [admin, adminLoading] = useAdmin(user);
   const location = useLocation();

    if(loading || adminLoading){
        return <Loader />
    };

    if(!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    };


    return children;
};

export default RequireAdmin;