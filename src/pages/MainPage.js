import MainHeaderContainer from "../container/MainContainer/MainHeaderContainer";
import MainBodyContainer from "../container/MainContainer/MainBodyContainer";
import MainIndexDiv from "../components/Main/MainIndexDiv";

const MainPage = () => {
    return (
        <MainIndexDiv>
            <MainHeaderContainer />
            <MainBodyContainer />
        </MainIndexDiv>
    );
};

export default MainPage;