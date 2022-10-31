import styled from 'styled-components';
import { StyledLink } from '../common/StyledLink';

const LoginFormOtherDiv = styled.div`
    margin: 20px 0; 
`;

const LoginSignUpNow = styled.div`
    color: #737373;
    font-size: 16px;
    font-weight: 400;
    margin-top: 16px;
`;

const ReacaptchaDiv = styled.div`
    color: #8c8c8c;
    font-size: 13px;
    margin-top: 20px;
    position: relative;
    text-align: left;
`;

const LoginFormOther = () => {
    return(
        <LoginFormOtherDiv>
            <LoginSignUpNow>
                Netflix 회원이 아닌가요?
                <StyledLink to="#" style={{ color: "#fff" }}>
                    <span style={{ paddingLeft: "9px" }}>지금 가입하세요.</span>
                </StyledLink>
            </LoginSignUpNow>
            <ReacaptchaDiv>
                <p><span>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</span></p>
            </ReacaptchaDiv>
        </LoginFormOtherDiv>
    )
}

export default LoginFormOther;