import React from 'react';
import MovieContent from './MovieContent/MovieContent';
import Review from './Review/Review';
import styled from 'styled-components';
import Promotion from './Promotion/Promotion';
import QRApp from './QRApp/QRApp';
import Introduce from './Introduce/Introduce';
const Content = () => {
    return (
        <div>
            <MovieContent></MovieContent>
            <Review></Review>
            <Promotion></Promotion>
            <QRApp></QRApp>
            <Introduce></Introduce>
        </div>
    );
};

export default Content;
