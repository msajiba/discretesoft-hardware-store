
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import axios from "axios";
import { useQuery } from 'react-query';
import Loader from "../Shared/Loader";


const HomeReview = () => {

  const url = 'http://localhost:5000/review';
  const {data:review, isLoading} = useQuery(['review'], async()=> await axios.get(url))

  if(isLoading){
    return <Loader> </Loader>
  };




    return (
        <>
      <Swiper slidesPerView={1} spaceBetween={10} pagination={{ clickable: true,}}

        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >


          { 
            review.data.map(rev =>   <SwiperSlide key={rev._id} className=' rounded-full mx-20 reverse '>
                                        <div>
                                          <div className="avatar">
                                            <div className="w-20 rounded-full">
                                              <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                              <span className='text-primary'> {rev.company} </span>
                                          </div>
                                            <p className='text-sm'> {rev.description} </p>
                                            <p> Ratting <span className="text-secondary"> {rev.ratting} of 5 </span>  </p>
                                        </div>
                                      </SwiperSlide> 
                              )
          }

                  
        
      </Swiper>
    </>
    );
};

export default HomeReview;