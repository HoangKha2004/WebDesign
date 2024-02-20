import React from 'react';
import PromotioSlide from './PromotioSlide';

const Promotion = () => {
    return (
        <div className="py-14 px-5 container tablet:max-w-screen-tablet tablet:mx-auto tabletMini:max-w-screen-tabletMini tabletMini:mx-auto">
            <div className="tabletMini:flex items-center hidden gap-x-10  mb-9">
                <h3 className="font-bold uppercase text-[20px] relative after:absolute after:h-[80%] after:w-1 after:top-[50%] after:translate-y-[-50%] after:left-[-10px] after:bg-blue-800">
                    Tin khuyến mãi
                </h3>
            </div>
            <PromotioSlide></PromotioSlide>
        </div>
    );
};

export default Promotion;
