import MainHeaderContainer from "../container/MainContainer/MainHeaderContainer";
import MainBodyContainer from "../container/MainContainer/MainBodyContainer";
import MainFooterContainer from '../container/MainContainer/MainFooterContainer';
import MainIndexDiv from "../components/Main/MainIndexDiv";

const MainPage = () => {
    return (
        <MainIndexDiv>
            <MainHeaderContainer />
            <MainBodyContainer />
            <MainFooterContainer />
        </MainIndexDiv>
    );
};

export default MainPage;