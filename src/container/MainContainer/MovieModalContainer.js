import MovieModal from '../../components/Main/MovieModal';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import newContent from '../../MovieData/newContents.json';
import hotContent from '../../MovieData/hotContents.json';
import koreaDrama from '../../MovieData/koreaDrama.json';

const MovieModalContainer = () => {
    const [params, setParams] = useSearchParams();
    const [data, setData] = useState();

    const closeModal = (e) => {
        if(e.target === e.currentTarget) {
            setParams("");
        }
    }

    useEffect( () => {
        if(!params.get("id")) { setData(null); }
        else {
            if(params.get("id").includes("hot")) {
                setData( hotContent.find(elem => elem.id === params.get("id")) );
            }
            if(params.get("id").includes("new")) {
                setData( newContent.find(elem => elem.id === params.get("id")) );
            }
            if(params.get("id").includes("korea")) {
                setData( koreaDrama.find(elem => elem.id === params.get("id")) );
            }
        }

    }, [params]);


    return (
        <MovieModal data={data} closeModal={closeModal}  />
    )
}

export default MovieModalContainer;