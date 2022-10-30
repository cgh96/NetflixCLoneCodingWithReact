import styled from 'styled-components';


const MovieImgDiv = styled.div`
    width: 100%;
    padding: 0.2vw;

    & img {
        width: 15.3vw;
        border-radius: 3px 3px;
    }
`;

const MovieImg = ({src}) => {
    return(
        <MovieImgDiv>
            <img src={src} alt="" />
        </MovieImgDiv>
    )
}

export default MovieImg;