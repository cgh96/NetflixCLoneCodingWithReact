import styled from 'styled-components';
import MovieImageContainer from '../../container/MainContainer/MovieImageContainer';

const Div = styled.div`
    position: relative;
    padding-top: 80px;
    margin: 0 0 2vw;
    min-width: 100%;
    min-height: ${props => props.level * 18}vw;

    @media only screen and (max-width:950px) {
        padding-top: 60px;
    }
`;

const TitleDiv = styled.div`
    font-size: 2vw;
    line-height: 2vw;
    color: white;
    margin: 0 3.5vw;

    @media only screen and (min-width:950px) {
        font-size: 30px;
    }
`;

const RowContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 3vw 1.7vw 0;
    min-width: 100%;
`;

const Favorite = ({ favorite }) => {

    return (
        <Div level={Math.ceil(favorite.length / 6)}>
            <TitleDiv>내가 찜한 컨텐츠</TitleDiv>
                <RowContainer >
                    { favorite &&
                        favorite.map( (movie, index) => {
                            return (
                                <>
                                    <MovieImageContainer
                                        key={movie.title}  
                                        index={ (index + 1) % 6 === 0 ? 6 : (index + 1) % 6 } 
                                        movie={movie}  
                                   />
                                    <div style={{ margin: "0", width: "0.1vw", height: "10vw" }} ></div>
                                </>
                            )
                        })
                    }
                </RowContainer>
        </Div>
    );
}

export default Favorite;