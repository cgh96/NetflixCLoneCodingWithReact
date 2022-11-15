import MainHeaderContainer from "../container/MainContainer/MainHeaderContainer";
import MainFooterContainer from '../container/MainContainer/MainFooterContainer';
import MainIndex from "../components/Main/MainIndex";
import MovieModalContainer from '../container/MainContainer/MovieModalContainer';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';


const MainLayoutPage = () => {
    return(
        <>
            <Helmet><title>홈 - 넷플릭스</title></Helmet>
            <MainIndex>
                <MainHeaderContainer />
                <Outlet />
                <MainFooterContainer />
            </MainIndex>
            <MovieModalContainer />
        </>
    )
}

export default MainLayoutPage;