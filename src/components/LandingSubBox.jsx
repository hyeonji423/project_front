// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


import "swiper/css/navigation";
import "swiper/css/pagination";


// Import Swiper styles
import "swiper/css";
import { useRef } from "react";


export default () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  console.log(prevRef.current);
  return (
    <div className="box-wrapper w-full flex justify-between items-center p-4 bg-white border">
      <div className="text-center w-[20%]">
        <h3>
          자주 나타나는
          <br />
          증상
        </h3>
      </div>
      <div className="relative w-[80%]">
        <div className="flex gap-3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 absolute justify-between w-full">
          <button className="text-xl" ref={prevRef}>
            &lt;
          </button>
          <button className="text-xl" ref={nextRef}>
            &gt;
          </button>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          slidesPerView={4}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

