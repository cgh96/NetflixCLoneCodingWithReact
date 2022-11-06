import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';

const ModalBackground = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    transition: .4s;
    overflow: auto;
`;

const ModalForm = styled.div`
    margin: 30px auto;
    background-color: #191919;
    border-radius: 9px;
    overflow: hidden;
    width: 60vw;
    max-width: 1200px;

    @media only screen and (max-width: 940px) {
        padding: auto 2vw;
        width: 98vw;
    }
`;

const MainImg = styled.img`
    width: 100%;
`;

const ImgBottomDiv = styled.div`
    width: 100%;
    height: 7vw;
    position: relative;
    background: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, .9));
    margin: -4.6vw 0 0;
`;

const ButtonContainer = styled.div`
    position: relative;
    z-index: 100;
    width: 100%;
    display: flex;
    margin: -6vw 2vw 1vw;
`;

const PlayButton = styled.button`
    background-color: #fff;
    border-radius: 3px;
    font-size: 1.3vw;
    width: 8vw;
    height: 2.5vw;
    border: 0;
    margin: 0 0.5vw 0 0;

    &:hover {
        background-color: #888;
        cursor: pointer;
    }
`;

const CircleButton = styled.button`
    border-radius: 100%;
    width: 2.5vw;
    height: 2.5vw;
    font-size: 1vw;
    color: white;
    background-color: rgba(0,0,0,.6);
    border: 2px solid #898989;
    padding-top: 0.2vw;
    margin: 0 0.2vw;

    &:hover {
        border: 2px solid white;
        cursor: pointer;
    }
`;

const ModalBodyDiv = styled.div`
    margin: 10px 5%;
`;

const MetaSectionZero = styled.div`
    display: flex;
`;

const MetaSectionOne = styled.div`
    display: flex;
    font-weight: 600;
    color: white;
    font-size: 16px;

    & span {
        margin: 0.2vw 0.4vw 0;
    }

    & span:nth-child(1) {
        color: #46d369;
        font-weight: 900;
    }

    & svg {
        fill: red;
        width: 22px;
        margin: 0 0.2vw;
    }
`;

const MetaSectionThree = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;

    & h1 {
        margin-top: 30px;
        color: white;
        font-size: 13px;
        font-weight: 300;
        line-height: 18px
    }
`;

const MetaSectionFour = styled.div`
    color: white;
    margin: auto 0 auto auto;
    padding: 1vw 0 0;
    display: flex;
    flex-wrap: wrap;
    width: 38%;
    font-size: 14px;
    align-items: flex-start;
    height: 2vw;

    & span {
        margin-left: 0.5vw;
    }

    & span:nth-child(1) {
        color: #777;
    }
`;

const EpisodeSelector = styled.div`
`;

const EpisodeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;

    & div {
        margin: auto 0;
        font-size: 18px;
    }
    
    & h3 {
        font-size: 24px;
        font-weight: 400;
    }
`;


const EpisodeItem = styled.div`
    border-radius: 8px;
    border-bottom: 1px solid #404040;
    display: flex;
    padding: 1vw; 

    & img {
        align-self: center;
        max-width: 220px;
        max-height: 120px;
        width: 13vw;
        height: 7vw;
        margin: 1vw 2vw;
        border-radius: 5px;
    }
`;

const EpisodeNum = styled.div`
    color: white;
    font-size: 2vw;
    margin: auto 0 auto 2vw;
`;

const EpisodeDetail = styled.div`
    color: white;
    flex-grow: 1;

    &>div {
        padding-right: 1vw;
    }

    &>div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        margin: 1.5vw 0;
    }

    &>div:nth-child(2) {
        font-size: 14px;
        width: 90%;
        margin-bottom: 1.5vw;
    }
