import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <div className="content">{children}</div>
            <Footer></Footer>
        </div>
    );
};

export default DefaultLayout;
