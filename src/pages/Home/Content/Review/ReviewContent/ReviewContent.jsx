import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import styled from 'styled-components';

import Dune from '/images/dune.webp';
import gapLaiChiBau from '/images/gapLaiChiBau.webp';
import sangDen from '/images/sangDen.webp';
import Mai from '/images/mai.webp';

const ReviewContentContainer = styled.div`
    padding-top: 32px;

    .item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background-color: #eee;
        padding: 2px 10px;
        font-size: 12px;
        border-radius: 5px;
        cursor: pointer;

        &.like {
            background-color: #4080ff;
            color: white;

            &:hover {
                background-color: #0b54e6;
                transition: all 0.2s linear;
            }
        }
    }

    .img-movie {
        object-fit: contain;
        transition: all 0.2s linear;
        border-radius: 4px;

        &:hover {
            scale: 1.05;
            cursor: pointer;
        }
    }

    .hover:hover h4 {
        color: #1e3a8a;
        transition: all 0.8s linear;
    }
`;

const ReviewContent = () => {
    return (
        <ReviewContentContainer>
            <div className="flex flex-col gap-6 tabletMini:flex-row">
                <a href="#" className="flex flex-col gap-6 hover">
                    <img
                        src={Dune}
                        className="rounded w-[900px] hover:scale-105 object-contain hover:cursor-pointer transition-all ease-linear duration-200"
                    />
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-xl capitalize cursor-pointer">
                            [Review] Dune: Chất lượng của 6 tượng vàng Oscar
                        </h4>
                        <div className="flex gap-2">
                            <p className="item like">
                                <FaThumbsUp />
                                <span>Thích</span>
                            </p>
                            <p className="item">
                                <FaEye />
                                <span>61</span>
                            </p>
                        </div>
                    </div>
                </a>

                <div className="flex flex-col gap-5 ">
                    <a href="#" className="flex gap-3 hover">
                        <img src={gapLaiChiBau} className="img-movie w-[150px] tablet:w-[180px]" />
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold desktop:text-[17px] text-base capitalize cursor-pointer line-clamp-2">
                                [Review] Gặp lại chị bầu: Hài hước và không kém phần cảm động
                            </h4>
                            <div>
                                <div className="flex gap-2">
                                    <p className="item like">
                                        <FaThumbsUp />
                                        <span>Thích</span>
                                    </p>
                                    <p className="item">
                                        <FaEye />
                                        <span>61</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex gap-3 hover">
                        <img src={sangDen} className="img-movie w-[150px] tablet:w-[180px]" />
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold desktop:text-[17px] text-base line-clamp-2 capitalize cursor-pointer">
                                [Review] Sáng Đèn: Diễn Xuất Chất Lượng Nâng Tầm Phim Tết
                            </h4>
                            <div>
                                <div className="flex gap-2">
                                    <p className="item like">
                                        <FaThumbsUp />
                                        <span>Thích</span>
                                    </p>
                                    <p className="item">
                                        <FaEye />
                                        <span>61</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex gap-3 hover">
                        <img src={Mai} className="img-movie w-[150px] tablet:w-[180px]" />
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold desktop:text-[17px] text-base line-clamp-2 capitalize cursor-pointer ">
                                [Review] Mai: Tác Phẩm Đột Phá Của Đạo Diễn Trấn Thành
                            </h4>
                            <div>
                                <div className="flex gap-2">
                                    <p className="item like">
                                        <FaThumbsUp />
                                        <span>Thích</span>
                                    </p>
                                    <p className="item">
                                        <FaEye />
                                        <span>61</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </ReviewContentContainer>
    );
};

export default ReviewContent;
