import styled from 'styled-components';
import { 
    CardSectionDiv,
    SecondCardSectionDiv, 
    SectionTitleDiv, 
    ImgVideoWrapper, 
    ImgContainer, 
    VideoContainer 
} from './CardSectionStyle';

const DeviceImgContainer = styled.div`
    display: flex;
    justify-content:stretch;
    flex-grow: 1 2 1;
    position: relative;
    z-index: 50;
    width: 60%;
    height: 17%;
    background-color: black;
    border: 2px solid #222;
    border-radius: 15px;
    padding: 1%;
    margin: -8.9em auto 0;

    img {
        width: 21%;
        margin: 0;
    }

    @media only screen and (max-width: 950px) { 
        margin: -9em auto 0;
        height: 70px;
        width: 55%;

        img {
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

    @media only screen and (max-width: 950px) {
        width: 23em;
    }
`;

const LoadingImg = styled.div`
    background: url('https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif') 50% no-repeat;
    background-size: 100%;
    position: relative;
    z-index: 51;
    width: 50px;
`;

const CardSection = () => {
    return(
        <>
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
                        <ImgContainer style={{ margin: "0" }}>
                            <img alt="stranger-things-woman" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                            <DeviceImgContainer>
                                <img alt="black-box" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                                <TextInDevice>
                                    <div>기묘한 이야기</div>
                                    <div>저장 중...</div>
                                </TextInDevice>
                                <LoadingImg></LoadingImg>
                            </DeviceImgContainer>
                        </ImgContainer>
                    </ImgVideoWrapper>
                    <SectionTitleDiv>
                        <h1>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.</h1>
                        <h2>간편하게 저장하고 빈틈없이 즐겨보세요.</h2>
                    </SectionTitleDiv>
                </div>
            </SecondCardSectionDiv>
        </>
    );
}

export default CardSection;