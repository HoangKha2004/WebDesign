import React from 'react';
import Slide from './Slide/Slide';
import BuyTicket from './Slide/BuyTicket/BuyTicket';
import Content from './Content/Content';
const Home = () => {
    return (
        <>
            <div className="relative">
                <Slide></Slide>
                <BuyTicket></BuyTicket>
            </div>
            <Content></Content>
        </>
    );
};

export default Home;
