import styled from 'styled-components';

export const CardSectionDiv = styled.div`
    text-align: center;
    height: 100%;
    padding: 70px 30px;
    background-color: black;
    color: white;
    border-bottom: 8px solid #222;

    &>div {
        display: flex;
        flex-basis: 50%;
        align-items: center;
        justify-content: space-evenly;
        margin: 0 auto;
        max-width: 1100px;
    }

    @media only screen and (max-width: 950px) {
        &>div {
            display: block;
        }
    }
`;

export const SectionTitleDiv = styled.div`
    max-width: 540px;
    min-width: 400px;
    width: 40%;
    color: white;

    & h1 {
        width: 100%;
        font-size: 3rem;
        margin: 0 0 8px 0;
        text-align: left;
        font-weight: 500;
    }

    & h2 {
        font-size: 1.5rem;
        font-weight: 500;
        text-align: left;
        width: 100%;
        margin: 0.75rem 0 0.25rem 0;
    }

    @media only screen and (max-width: 950px) {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        padding: 0;

        & h1 {
            margin: 0 auto;
            text-align: center;
            font-size: 2.8rem;
        }

        & h2 {
            margin: 0 auto;
            text-align: center;
            font-size: 1.3rem;
        }
    }

`;


export const ImgVideoWrapper = styled.div`
    height: 70%;
    max-width: 550px;

    @media only screen and (max-width: 950px) {
        width: 100%;
        max-width: 750px;
    }
`;

export const ImgContainer = styled.div`
    margin: 0 0 -30%;
    height: 100%;
    position: relative;
    z-index: 3;

    img {
        border: 0;
        margin: 0 auto;
        width: 96%;
    }

    @media only screen and (max-width: 950px) {
        img {
            width: 80%;
        }
    }
`;

export const VideoContainer = styled.div`
    height: 100%;
    left: -3px;
    transform: translate(0%, -70%);
    position: relative;

    video {
        height: 85%;
        width: 70%;
        position: relative;
        margin: 0
    }

    @media only screen and (max-width: 950px) {
        video {
            width: 59%;
            height: 83%;
            transform: translate(0%, 17%);
        }
    }
`;

export const SecondCardSectionDiv = styled(CardSectionDiv)`
    @media only screen and (max-width: 950px) {
        &>div {
            display: flex;
            flex-direction: column-reverse;
        }
    }
`