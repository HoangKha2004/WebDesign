import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slide.css';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import slide1 from '/slides/slide1.webp';
import slide2 from '/slides/slide2.webp';
import slide3 from '/slides/slide3.webp';
import slide4 from '/slides/slide4.webp';
import slide5 from '/slides/slide5.webp';
import slide6 from '/slides/slide6.webp';
import slide7 from '/slides/slide7.webp';
import slide8 from '/slides/slide8.webp';

export default () => {
    return (
        <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
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
            <SwiperSlide>
                <img src={slide5} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide6} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide7} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide8} />
            </SwiperSlide>
        </Swiper>
    );
};
