import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Movies from './SubMenu/Movies/Movies';
import { DataSystem } from './SubMenu/Systems/System';
import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 5px;
    font-size: 14px;
    text-transform: capitalize;
    transition: all 0.2s ease-in-out;
    font-weight: 500;
    position: relative;

    &:hover {
        color: var(--text-hover);
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 24px;
        background-color: transparent;
        bottom: -100%;
    }
`;

const SubMenu = styled.div`
    position: absolute;
    display: none;
    z-index: 100;
    top: 200%;
    background-color: white;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    transform: translateX(-15%);

    & .header-menu-item {
        display: block;
        text-align: center;
        padding: 8px 28px;
        white-space: nowrap;
        border-left: 4px solid transparent;
        margin: 0 2px;
        transition: all linear 0.2s;

        &:hover {
            background-color: #fb770b1a;
            color: var(--text-color);
            border-color: #ff7b00;
            transform: translateX(2px);
        }
    }
`;

const Navigation = () => {
    return (
        <ul className="desktop:flex desktop:items-center desktop:gap-x-5 hidden">
            <Item className="header-item">
                <span>Phim</span>
                <MdOutlineKeyboardArrowDown />
                <SubMenu className="submenu-list min-w-[650px] movie">
                    <Movies />
                </SubMenu>
            </Item>

            <Item className="header-item">
                Góc điện ảnh
                <MdOutlineKeyboardArrowDown />
                <SubMenu className="submenu-list">
                    <Link to="/" className="header-menu-item">
                        Thể loại phim
                    </Link>
                    <Link to="/" className="header-menu-item">
                        Diễn viên
                    </Link>
                    <Link to="/" className="header-menu-item">
                        Đạo diễn
                    </Link>
                    <Link to="/" className="header-menu-item">
                        Bình luận phim
                    </Link>
                    <Link to="/" className="header-menu-item">
                        Blog điện ảnh
                    </Link>
                </SubMenu>
            </Item>

            <Item className="header-item">
                Sự kiện
                <MdOutlineKeyboardArrowDown />
                <SubMenu className="submenu-list">
                    <Link to="/" className="header-menu-item">
                        Ưu đãi
                    </Link>
                    <Link to="/" className="header-menu-item">
                        Phim hay tháng
                    </Link>
                </SubMenu>
            </Item>

            <Item className="header-item">
                Rạp/Giá vé
                <MdOutlineKeyboardArrowDown />
                <SubMenu className="submenu-list">
                    <div className="h-[400px] overflow-y-auto">
                        {DataSystem.map((item, index) => {
                            return (
                                <Link key={index} to="/" className="header-menu-item">
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </SubMenu>
            </Item>
        </ul>
    );
};

export default Navigation;
