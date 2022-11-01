import LandingHeaderContainer from "../container/LandingContainer/LandingHeaderContainer";
import CardTextBoxContainer from "../container/LandingContainer/CardTextBoxContainer";
import CardSectionContainer from "../container/LandingContainer/CardSectionContainer";
import LandingFooter from '../components/Landing/LandingFooter';
import { IndexPointDiv, FirstBackground} from "../components/Landing/IndexPointDiv";
import { Helmet } from 'react-helmet-async';

const LandingPage = () => {
    return (
        <>
            <Helmet><title>넷플릭스 대한민국 - 인터넷으로 시리즈와 영화를 시청하세요.</title></Helmet>
            <IndexPointDiv>
                <FirstBackground>
                    <LandingHeaderContainer />
                    <CardTextBoxContainer />
                </FirstBackground>
                <CardSectionContainer />
                <LandingFooter />
            </IndexPointDiv>
        </>
    );
};

export default LandingPage;