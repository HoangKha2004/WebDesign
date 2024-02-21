import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import slide1 from '/phoneSlide/slide1.webp';
import slide2 from '/phoneSlide/slide2.svg';
import slide3 from '/phoneSlide/slide3.webp';
import slide4 from '/phoneSlide/slide4.webp';

export default () => {
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
            className="absolute desktop:top-[9.2px] top-[8px] desktop:left-[10px] left-[9px] desktop:w-[180px] w-[155px] h-full  z-0"
        >
            <SwiperSlide>
                <img src={slide1} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} />
            </SwiperSlide>
        </Swiper>
    );
};
