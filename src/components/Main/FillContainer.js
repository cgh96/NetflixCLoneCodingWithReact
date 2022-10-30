import styled from 'styled-components';
import { StyledLink } from '../common/StyledLink';

const StyledDiv = styled.div`
    position: absolute;
    top: 0;
    left: 3.3vw;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
`;

const InfoLogoWithPlayerDiv = styled.div`
    position: relative;
    top: 7.5vw;
    width: 70%;
    display: flex;
    flex-direction: column;

    & img {
        width: 60%;
        height: 15.2vw;
    }
`;

const InfoTextDiv = styled.div`
    margin: 1.6vw 0 0 5px;
    color: white;
    letter-spacing: 1px !important;
    width: 35vw;
    font-size: 1.2vw;
    line-height: 1.6vw;
`;

const InfoPlayerButtonDiv = styled.div`
    display: flex;
    align-items: baseline;
`;

const PlayButton = styled.button`
    margin: 1.1em 1vw 0.864em;
    border-radius: 4px 4px;
    border: 1px solid white;
    padding: 0.28em 1.6em;
    display: flex;
    max-width: 300px;
    width: 12vw;
    height: 4vw;;
    text-decoration: none;
    align-items:center;
    justify-content: center;
    font-size: 1.3vw;

    &:hover {
        background-color: #bebebeab;
        cursor: pointer;
    }
`;

const DetailInfoButton = styled.button`
    margin: 1.1em 1vw 0.864em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6D6D6EB8;
    color: white;
    border-radius: 4px 4px;
    border: 1px solid #6D6D6EB8;
    padding: 0.28em 1.6em;
    max-width: 600px;
    width: 14vw;
    height: 4vw;
    font-size: 1.3vw;

    &:hover {
        background-color: #9696976c;
        cursor: pointer;
    }
`;

const BlackArrowDiv = styled.div`
    width: 2em;
    position: relative;
    top: 1px;
`;

const FillContainer = () => {
    return(
        <StyledDiv>
            <InfoLogoWithPlayerDiv>
                <img alt="thumnail-title-logo" src="https://occ-0-3996-993.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSJqFOk5K3UoKRWmxBlnIy43QrxQyZhObsDtOzd25_mr_Wvnd51jhu6XZrnRsdWsowd9KdwlsQ9ifFokyiU4CJFAa39GBwZf5yUgi9Aq2BNU.webp?r=68e" />
                <InfoTextDiv>
                    부티 좔좔 흐르는 전문 킬러. 목욕탕에서 머리를 박고 기억이 백지화되면서 영화 엑스트라 알바를 뛰던 알거지와 인생이 뒤바뀐다.
                    죽으란 법 없다고 이 와중에 천직 발견?
                </InfoTextDiv>
                <InfoPlayerButtonDiv>
                    <PlayButton>
                        <BlackArrowDiv>
                            <svg width="2.1em" height="2.1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor">
                                </path>
                            </svg>
                        </BlackArrowDiv>
                        <div style={{ width: "10px", content: "" }}></div>
                        <span style={{ position: "relative", top: "-2px" }}>재생</span>
                    </PlayButton>
                    <DetailInfoButton>
                        <div>
                            <svg width="2.1em" height="2.1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor">                                    
                                </path>
                            </svg>
                        </div>
                        <div style={{ width: "10px", content: "" }}></div>
                        <span style={{ position: "relative", top: "-2px" }} >상세 정보</span>
                    </DetailInfoButton>
                </InfoPlayerButtonDiv>
            </InfoLogoWithPlayerDiv>
        </StyledDiv>
    )
}

export default FillContainer;