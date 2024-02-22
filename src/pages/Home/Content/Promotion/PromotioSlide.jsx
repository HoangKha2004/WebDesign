import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './PromotionSlide.css';

import { Autoplay } from 'swiper/modules';

import slide1 from '/promotionSlide/slide1.webp';
import slide2 from '/promotionSlide/slide2.webp';
import slide3 from '/promotionSlide/slide3.webp';
import slide4 from '/promotionSlide/slide4.webp';
import slide5 from '/promotionSlide/slide5.webp';
import slide6 from '/promotionSlide/slide6.webp';
import slide7 from '/promotionSlide/slide7.webp';
import slide8 from '/promotionSlide/slide8.webp';
import slide9 from '/promotionSlide/slide9.webp';
import slide10 from '/promotionSlide/slide10.webp';
import slide11 from '/promotionSlide/slide11.webp';

export default () => {
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            slidesPerView={4}
            loop={true}
        >
            <SwiperSlide>
                <a href="#" className="promotion-item">
                    <img src={slide1} />
                    <p>Giá Vé U22 - Chỉ Từ 45k</p>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" className="promotion-item">
                    <img src={slide2} />
                    <p>Tiêu Chí Phân Loại Phim Theo Lứa Tuổi</p>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" className="promotion-item">
                    <img src={slide3} />
                    <p>Hái Lộc Tết Rồng Cùng Galaxy Cinema</p>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" className="promotion-item">
                    <img src={slide4} />
                    <p>Galaxy Sala Ưu Đãi 50% Bắp Nước</p>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" className="promotion-item">
                    <img src={slide5} />
                    <p>Very Happy Day - Vé Chỉ Từ 50K, Giảm Đến 50% Bắp Nước</p>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" className="promotion-item">
                    <img src={slide6} />
                    <p>Siêu Ưu Đãi - Đồng Giá Movie Combo Chỉ 199K</p>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" className="promotion-item">
                    <img src={slide7} />
                    <p>VNPAY Giảm Đến 15K!</p>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" className="promotion-item">
                    <img src={slide8} />
                    <p>Mưa Quà Tặng Cho Thành Viên Galaxy Cinema 2024</p>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" className="promotion-item">
                    <img src={slide9} />
                    <p>U22 Vui Vẻ - Bắp Nước Siêu Hạt Dẻ</p>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" className="promotion-item">
                    <img src={slide10} />
                    <p>Một Phim Tại Rạp - Ngàn Phim Tại Nhà</p>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" className="promotion-item">
                    <img src={slide11} />
                    <p>Ngày Tri Ân Của Galaxy Cinema - Ngày Thứ Hai ĐẦU TIÊN Mỗi Tháng</p>
                </a>
            </SwiperSlide>
        </Swiper>
    );
};
