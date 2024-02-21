import React from 'react';
import backGround from '/images/background.svg';
import frameIphone from '/images/frameIphone.svg';
import qrCode from '/images/qrCode.svg';
import appStore from '/images/appStore.svg';
import ggPlay from '/images/ggPlay.svg';
import PhoneSlide from './PhoneSlide/PhoneSlide';

const QRApp = () => {
    return (
        <div className="relative hidden tablet:block">
            <img src={backGround} className="h-[400px] desktop:h-[500px] object-cover" />
            <div className="container">
                <div className="absolute top-[50%] translate-y-[-50%] grid grid-cols-2 px-32 z-20">
                    <div className="relative desktop:w-[200px] desktop:h-[408px] w-[180px] h-[350px]">
                        <img src={frameIphone} className="absolute h-full top-0 z-10" />
                        <PhoneSlide></PhoneSlide>
                    </div>
                    <div className="flex flex-col justify-center gap-4 text-white">
                        <h4 className="text-2xl capitalize">Đặt vé online - không lo trễ nải</h4>
                        <p className="text-sm">
                            Ghét đông đúc ồn ào? Lười xếp hàng mua vé? Hãy quên đi cách mua vé giấy truyền thống tốn
                            thời gian hay xếp hàng lấy vé online phiền toái.
                        </p>
                        <div className="flex items-end gap-3">
                            <img className="w-36" src={qrCode} />
                            <span className="uppercase">or</span>
                            <a href="#">
                                <img className="cursor-pointer" src={appStore} />
                            </a>
                            <a href="#">
                                <img className="cursor-pointer" src={ggPlay} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QRApp;
