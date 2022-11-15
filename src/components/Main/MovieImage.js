import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate, createSearchParams, useLocation } from 'react-router-dom';

const MovieImgDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: ${ props => { 
                if(props.hoverImg) {  
                        if(props.index === 1) { return "-9vw -6vw -7.7vw 0.2vw"; }
                        else if(props.index === 6) { return "-9vw 0.2vw -7.7vw -6vw"; }
                        else { return "-9vw -2.9vw -7.7vw"; }
                } else { return "0.2vw 0.2vw 1.5vw";} }
            };
    width: ${props => props.hoverImg ? "21.5vw" : "15.3vw" };
    height: ${props => props.hoverImg ? "auto" : "8.7vw" };
    min-height: 8.7vw;
    z-index: ${ props => props.hoverImg ? "110" : "100" };
    transition: .2s;
    transition-delay: ${props => props.hoverImg ? ".4s" : "none"};
    border-radius: 10px 7px;
    overflow: hidden;
    cursor: pointer;

    & img {
        width: 100%;
    }
`;

const ImgInfoDiv = styled.div`
    position: relative;
    display: ${ props => props.hoverImg ? "flex" : "none" };
    flex-direction: column;
    z-index: ${ props => props.hoverImg ? "1000" : "-10" };
    margin-top: ${ props => props.hoverImg ? "0" : "-23vw" };
    margin-bottom: ${ props => props.hoverImg ? "-23vw" : "0" };
    visibility: ${ props => props.hoverImg ? "visible" : "hidden" };
    transition: .4s;
    transition-delay: ${props => props.hoverImg ? ".4s" : "none"};
    background-color: #181818;
    width: 100%;
    height: ${props => props.hoverImg ? "auto" : "0"};
    border-bottom-left-radius: 10px 7px;
    border-bottom-right-radius: 10px 7px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    margin: 1vw;
`;

const Button = styled.button`
    border-radius: 100%;
    border: 2px solid white;
    width: 2.5vw;
    min-width: 20px;
    min-height: 20px;
    height: 2.5vw;
    cursor: pointer;
    margin: 3px;
    
`;

const OtherButton = styled(Button)`
    color: #fff;
    font-size: 1.5vw;
    padding: 0;
    background-color: #272727;

    &:hover {
        background-color: #474747;
    }
`;

const PlayButton = styled(Button)`
    color: black;
    background-color: #fff;
    padding: 0.1em 0;

    &:hover {
        background-color: #989898;
    }
`;

const FeatureDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 1vw 1vw;
`;

const TextBlock = styled.div`
    color: #fff;
    font-size: 1vw;
    margin: 0 5px 5px 0;

    &::after {
        content: '●';
        margin-left: 0.4vw;
        visibility: ${ props => (props.idx !== props.cnt) ? "visible" : "hidden" };
        font-size: 10px;
    }

    @media screen and (max-width: 1200px) {
        font-size: 10px;
        
        &::after {
            font-size: 7px;
        }
    }
`;

const MovieInfoDiv = styled.div`
    display: flex;
    font-weight: 600;
    color: white;
    margin: 0 1vw 1vw;

    & span {
        margin: 0.2vw 0.6vw 0 0;
        font-size: 1vw;
    }

    & span:nth-child(1) {
        color: #46d369;
        font-weight: 900;
    }

    & svg {
        fill: red;
        width: 1.4vw;
        margin: 0.1vw 0.4vw 0 0;
    }
`;

const MovieImg = ({ index = 0, movie, addFavorite, removeFavorite, favorite }) => {
    const [hoverImg, setHoverImg] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const params = { id: `${movie.id}` };

    const openModal = () => {
        navigate({
            pathname: `${location.pathname}`,
            search: `${createSearchParams(params)}`,
        })
    }

    const preventBubbling = e => {
        e.stopPropagation();

    }

    const mouseOver = () => {
        setHoverImg(true);
    }

    const mouseOut = () => {
        setHoverImg(false);
    }

    return(
        <MovieImgDiv
            index={index}
            className={index}
            hoverImg={hoverImg}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
            onTransitionEnd={preventBubbling}
        >
            <img 
                src={movie.src}
                alt="" 
            />
            <ImgInfoDiv  hoverImg={hoverImg}>
                <ButtonWrapper>
                    <PlayButton>
                        <svg width="1vw" height="1vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path></svg>
                    </PlayButton>
                    {
                        !favorite.includes(movie) ?
                        <OtherButton onClick={() => addFavorite(movie)}>+</OtherButton> :
                        <OtherButton onClick={() => removeFavorite(movie)}>
                            <svg width="1vw" height="1vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path></svg>
                        </OtherButton>
                    }
                    <OtherButton>
                        <svg width="1vw" height="1vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="currentColor"></path></svg>
                    </OtherButton>
                    <OtherButton style={{ marginLeft: "auto" }} onClick={openModal}>▽</OtherButton>
                </ButtonWrapper>
                <MovieInfoDiv>
                    <span>79% 일치</span>
                    <span>2020</span>
                    <svg id="maturity-rating-978" viewBox="0 0 100 100"><path id="FIll---Red" fill="#C52E37" d="M88.728 100H11.27C5.043 100 0 94.957 0 88.73V11.274C0 5.048 5.043 0 11.27 0h77.458C94.954 0 100 5.048 100 11.274V88.73c0 6.227-5.046 11.27-11.272 11.27"></path><path id="18" fill="#FFFFFE" d="M81.473 15.482c.846 0 1.534.687 1.534 1.533v22.099c0 2.036-.283 3.563-.852 4.581-.568 1.02-1.542 1.947-2.918 2.784l-4.581 2.431 4.58 2.156c.777.417 1.424.834 1.93 1.254.51.42.917.931 1.215 1.528.298.6.507 1.32.626 2.157.12.84.182 1.858.182 3.058v23.533c0 .846-.686 1.533-1.533 1.533H43.21a1.536 1.536 0 01-1.535-1.533V59.063c0-2.218.255-3.896.763-5.036.51-1.135 1.538-2.127 3.1-2.961l4.582-2.156-4.581-2.43c-1.376-.838-2.35-1.778-2.92-2.832-.565-1.046-.855-2.563-.855-4.534V17.015c0-.846.688-1.533 1.534-1.533zm-45.008 0V84.13H21.103V34.62h-5.485l7.104-19.136h13.743zm29.913 39.176h-7.89c-.845 0-1.534.686-1.534 1.532v13.737c0 .846.689 1.534 1.535 1.534h7.89c.846 0 1.534-.688 1.534-1.534V56.19c0-.846-.688-1.532-1.535-1.532zm0-26.548h-7.89c-.845 0-1.534.686-1.534 1.532v12.014c0 .846.689 1.533 1.535 1.533h7.89c.846 0 1.534-.687 1.534-1.533V29.642c0-.846-.688-1.532-1.535-1.532z"></path></svg>
                    <span>시즌 3개</span>
                </MovieInfoDiv>
                <FeatureDiv>
                    {   movie.feature && 
                        movie.feature.map( (elem, idx) => <TextBlock idx={idx} cnt={movie.feature.length - 1} >{elem}</TextBlock> )  
                    }
                </FeatureDiv>
            </ImgInfoDiv>
        </MovieImgDiv>
    )
}

export default MovieImg;