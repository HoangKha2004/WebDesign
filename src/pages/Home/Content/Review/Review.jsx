import React from 'react';
import styled from 'styled-components';
import ReviewContent from './ReviewContent/ReviewContent';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
const Menu = styled.div`
    display: flex;
    column-gap: 40px;

    .item {
        font-weight: bold;
        position: relative;
        opacity: 0.7;

        &:hover {
            cursor: pointer;
            color: #034ea1;
        }

        &.active {
            color: #034ea1;
            opacity: 1;
        }

        &.active::after {
            position: absolute;
            content: '';
            width: 30%;
            height: 2px;
            background-color: #034ea1;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;
const Review = () => {
    return (
        <div className="py-14 px-5 container border-b-2">
            <div className="flex items-center gap-x-10 ">
                <h3 className="font-bold uppercase text-[20px] hidden tabletMini:block relative after:absolute after:h-[80%] after:w-1 after:top-[50%] after:translate-y-[-50%] after:left-[-10px] after:bg-blue-800">
                    Góc điện ảnh
                </h3>
                <Menu>
                    <p className="item sm:text-sm tabletMini:text-base active">Bình luận phim</p>
                    <p className="item sm:text-sm tabletMini:text-base">Blog điện ảnh</p>
                </Menu>
            </div>
            <ReviewContent></ReviewContent>
            <div className="flex justify-center">
                <a
                    href="#"
                    className="flex gap-4 cursor-pointer items-center mt-10 text-orange-500 text-base border px-8 py-2 rounded border-orange-500 text-center hover:bg-orange-400 hover:border-orange-400 hover:text-white transition-all ease-linear duration-200"
                >
                    <span>Xem thêm</span>
                    <MdOutlineKeyboardArrowRight />
                </a>
            </div>
        </div>
    );
};

export default Review;
