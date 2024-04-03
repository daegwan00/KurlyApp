import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Navigation,Pagination,Autoplay} from 'swiper/modules';

import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

//SwipeCore.use([Navigation,Pagination,Autoplay])

export default function Animation() {

  return(
    <Swiper
      modules={[Navigation, Pagination,Autoplay]}
      className = "home-banner"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{clickable : true}}
      autoplay= {{delay:2000}}>
      <SwiperSlide>
        < img  className="home-img1" src="https://product-image.kurly.com/cdn-cgi/image/width=1900,height=370,quality=85/banner/main/pc/img/159de09f-e14a-403b-a5b7-bb03b0e06935.jpg" alt="슬라이드1"></img>
      </SwiperSlide>
      <SwiperSlide >
        < img className="home-img2"  src= "https://product-image.kurly.com/cdn-cgi/image/width=1900,height=370,quality=85/banner/main/pc/img/1f1bc350-70f8-42ad-b971-fc491da114fa.jpg" alt="슬라이드2"></img>
      </SwiperSlide>
      {/* <SwiperSlide className="home-img3">슬라이드3</SwiperSlide>
      <SwiperSlide className="home-img4">슬라이드4</SwiperSlide> */}
    </Swiper>

  )

}