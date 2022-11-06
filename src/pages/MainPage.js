import MainHeaderContainer from "../container/MainContainer/MainHeaderContainer";
import MainBodyContainer from "../container/MainContainer/MainBodyContainer";
import MainFooterContainer from '../container/MainContainer/MainFooterContainer';
import MainIndex from "../components/Main/MainIndex";
import MovieModalContainer from '../container/MainContainer/MovieModalContainer';

import { Helmet } from 'react-helmet-async';


const MainPage = () => {
    return (
        <>
            <Helmet><title>홈 - 넷플릭스</title></Helmet>
            <MainIndex>
                <MainHeaderContainer />
                <MainBodyContainer />
                <MainFooterContainer />
            </MainIndex>
            <MovieModalContainer />
        </>
    );
};

export default MainPage;