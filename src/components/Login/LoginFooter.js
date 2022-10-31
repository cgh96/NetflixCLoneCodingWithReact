import styled from 'styled-components';
import FooterWrapper from '../common/FooterWrapper';
import { StyledLink } from '../common/StyledLink';
import LangSelector from '../common/LangSelect';

const FooterBorder = styled.div`
    width: 100vw;
    border: 1px solid white;
    margin: 30px 0;
    
    @media screen and (min-width: 740px) {
        height: 0;
        border: 0;
    }
`;

const LoginFooterDiv = styled(FooterWrapper)`
    position: relative;
    z-index: 1000;

    & p {
        margin: 40px 0;
        font-size: 20px;
    }
`;

const LoginFooter = () => {
    return (
        <LoginFooterDiv>
            <FooterBorder />
             <p>
                "질문이 있으신가요?" 문의 전화:
                <StyledLink to="#" style={{ marginLeft: "10px" }}>080-001-9587</StyledLink>
            </p>
            <ul>
                <li>
                    <span>자주 묻는 질문</span>  
                </li>
                <li> 
                    <span>고객 센터</span>
                </li>
                <li>
                    <span>이용 약관</span>    
                </li>
                <li>    
                    <span>개인정보</span>    
                </li>
                <li>
                    <span>쿠키 설정</span>    
                </li>
                <li>    
                    <span>회사 정보</span>    
                </li>
            </ul>
            <LangSelector type="land-footer" />
            <div>
                <div>
                    넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587
                </div>
                <div>
                    대표: 레지널드 숀 톰프슨
                </div>
                <div>
                    이메일 주소: korea@netflix.com
                </div>
                <div>
                    주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161
                </div>
                <div>
                    사업자등록번호: 165-87-00119
                </div>
                <div>
                    클라우드 호스팅: Amazon Web Services Inc.
                </div>
                <div>
                        공정거래위원회 웹사이트
                </div>
            </div>
        </LoginFooterDiv>
    );
}

export default LoginFooter;