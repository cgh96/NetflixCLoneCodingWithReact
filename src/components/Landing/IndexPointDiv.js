import styled from 'styled-components';

export const IndexPointDiv = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: rgba(0,0,0,.192);

    * {
        font-size: 16px;
    }

    @media screen and (max-width: 940px){        
        * {
            margin: 0;
            font-size: 12px;
        }
    }
`;

export const FirstBackground = styled.div`
    overflow: hidden;
    text-align: center;
    border-bottom: 8px solid #222;
    height: 689px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.859), rgba(0, 0, 0, 0.522), rgba(0, 0, 0, 0.938)),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/296a32a7-870c-4ebe-a49c-0f4223eff344/KR-ko-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`;