import React from 'react';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { BiCurrentLocation } from 'react-icons/bi';
import Movie from './Movie';

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

const MovieContent = () => {
    return (
        <div className="py-14 container px-5 border-b-2">
            <div className="flex items-center tabletMini:justify-start justify-between gap-x-10 ">
                <h3 className="font-bold hidden tabletMini:block uppercase text-[20px] relative after:absolute after:h-[80%] after:w-1 after:top-[50%] after:translate-y-[-50%] after:left-[-10px] after:bg-blue-800">
                    Phim
                </h3>
                <Menu>
                    <p className="item sm:text-sm tabletMini:text-base active">Đang chiếu</p>
                    <p className="item sm:text-sm tabletMini:text-base">Sắp chiếu</p>
                    <p className="item sm:text-sm tabletMini:text-base">Phim IMAX</p>
                </Menu>
                <div
                    className="flex items-center gap-x-1 tabletMini:text-base font-semibold text-blue-900 cursor-pointer"
                    title="Vị trí hiện tại ở toàn quốc"
                >
                    <BiCurrentLocation /> <span>Toàn quốc</span>
                </div>
            </div>
            <Movie></Movie>
            <a href="#" className="flex justify-center">
                <div className="flex gap-4 cursor-pointer items-center mt-10 text-orange-500 text-base border px-8 py-2 rounded border-orange-500 text-center hover:bg-orange-400 hover:border-orange-400 hover:text-white transition-all ease-linear duration-200">
                    <span>Xem thêm</span>
                    <MdOutlineKeyboardArrowRight />
                </div>
            </a>
        </div>
    );
};

export default MovieContent;
