import React, { useEffect, useState } from 'react';


const useToken = user => {

    const [token, setToken] = useState('');
  
    
    useEffect(()=> {
        
        const email = user?.user?.email;
        const currentUser = {email:email};
 
        if(email){

            const url = `https://discretesoft-hardware.herokuapp.com/user/${email}`;
            fetch(url, { 
                method : 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=> res.json())
            .then(data=> {
                const accessToken = data?.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })

        }
        }, [user])

    
    return [token];
};

export default useToken;