import FooterWrapper from '../common/FooterWrapper';
import SocialLinksBox from './SocialLinksWrapper';
import { StyledLink } from '../common/StyledLink';
import styled from 'styled-components';

const ServiceCodeBtn = styled.button`
    font-size: 13px;
    margin-bottom: 20px;
    padding: 0.5em;
    background: transparent;
    border: 1px solid grey;
    color: grey;
    cursor: pointer;
    text-transform: none;
    text-align: left;
`;

const MemberFooterCopyright = styled.div`
    font-size: 11px;
    margin-bottom: 15px;
`;

const MainFooter = () => {
    return(
        <FooterWrapper>
            <SocialLinksBox />
            <ul>
                <li>화면 해설</li>
                <li>고객센터</li>
                <li>기프트카드</li>
                <li>미디어센터</li>
                <li>투자정보(IR)</li>
                <li>입사 정보</li>
                <li>이용 약관</li>
                <li>개인 정보</li>
                <li>법적 고지</li>
                <li>쿠키 설정</li>
                <li>회사 정보</li>
                <li>문의하기</li>
            </ul>
            <div>
                <ServiceCodeBtn>서비스 코드</ServiceCodeBtn>
            </div>
            <MemberFooterCopyright>
                <div>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제 2018-서울종로-0426호 전화번호: 080-001-9587</div>
                <div>대표: 레지널드 숀 톰프슨</div>
                <div>이메일 주소: korea@netflix.com</div>
                <div>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</div>
                <div>사업자등록번호: 165-8700119</div>
                <div>클라우드 호스팅: Amazon Web Services Inc.</div>
                <div><StyledLink to="#">공정거래위원회 웹사이트</StyledLink></div>
            </MemberFooterCopyright>
        </FooterWrapper>
    )
};

export default MainFooter;