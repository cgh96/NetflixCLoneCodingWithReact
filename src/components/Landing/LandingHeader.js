import HeaderWrapper from "../common/HeaderWrapper";
import LangSelector from '../common/LangSelect';
import Logo from '../common/Logo';
import { StyledLink } from '../common/StyledLink.js';
import styled from 'styled-components';

const StyledLandingHeader = styled(HeaderWrapper)`
    justify-content: space-between;
    margin: 0 4%;
    padding: 25px 0 0;
    width: 95%;
`;

const OptionWrapperDiv = styled.div`
    display: flex;

    & button {
        cursor: pointer;
        border: 1px solid red;
        background-color: red;
        border-radius: 5px 5px;
        color: white;
        width: 100px;
        height: 38px;
        margin: 2px 10px 0 -20px;
    }

  
`;

const LandingHeader = () => {
    return (
        <StyledLandingHeader height={0} >
            <Logo type="landing" />
            <OptionWrapperDiv>
                <LangSelector type="land-header" />
                <button><StyledLink to="/login">로그인</StyledLink></button>
            </OptionWrapperDiv>
        </StyledLandingHeader>
    );
};

export default LandingHeader;