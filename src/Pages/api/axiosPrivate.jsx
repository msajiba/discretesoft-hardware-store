import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase";


const axiosPrivate = axios.create({});


axiosPrivate.interceptors.request.use(function (config) {
    // Do something before request is sent

    if(!config.headers.authorization){
        config.headers.authorization= `Bearer ${localStorage.getItem('accessToken')}`
    };
    return config;

}, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosPrivate.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {

    if(error.response.status ===403 || error.response.status ===401 ){

        localStorage.removeItem('accessToken');
        signOut(auth)
        //refresh token
        //send to the server
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default axiosPrivate;