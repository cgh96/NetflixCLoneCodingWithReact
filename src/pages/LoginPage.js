import LoginHeader from "../components/Login/LoginHeader";
import LoginMainPage from "../components/Login/LoginMainPage";
import LoginBody from "../components/Login/LoginBody";
import LoginFooter from '../components/Login/LoginFooter';
import LoginBackgroundWrapper from "../components/Login/LoginBackgroundWrapper";

const LoginPage = () => {
    return (
        <LoginMainPage>
            <LoginBackgroundWrapper />
            <LoginHeader />
            <LoginBody />
            <LoginFooter />
        </LoginMainPage>
    )
}

export default LoginPage;