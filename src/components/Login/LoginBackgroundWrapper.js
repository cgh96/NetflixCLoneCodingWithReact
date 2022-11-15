import styled from 'styled-components';

const LoginBackgroundDiv = styled.div`
    opacity: .5;
    display:none;

    @media screen and (min-width: 740px) {
        display: inline-block;
        overflow: hidden;
        min-height: 100vh;
        position: absolute;
        width: 100%;
        z-index: -1;    
    }
`;

const StyledImg = styled.img`
    border: 0;

    @media screen and (min-width: 740px) {
        height: 100vh;
        width: 100%;
    }
`;

const LoginBackgroundWrapper = () => {
    return (
        <LoginBackgroundDiv>
            <StyledImg 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/296a32a7-870c-4ebe-a49c-0f4223eff344/KR-ko-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
                srcset="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/296a32a7-870c-4ebe-a49c-0f4223eff344/KR-ko-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, 
                        https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/296a32a7-870c-4ebe-a49c-0f4223eff344/KR-ko-20221017-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, 
                        https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/296a32a7-870c-4ebe-a49c-0f4223eff344/KR-ko-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" 
                alt=""
            />
            
        </LoginBackgroundDiv>
    );
};

export default LoginBackgroundWrapper;