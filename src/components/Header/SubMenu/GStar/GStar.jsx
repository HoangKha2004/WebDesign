import React from 'react';
import styled, { css } from 'styled-components';
import rulesImage from '/images/rules.webp';
import benefitImage from '/images/iconLogin.svg';
import faqImage from '/images/faq.webp';
import bearImage from '/images/bear_glx.webp';

const Button = styled.div`
    font-size: 12px;
    color: white;
    font-weight: 700;
    background-color: #f97316;
    min-width: 90px;
    border-radius: 6px;
    transition: all 0.2s linear;
    text-align: center;
    padding: 5px 0;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
        background-color: #f99716;
    }
    ${(props) =>
        props.outline &&
        css`
            background-color: transparent;
            border: 1px solid #f99716;
            color: #f97316;

            &:hover {
                color: white;
            }
        `};
`;
const GStar = () => {
    return (
        <div className="absolute z-10 right-0 top-[140%] bg-white rounded shadow-shadowMenu px-6 py-4 min-w-32 flex justify-between gap-5">
            <div className="pt-6 flex flex-col items-center gap-4 min-w-[160px]">
                <img src={rulesImage} className="h-[80px] object-contain" />
                <h4 className="text-sm font-bold text-textColor">Thể Lệ</h4>
                <Button outline="true">Chi Tiết</Button>
            </div>
            <div className="pt-6 flex flex-col items-center gap-4 min-w-[160px]">
                <img src={benefitImage} className="h-[80px] object-contain" />
                <h4 className="text-sm font-bold text-textColor">Quyền Lợi</h4>
                <Button outline="true">Chi Tiết</Button>
            </div>
            <div className="pt-6 flex flex-col items-center gap-4 min-w-[160px]">
                <img src={faqImage} className="h-[80px] object-contain" />
                <h4 className="text-sm font-bold text-textColor">Hướng Dẫn</h4>
                <Button outline="true">Chi Tiết</Button>
            </div>
            <div className="pt-1 flex flex-col items-center gap-4 min-w-[160px]">
                <img src={bearImage} className="h-[80px] object-contain" />
                <h4 className="text-sm font-bold text-textColor">Đăng Ký Thành Viên G-Star Nhận Ngay Ưu Đãi!</h4>
                <Button>Đăng Ký</Button>
            </div>
        </div>
    );
};

export default GStar;
