import React, { useEffect, useState } from 'react';


const useAdmin = user => {

    const [admin, setAdmin] = useState(false);

    const [adminLoading, setAdminLoading] = useState(true);
    const email = user?.email;

    const url = `https://discretesoft-hardware.herokuapp.com/admin/${email}`
    
    useEffect(()=> {

        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            setAdmin(data)
            if(data){
                setAdminLoading(false);
            }
        })
    }, [user]);


    return [admin, adminLoading]
};

export default useAdmin;