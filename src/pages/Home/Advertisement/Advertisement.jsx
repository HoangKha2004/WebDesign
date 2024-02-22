import React from 'react';
import { FaXmark } from 'react-icons/fa6';
import { useEffect, useRef, useState } from 'react';
import image from '/images/advertisement.jpg';
const Advertisement = () => {
    const modalRef = useRef(null);
    const [isOpenQC, setIsOpenQC] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsOpenQC(true);
        }, 1000);
    }, []);

    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setIsOpenQC(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutSide);
        return () => {
            document.removeEventListener('mousedown', handleClickOutSide);
        };
    }, []);

    return (
        isOpenQC && (
            <div className="form-login fixed w-full top-0 bottom-0 bg-overlay z-50 flex justify-center items-center">
                <a href="/" className="relative" onClick={() => setIsOpenQC(false)}>
                    <img src={image} ref={modalRef} className=" rounded w-[60vh] h-[85vh] " />
                    <div
                        onClick={() => setIsOpenQC(false)}
                        className="absolute cursor-pointer hover:text-gray-500 top-3 right-2 bg-gray-200 text-gray-400 text-sm p-1 rounded-full"
                    >
                        <FaXmark />
                    </div>
                </a>
            </div>
        )
    );
};

export default Advertisement;
