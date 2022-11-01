import MainHeaderContainer from "../container/MainContainer/MainHeaderContainer";
import MainBodyContainer from "../container/MainContainer/MainBodyContainer";
import MainFooterContainer from '../container/MainContainer/MainFooterContainer';
import MainIndexDiv from "../components/Main/MainIndexDiv";
import { Helmet } from 'react-helmet-async';

const MainPage = () => {
    return (
        <>
            <Helmet><title>홈 - 넷플릭스</title></Helmet>
            <MainIndexDiv>
                <MainHeaderContainer />
                <MainBodyContainer />
                <MainFooterContainer />
            </MainIndexDiv>
        </>
    );
};

export default MainPage;