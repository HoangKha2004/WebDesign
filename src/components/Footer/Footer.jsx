import React from 'react';
import styled from 'styled-components';
import { FaYoutube, FaFacebookSquare, FaInstagramSquare, FaTelegramPlane } from 'react-icons/fa';
import { BsFillPhoneFill, BsFillTelephoneFill } from 'react-icons/bs';

import galaxy from '/images/galaxyFooter.webp';
import tradeFooter from '/images/tradeFooter.webp';

const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    color: white;

    h3 {
        color: white;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 1px;
    }

    a {
        color: #bbb;
        text-transform: capitalize;
        font-size: 14px;
        letter-spacing: 1px;
        transition: all 0.2s linear;
        &:hover {
            cursor: pointer;
            color: #fd841f;
        }
    }

    .img {
        font-size: 35px;
        fill: #bbb;
        transition: all 0.2s linear;
        &:hover {
            fill: #fd841f;
            cursor: pointer;
            scale: 1.1;
        }
    }
`;
const Footer = () => {
    return (
        <div className="bg-[#333] ">
            <div className="container border-b-2 tabletMini:px-5 px-11 mx-auto py-8 sm:grid tabletMini:grid-cols-4 sm:grid-cols-2 flex flex-col items-center sm:items-start text-center tabletMini:text-left gap-20">
                <Item>
                    <h3>Giới thiệu</h3>
                    <div className="flex flex-col gap-5">
                        <a href="#">Về chúng tôi</a>
                        <a href="#">Thỏa thuận sử dụng</a>
                        <a href="#">Quy chế hoạt động</a>
                        <a href="#">Chính sách bảo mật</a>
                    </div>
                </Item>
                <Item>
                    <h3>Góc điện ảnh</h3>
                    <div className="flex flex-col gap-5">
                        <a href="#">Thể loại phim</a>
                        <a href="#">Bình luận phim</a>
                        <a href="#">Blog điện ảnh</a>
                        <a href="#">Phim hay tháng</a>
                        <a href="#">Phim IMAX</a>
                    </div>
                </Item>
                <Item>
                    <h3>Hỗ trợ</h3>
                    <div className="flex flex-col gap-5">
                        <a href="#">Góp ý</a>
                        <a href="#">Sale & services</a>
                        <a href="#">Rạp/ giá vé</a>
                        <a href="#">Tuyển dụng</a>
                        <a href="#">FAQ</a>
                    </div>
                </Item>
                <Item className="flex items-center">
                    <img src={galaxy} className="object-contain w-[100px]" />
                    <div className="flex gap-3 ">
                        <a href="#">
                            <FaFacebookSquare className="img" />
                        </a>
                        <a href="#">
                            <FaYoutube className="img" />
                        </a>
                        <a href="#">
                            <FaInstagramSquare className="img" />
                        </a>
                    </div>
                    <a href="#">
                        <img src={tradeFooter} className="w-[150px] object-contain" />
                    </a>
                </Item>
            </div>
            <div className="container flex gap-4 tabletMini:px-5 px-11 py-5 flex-wrap">
                <img src={galaxy} className="w-[100px] object-contain hidden tabletMini:block" />
                <div className="flex flex-wrap flex-col gap-1">
                    <h4 className="uppercase text-lg text-white font-semibold">Công ty cổ phần phim thiên ngân</h4>
                    <p className="text-[#bbb] text-[12px]">
                        Toà nhà Bitexco Nam Long, 63A Võ Văn Tần, Phường 6, Quận 3, Tp. Hồ Chí Minh, Việt Nam
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm items-center text-[#bbb]">
                        <div className="flex items-center ">
                            <BsFillPhoneFill className="text-[12px]" />
                            <span className="text-[11px] tracking-[0.5px]">
                                <span>: </span>
                                <a href="#" className="hover:text-[#fd841f] transition-colors duration-300">
                                    028.39.333.303
                                </a>
                            </span>
                        </div>
                        <div className="flex items-center">
                            <BsFillTelephoneFill className="text-[12px] " />
                            <span className="text-[11px] tracking-[0.5px]">
                                <span>: </span>
                                <a href="#" className="hover:text-[#fd841f] transition-colors duration-300">
                                    19002224 (9:00 - 22:00)
                                </a>
                            </span>
                        </div>
                        <div className="flex items-center">
                            <FaTelegramPlane />
                            <span className="text-[11px] tracking-[0.5px]">
                                <span>: </span>
                                <a href="#" className="hover:text-[#fd841f] transition-colors duration-300">
                                    hotro@galaxystudio.vn
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
