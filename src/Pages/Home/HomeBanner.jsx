import React from 'react';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import banner4 from '../../assets/banner4.jpg';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const HomeBanner = () => {

    return (

        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-50"
            >
                <SwiperSlide> <img src={banner1} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={banner2} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={banner3} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={banner4} alt="" /> </SwiperSlide>
            </Swiper>
        </>

    );
};

export default HomeBanner;