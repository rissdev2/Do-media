import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
// import "./styles.css";

// import required modules
import { Autoplay } from "swiper";






export default function Clients() {
  return (
    <>
    <div className="container-fluid py-5 my-5 client-sec">
        <div className="row">
            <div className="col-md-12 text-center">
                <h2>Our Clients</h2>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-12 text-center">
                
            <Swiper
            slidesPerView={2}
        spaceBetween={30}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="assets/images/client1.png" className='img-fluid' alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/client2.png" className='img-fluid' alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/client3.png" className='img-fluid' alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/client4.png" className='img-fluid' alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/client5.png" className='img-fluid' alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/client6.png" className='img-fluid' alt="" /></SwiperSlide>
      </Swiper>




      <Swiper
       dir="rtl"
            slidesPerView={2}
        spaceBetween={30}
       
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="assets/images/client7.png" className='img-fluid' alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/client8.png" className='img-fluid' alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/client9.png" className='img-fluid' alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/client10.png" className='img-fluid' alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/client11.png" className='img-fluid' alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/client12.png" className='img-fluid' alt="" /></SwiperSlide>
      </Swiper>
            </div>
        </div>
    </div>
    </>
  )
}
