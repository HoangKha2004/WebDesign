import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { DataMovie } from '../../../../components/Header/SubMenu/Movies/DataMovie';
import buyTicket from '/images/buyTicket.svg';
import star from '/images/star.svg';
import trailerIcon from '/images/trailer.svg';

const ContenContainer = styled.div`
    .header-movie-img:hover .btn {
        display: flex;
        animation: fadeIn linear 0.3s;
    }
    .bcg {
        position: absolute;
        bottom: 40px;
        right: 0;
        border-top: 15px solid rgba(0, 0, 0, 0.5);
        border-right: 85px solid rgba(0, 0, 0, 0.5);
        border-bottom: 15px solid rgba(0, 0, 0, 0.5);
        border-left: 10px solid transparent;
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
const Movie = () => {
    return (
        <ContenContainer>
            {DataMovie.map((movie, index) => {
                return (
                    <div key={movie.id}>
                        <div className="grid tabletMini:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-8 gap-8">
                            {movie.list.map((item, index) => {
                                return (
                                    <Link to="/" key={item.id} className="flex flex-col gap-2">
                                        <div className="relative">
                                            <div className="header-movie-img">
                                                <div className="movie-img rounded">
                                                    <img src={item.image} className="rounded img" />
                                                    <div className="bcg"></div>
                                                    <div className="flex absolute bottom-10 right-0 items-center gap-5  pl-7">
                                                        <img src={star} className="w-[15px]" />
                                                        <span className="text-white text-xl font-bold pr-2">
                                                            {item.rate}
                                                        </span>
                                                    </div>
                                                    <div className="text-white absolute right-0 bottom-2 bg-orange-500 text-center px-1 mr-2 rounded-md text-base font-bold">
                                                        {item.age}
                                                    </div>
                                                </div>

                                                <div className="btn hidden flex-col gap-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                                    <div className="flex items-center gap-[1px] bg-[#f26b38]  justify-between px-3 text-white rounded-md hover:bg-orange-400 transition-all ease-in-out duration-300">
                                                        <img src={buyTicket} className="w-[19px]" />
                                                        <span className="whitespace-nowrap inline-block px-4 py-2 normal-case">
                                                            Mua vé
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-[1px] bg-transparent px-3 text-white rounded-md border hover:bg-orange-400 hover:border-orange-400 transition-all ease-in-out duration-300">
                                                        <img src={trailerIcon} className="w-[15px]" />
                                                        <span className="whitespace-nowrap inline-block px-4 py-2 normal-case">
                                                            Trailer
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-[16px] font-bold ml-1 whitespace-nowrap">{item.name}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </ContenContainer>
    );
};

export default Movie;
