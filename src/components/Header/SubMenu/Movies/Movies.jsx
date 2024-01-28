import React from 'react';
import { DataMovie } from './DataMovie';
import buyTicket from '../../../../../public/images/buyTicket.svg';
import star from '../../../../../public/images/star.svg';
import { Link } from 'react-router-dom';

const Movies = () => {
    return (
        <div className="max-w-[800px] px-6 py-5 h-[85vh] overflow-y-auto">
            {DataMovie.map((movie, index) => {
                return (
                    <div key={movie.id} className="mb-9">
                        <Link to={movie.path}>
                            <h3 className="h-[20px] flex items-center gap-x-2 hover:text-hover">
                                <span className="inline-block w-1 h-full bg-[#2968B0]"></span>
                                {movie.title}
                                <span className="flex-1 h-[1px] w-full bg-black opacity-20"></span>
                            </h3>
                        </Link>

                        {/* Movie List */}
                        <div className="flex gap-4 mt-4">
                            {movie.list.map((item, index) => {
                                return (
                                    <Link to="/" key={item.id} className="flex flex-col gap-2">
                                        <div className="relative">
                                            <div className="header-movie-img">
                                                <div className="movie-img rounded ">
                                                    <img src={item.image} className="rounded" />
                                                    <div className="absolute flex flex-col gap-2 bottom-8 right-0">
                                                        <div className="flex items-center gap-5 bg-overlay pl-7">
                                                            <img src={star} className="w-[15px]" />
                                                            <span className="text-white text-base font-bold pr-2">
                                                                {item.rate}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="text-white absolute right-0 bottom-2 bg-orange-500 text-center px-1 mr-2 rounded-md text-xs font-bold">
                                                        {item.age}
                                                    </div>
                                                </div>

                                                <div className="buy-ticket hidden items-center gap-[1px] bg-orange-600 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] justify-between px-3 text-white rounded-md hover:bg-orange-400">
                                                    <img src={buyTicket} className="w-[19px]" />
                                                    <span className="whitespace-nowrap inline-block px-4 py-2 normal-case">
                                                        Mua vé
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-sm font-semibold">{item.name}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Movies;