`;
const MovieModal = ({ data, closeModal }) => {
    const [episode, setEpisode] = useState([]);
    let array = useRef([]);

    useEffect( () => {
        for(let i = 0; i < 6; i++) {
            array.current.push(`Sample-Episode-detail-${i + 1}`);
        }
        setEpisode([...episode, ...array.current]);
        return ( () => {
            array.current = []; //strict Mode 때문에 두번씩 렌더링 돼서 한 번 초기화.
        })
    }, []);

    return (
        <>
            {
                data && 
                <ModalBackground onClick={(e) => closeModal(e)} >
                    <ModalForm>
                        <MainImg src={data.src} />
                        <ButtonContainer>
                            <PlayButton>
                                <svg style={{ margin: "auto 0.2vw -0.4vw auto" }} width="2vw" height="2vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path></svg>
                                <span>재생</span>
                            </PlayButton>
                            <CircleButton>
                                <svg width="1.4vw" height="1.4vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path></svg>
                            </CircleButton>
                            <CircleButton>
                                <svg width="1.4vw" height="1.4vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="currentColor"></path></svg>
                            </CircleButton>
                        </ButtonContainer>
                        <ImgBottomDiv />
                        <ModalBodyDiv>
                            <MetaSectionZero>
                                <MetaSectionThree>
                                    <MetaSectionOne>
                                        <span>79% 일치</span>
                                        <span>2020</span>
                                        <svg id="maturity-rating-978" viewBox="0 0 100 100"><path id="FIll---Red" fill="#C52E37" d="M88.728 100H11.27C5.043 100 0 94.957 0 88.73V11.274C0 5.048 5.043 0 11.27 0h77.458C94.954 0 100 5.048 100 11.274V88.73c0 6.227-5.046 11.27-11.272 11.27"></path><path id="18" fill="#FFFFFE" d="M81.473 15.482c.846 0 1.534.687 1.534 1.533v22.099c0 2.036-.283 3.563-.852 4.581-.568 1.02-1.542 1.947-2.918 2.784l-4.581 2.431 4.58 2.156c.777.417 1.424.834 1.93 1.254.51.42.917.931 1.215 1.528.298.6.507 1.32.626 2.157.12.84.182 1.858.182 3.058v23.533c0 .846-.686 1.533-1.533 1.533H43.21a1.536 1.536 0 01-1.535-1.533V59.063c0-2.218.255-3.896.763-5.036.51-1.135 1.538-2.127 3.1-2.961l4.582-2.156-4.581-2.43c-1.376-.838-2.35-1.778-2.92-2.832-.565-1.046-.855-2.563-.855-4.534V17.015c0-.846.688-1.533 1.534-1.533zm-45.008 0V84.13H21.103V34.62h-5.485l7.104-19.136h13.743zm29.913 39.176h-7.89c-.845 0-1.534.686-1.534 1.532v13.737c0 .846.689 1.534 1.535 1.534h7.89c.846 0 1.534-.688 1.534-1.534V56.19c0-.846-.688-1.532-1.535-1.532zm0-26.548h-7.89c-.845 0-1.534.686-1.534 1.532v12.014c0 .846.689 1.533 1.535 1.533h7.89c.846 0 1.534-.687 1.534-1.533V29.642c0-.846-.688-1.532-1.535-1.532z"></path></svg>
                                        <span>시즌 3개</span>
                                    </MetaSectionOne>
                                    <h1>Sample Info - 똑똑하지만 소심한 소년, 수완 좋은 아웃사이더, 성 정체성을 당당히 드러낸 패셔니스타, 개방적인 엄마가 꾸며가는 기발하고 발칙한 드라마. 혈기 왕성한 청소년의 고민을 따스히 어루만진다.</h1>
                                </MetaSectionThree>
                                <MetaSectionFour>
                                    <span>시리즈 특징: </span>
                                    {
                                        data.feature.map( (elem,index) => {
                                            if(index < data.feature.length - 1) {
                                                return <span>{elem}, </span>
                                            }
                                            return <span>{elem}</span>
                                        })
                                    }
                                </MetaSectionFour>
                            </MetaSectionZero>
                            <EpisodeSelector>
                                <EpisodeHeader>
                                    <h3>회차</h3>
                                    <div>{data.title}</div>
                                </EpisodeHeader>
                                {
                                    episode &&
                                   episode.map( (elem, index) => {
                                        if(index === 0) {
                                            return (
                                                <EpisodeItem style={{ borderTop: "1px solid #404040" }}>
                                                    <EpisodeNum>{index + 1}</EpisodeNum>
                                                    <img src={data.src} alt="" />
                                                    <EpisodeDetail>
                                                        <div>
                                                            <span>{data.title}-{index + 1}</span>
                                                            <span>24분</span>
                                                        </div>
                                                        <div>{elem} 이든 칼리지 면접에서 아냐의 엄마 역할을 맡아줄 사람이 필요하다. 아내를 물색하던 로이드느 옷 가게에서 아름다운 여인과 마주치는데</div>
                                                    </EpisodeDetail>
                                                </EpisodeItem>
                                            )
                                        } else {
                                            return (
                                                <EpisodeItem>
                                                    <EpisodeNum>{index + 1}</EpisodeNum>
                                                    <img src={data.src} alt="" />
                                                    <EpisodeDetail>
                                                        <div>
                                                            <span>{data.title}-{index + 1}</span>
                                                            <span>24분</span>
                                                        </div>
                                                        <div>{elem} 이든 칼리지 면접에서 아냐의 엄마 역할을 맡아줄 사람이 필요하다. 아내를 물색하던 로이드느 옷 가게에서 아름다운 여인과 마주치는데</div>
                                                    </EpisodeDetail>
                                                </EpisodeItem>
                                            )
                                        }
                                        
                                    })
                                }
                            </EpisodeSelector>        
                        </ModalBodyDiv>
                    </ModalForm>
                </ModalBackground>
            }
        </>
    )
}

export default MovieModal;