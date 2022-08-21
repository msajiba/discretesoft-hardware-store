import React, { useEffect, useState } from 'react';


const useAdmin = user => {

    const [admin, setAdmin] = useState(false);
    const email = user?.email;

    const url = `http://localhost:5000/admin/${email}`
    
    useEffect(()=> {
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            setAdmin(data)
        })
    }, [user])


    return [admin]
};

export default useAdmin;