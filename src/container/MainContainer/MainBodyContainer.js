import MainBody from '../../components/Main/MainBody';
import { useEffect } from 'react';

const MainBodyContainer = () => {

    useEffect( () => {
        document.body.style.overflowX = "hidden";
    },[]);
    
    return (
        <MainBody />
    );
}

export default MainBodyContainer;