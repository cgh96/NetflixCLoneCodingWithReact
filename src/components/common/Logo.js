import styled from 'styled-components';
import logo from '../../assets/logo.png';

const MainLogoImg = styled.img`
    width: 10vw;
    max-width: 130px;
`;

const LandingLogoImg = styled.img`
    margin: -36px 9rem 0 0;
    width: 13rem;
`;


const Logo = ({width, type}) => {
    return (
        <>
            { type === "main" &&  <MainLogoImg width={width} src={logo} alt="netflix logo" /> }
            { type === "landing" && <LandingLogoImg width={width} src={logo} alt="netflix logo" /> }   
        </>
    )
};

export default Logo;