import styled from 'styled-components';
import FillContainer from './FillContainer';
import MovieRowSection from './MovieRowSection';

const MainViewDiv = styled.div`
    background: linear-gradient(77deg, rgba(0,0,0,.6), transparent 85%);
    position: relative;
`;

const ImgWrapperDiv = styled.div`
    width: 100vw;
    object-fit: cover;

    & div {
        margin: 1.6vw 0 0 5px;
        color: white;
        letter-spacing: 1px !important;
        width: 35vw;
        font-size: 1.2vw;
        line-height: 1.6vw;
    }
`;

const MainBody = () => {
    
    return (
        <MainViewDiv>
            <ImgWrapperDiv>
                <img style={{ width: "100%", position: "relative", zIndex: "-1" }} src="https://occ-0-3996-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdiAuZAlPBZ8oX9Iywn5B1vkmDIKSaoq8yi-OmEqm4s8L_3Lo3N4UaAceGMuk9zmmtQR19n4wqvx_bxdsWFMz_jJPWhmpu_fUr_P.webp?r=9e1" alt="main-thumbnail" />
            </ImgWrapperDiv>
            <FillContainer />
            <MovieRowSection title="지금 뜨는 컨텐츠" type="popMovie" />
            <MovieRowSection title="최신순" type="latestMovie"/>
            <MovieRowSection title="상영 예정" type="upcomingMovie"/>
        </MainViewDiv>
    );
}

export default MainBody;