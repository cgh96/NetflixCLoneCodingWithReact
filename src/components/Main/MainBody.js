import styled from 'styled-components';
import FillContainer from './FillContainer';
import MovieRowSection from './MovieRowSection';

const MainViewDiv = styled.div`
    background: linear-gradient(77deg, rgba(0,0,0,.6), transparent 85%);
    position: relative;
    margin-bottom: -5vw;
`;

const ImgWrapperDiv = styled.div`
    width: 100vw;
    object-fit: cover;  
`;


const MainBody = () => {
    
    return (
        <MainViewDiv>
            <ImgWrapperDiv>
                <img style={{ objectFit: "cover", width: "100%", position: "relative", zIndex: "-1" }} src="https://occ-0-3996-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdiAuZAlPBZ8oX9Iywn5B1vkmDIKSaoq8yi-OmEqm4s8L_3Lo3N4UaAceGMuk9zmmtQR19n4wqvx_bxdsWFMz_jJPWhmpu_fUr_P.webp?r=9e1" alt="main-thumbnail" />
            </ImgWrapperDiv>
            <FillContainer />
            <MovieRowSection title="새로 올라온 컨텐츠" type="new-content" />
            <MovieRowSection title="지금 뜨는 컨텐츠" type="hot-content"/>
            <MovieRowSection title="한국 드라마" type="korea-drama"/>
        </MainViewDiv>
    );
}

export default MainBody;