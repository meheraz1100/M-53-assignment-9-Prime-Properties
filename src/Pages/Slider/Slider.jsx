import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle'


const Slider = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://i.ibb.co/yFL0gvC/1693307829089home-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/H4fSqyx/download-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/0yG2JZh/1693270025466home-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/v303XK4/download-2.jpg" alt="" /></SwiperSlide>
      </Swiper>
    );
};

export default Slider;