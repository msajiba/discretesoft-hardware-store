import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query'
import axiosPrivate from '../api/axiosPrivate';
import Loader from '../Shared/Loader';
import ToolsRow from './ToolsRow';

const HomeTools = () => {

    const url = 'https://discretesoft-hardware.herokuapp.com/services'
    const {data:tools, isLoading} = useQuery(['tools'], async()=> await axiosPrivate.get(url));

    if(isLoading){
        return <Loader> </Loader>
    }

    return (


        <>
            <h3 data-aos="fade-up" data-aos-duration="1000" className="text-3xl my-28 text-center text-secondary hover:text-primary"> NEW ARRIVALS  </h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 px-20 ">

                {
                    tools?.data.map((tool,index) => <ToolsRow key={tool._id} tool={tool}> </ToolsRow>)
                }
            </div>
        </>
       
    );
};

export default HomeTools;