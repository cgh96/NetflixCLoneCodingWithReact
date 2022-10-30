import LandingHeaderContainer from "../container/LandingContainer/LandingHeaderContainer";
import CardTextBoxContainer from "../container/LandingContainer/CardTextBoxContainer";
import CardSectionContainer from "../container/LandingContainer/CardSectionContainer";
import LandingFooterContainer from '../container/LandingContainer/LandingFooterContainer';
import { IndexPointDiv, FirstBackground} from "../components/Landing/IndexPointDiv";

const LandingPage = () => {
    return (
        <IndexPointDiv>
            <FirstBackground>
                <LandingHeaderContainer />
                <CardTextBoxContainer />
            </FirstBackground>
            <CardSectionContainer />
            <LandingFooterContainer />
        </IndexPointDiv>
    );
};

export default LandingPage;