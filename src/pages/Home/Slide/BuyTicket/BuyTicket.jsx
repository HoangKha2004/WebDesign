import React from 'react';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    min-width: 180px;
    opacity: 0.5;
    padding: 15px 0;
    cursor: default;
    &.active {
        opacity: 1;
        cursor: pointer;
    }

    .item {
        display: flex;
        align-items: center;
        gap: 8px;

        & span {
            background-color: #ff8800;
            font-size: 11px;
            width: 18px;
            height: 18px;
            text-align: center;
            line-height: 18px;
            font-weight: bold;
            border-radius: 100rem;
            color: white;
        }

        & h4 {
            font-size: 15px;
            text-transform: capitalize;
        }
    }
`;

const Button = styled.button`
    cursor: default;

    &.active {
        cursor: pointer;
        opacity: 1;
        color: white;
    }
`;
const BuyTicket = () => {
    return (
        <div className="desktop:flex hidden absolute bottom-[-30px] left-[50%] translate-x-[-50%] z-30 bg-white shadow-shadowMenu gap-x-4 pl-2 rounded min-w-[1050px]">
            <Item className="active flex-1">
                <div className="item">
                    <span>1</span>
                    <h4>Chọn phim</h4>
                </div>
                <div className="icon">
                    <MdOutlineKeyboardArrowDown />
                </div>
            </Item>
            <Item>
                <div className="item">
                    <span>2</span>
                    <h4>Chọn rạp</h4>
                </div>
                <div className="icon">
                    <MdOutlineKeyboardArrowDown />
                </div>
            </Item>
            <Item>
                <div className="item">
                    <span>3</span>
                    <h4>Chọn ngày</h4>
                </div>
                <div className="icon">
                    <MdOutlineKeyboardArrowDown />
                </div>
            </Item>
            <Item>
                <div className="item">
                    <span>4</span>
                    <h4>Chọn suất</h4>
                </div>
                <div className="icon">
                    <MdOutlineKeyboardArrowDown />
                </div>
            </Item>
            <Button
                type="submit"
                className="bg-orange-600 outline-none border-none rounded px-5 whitespace-nowrap opacity-80 capitalize"
            >
                Mua vé nhanh
            </Button>
        </div>
    );
};

export default BuyTicket;
