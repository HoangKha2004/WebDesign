import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgSearch } from 'react-icons/cg';
import { RiMenu3Fill } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import styled from 'styled-components';

import logo from '/images/galaxy.webp';
import iconLogin from '/images/iconLogin.svg';
import logoBuyTicket from '/images/buy.webp';
import logoGStart from '/images/gStart.svg';
import Navigation from './Navigation';
import GStar from './SubMenu/GStar/GStar';

const HeaderContainer = styled.div`
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    & .menuGStar {
        display: none;
    }
    & .gstar:hover .menuGStar {
        display: block;
        animation: fadeIn 0.1s linear;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Header = () => {
    const [isOpenForm, setIsOpenForm] = useState(false);
    const [isOpenSeacrh, setIsOpenSearch] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const modalRef = useRef(null);
    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setIsOpenSearch(false);
                setIsFocus(false);
                // setIsOpenForm(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutSide);
        return () => {
            document.removeEventListener('mousedown', handleClickOutSide);
        };
    }, []);

    return (
        <HeaderContainer className="desktop:py-[40px] tablet:py-3 py-5">
            <div className="container flex justify-between px-5">
                {/* Logo */}
                <div className="flex items-center tabletMini:gap-x-10 gap-x-5">
                    <Link to="/">
                        <img src={logo} className="tablet:h-[60px] h-10 object-contain" />
                    </Link>
                    <img src={logoBuyTicket} className="tablet:h-9 object-contain desktop:hidden h-7" />
                </div>

                <div className="flex items-center gap-x-10 cursor-pointer">
                    <Link to="booking">
                        <img src={logoBuyTicket} className="desktop:h-[35px] desktop:block hidden" />
                    </Link>
                    {/* Header-Menu */}
                    <Navigation />
                </div>

                <div className=" flex items-center desktop:gap-4 gap-5 text-[#858484]">
                    <div
                        onClick={() => setIsOpenSearch(true)}
                        className="relative cursor-pointer text-lg desktop:block hidden"
                        title="Tìm kiếm"
                    >
                        <CgSearch />
                        {isOpenSeacrh && (
                            <div
                                ref={modalRef}
                                className={`absolute top-[35px] translate-x-[-90px] ${
                                    isFocus ? 'translate-x-[-215px]' : ''
                                } transition-all ease-linear duration-500  formLogin`}
                                onClick={() => setIsOpenSearch(false)}
                            >
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm..."
                                    className={`outline-none border-none shadow-shadowSearch rounded pl-2 py-2 text-sm font-medium ${
                                        isFocus ? 'w-[400px]' : 'w-[220px]'
                                    } transition-all ease-linear duration-500`}
                                    spellCheck={false}
                                    onFocus={() => setIsFocus(true)}
                                />
                            </div>
                        )}
                    </div>

                    <div
                        onClick={() => setIsOpenForm(true)}
                        className="text-sm  opacity-80 cursor-pointer hover:text-hover transition-all ease-in-out duration-200 flex  gap-x-2"
                    >
                        <FaRegUser className="text-sm desktop:hidden" />
                        Đăng nhập
                    </div>

                    {/* Form login */}
                    {isOpenForm && (
                        <div className="form-login fixed left-0 right-0 top-0 bottom-0 bg-overlay z-50 flex justify-center items-center">
                            <div
                                ref={modalRef}
                                className="bg-white px-6 py-9 rounded min-w-[400px] flex flex-col gap-3 relative"
                            >
                                <div
                                    onClick={() => setIsOpenForm(false)}
                                    className="absolute cursor-pointer hover:text-gray-600 top-4 right-3 bg-gray-200 text-gray-500 text-sm p-1 rounded-full"
                                >
                                    <FaXmark />
                                </div>
                                <img src={iconLogin} className="w-[180px] object-contain mx-auto" />
                                <h4 className="capitalize text-lg font-bold text-black opacity-80 text-center">
                                    Đăng nhập tài khoản
                                </h4>
                                <form className="flex flex-col gap-3">
                                    <div className="input-form">
                                        <label htmlFor="email" className="text-xs font-medium">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Nhập Email"
                                            required
                                            spellCheck={false}
                                        />
                                    </div>
                                    <div className="input-form">
                                        <label htmlFor="password" className="text-xs font-medium" required>
                                            Mật khẩu
                                        </label>
                                        <div className="relative">
                                            <input type="password" name="password" placeholder="Nhập Mật Khẩu" />
                                            <FaEyeSlash className="absolute top-[50%] translate-y-[-50%] right-3" />
                                            <FaEye className="hidden absolute top-[50%] translate-y-[-50%] right-3" />
                                        </div>
                                    </div>
                                    <input
                                        type="submit"
                                        value="Đăng nhập"
                                        className="bg-orange-500 text-white rounded uppercase text-sm font-medium p-[10px] mt-5 cursor-pointer hover:bg-orange-400"
                                    />
                                    <Link className="text-sm">Quên mật khẩu?</Link>
                                </form>
                                <hr />
                                <div className="flex flex-col gap-1 mt-5 items-center">
                                    <p className="text-sm font-semibold">Bạn chưa có tài khoản?</p>
                                    <input
                                        type="submit"
                                        className="bg-transparent border border-orange-500 w-full text-orange-500 text-sm p-2 rounded cursor-pointer hover:text-white hover:bg-yellow-500 hover:border-transparent transition-colors ease-linear duration-200"
                                        value="Đăng ký"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Logo GStar */}
                    <div className="gstar desktop:block hidden relative after:absolute after:h-[15px] after:top-[100%] after:w-full">
                        <img src={logoGStart} className="h-[38px] cursor-pointer" />
                        <span className="menuGStar">
                            <GStar />
                        </span>
                    </div>
                    <div className="desktop:hidden text-xl opacity-80">
                        <RiMenu3Fill />
                    </div>
                </div>
            </div>
        </HeaderContainer>
    );
};

export default Header;
