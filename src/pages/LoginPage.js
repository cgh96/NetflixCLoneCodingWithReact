import LoginHeader from "../components/Login/LoginHeader";
import LoginMainPage from "../components/Login/LoginMainPage";
import LoginBody from "../components/Login/LoginBody";
import LoginFooter from '../components/Login/LoginFooter';
import LoginBackgroundWrapper from "../components/Login/LoginBackgroundWrapper";
import { Helmet } from 'react-helmet-async';


const LoginPage = () => {
    return (
        <>  
            <Helmet><title>Netflix</title></Helmet>
            <LoginMainPage>
                <LoginBackgroundWrapper />
                <LoginHeader />
                <LoginBody />
                <LoginFooter />
            </LoginMainPage>
        </>
    )
}

export default LoginPage;