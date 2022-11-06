import styled from 'styled-components';

const FirstBackgroundDiv = styled.div`
    overflow: hidden;
    text-align: center;
    border-bottom: 8px solid #222;
    height: 689px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.859), rgba(0, 0, 0, 0.522), rgba(0, 0, 0, 0.938)),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/296a32a7-870c-4ebe-a49c-0f4223eff344/KR-ko-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`;

const FirstBackground = ({children}) => {
    return (
        <FirstBackgroundDiv>
            {children}
        </FirstBackgroundDiv>
    )
}

export default FirstBackground;