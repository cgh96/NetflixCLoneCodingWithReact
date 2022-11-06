import styled from 'styled-components';

const DeviceImgContainer = styled.div`
    display: flex;
    justify-content:stretch;
    flex-grow: 1 2 1;
    position: relative;
    z-index: 50;
    width: 60%;
    height: 15%;
    background-color: black;
    border: 2px solid #222;
    border-radius: 15px;
    padding: 1%;
    margin: -8.8em auto 0;

    & img:nth-child(1) {
        width: 22%;
    }

    @media (max-width: 940px) { 
        margin: -7em auto 0;
        height: 70px;
        width: 55%;

        & img:nth-child(1) {
            width: 16%;
        }
    }
`;

const TextInDevice = styled.div`
    margin: 0;
    padding: 1.5em 1em 0.5em;
    width: 12em;
    text-align: left;

    & div:nth-child(1) {
        font-size: 16px;
    }

    & div:nth-child(2) {
        font-size: 12px;
        color: #0071EB;
    }

    @media (max-width: 940px) {
        width: 23.1em;
    }
`;

const LoadingImg = styled.div`
    background: url('https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif') 50% no-repeat;
    background-size: 100%;
    position: relative;
    z-index: 51;
    width: 50px;
`;

const CardSectionDiv = styled.div`
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

    @media only screen and (max-width: 940px) {
        &>div {
            display: block;
        }
    }
`;

const SectionTitleDiv = styled.div`
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

    @media only screen and (max-width: 940px) {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        padding: 0; //

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


const ImgVideoWrapper = styled.div`
    height: 70%;
    max-width: 550px;

    @media only screen and (max-width: 940px) {
        width: 100%;
        max-width: 750px;
    }
`;

const ImgContainer = styled.div`

    margin: 0 0 -30%;
    height: 100%;
    position: relative;
    z-index: 3;

    &>img {
        border: 0;
        width: 96%;
    }


    @media (max-width: 940px) {
        margin: 0 0 -30%;

        &>img {
            width: 80%;
        }
    }
`;

const SecondImgContainer = styled(ImgContainer)`
    margin: 0;
`;

const VideoContainer = styled.div`
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

    @media (max-width: 940px) {
        video {
            width: 59%;
            height: 83%;
            transform: translate(0%, 17%);
        }
    }
`;

const SecondCardSectionDiv = styled(CardSectionDiv)`
    @media (max-width: 940px) {
        &>div {
            display: flex;
            flex-direction: column-reverse;
        }
    }
`

const CardSection = () => {
    return(
        <div>
            <CardSectionDiv>
                <div>
                    <SectionTitleDiv>
                        <h1>TV로 즐기세요</h1>
                        <h2>스마트 TV, playstation, XBOX, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</h2>
                    </SectionTitleDiv>
                    <ImgVideoWrapper>
                        <ImgContainer>
                            <img alt="video-outline" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
                        </ImgContainer>
                        <VideoContainer>
                            <video autoPlay playsInline muted loop>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                            </video>
                        </VideoContainer>
                    </ImgVideoWrapper>
                </div>
            </CardSectionDiv>
            <SecondCardSectionDiv>
                <div>
                    <ImgVideoWrapper>
                        <SecondImgContainer>
                            <img alt="stranger-things-woman" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                        </SecondImgContainer>    
                            <DeviceImgContainer>
                                <img alt="black-box" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                                <TextInDevice>
                                    <div>기묘한 이야기</div>
                                    <div>저장 중...</div>
                                </TextInDevice>
                                <LoadingImg></LoadingImg>
                            </DeviceImgContainer>
                    </ImgVideoWrapper>
                    <SectionTitleDiv>
                        <h1>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.</h1>
                        <h2>간편하게 저장하고 빈틈없이 즐겨보세요.</h2>
                    </SectionTitleDiv>
                </div>
            </SecondCardSectionDiv>
        </div>
    );
}

export default CardSection;