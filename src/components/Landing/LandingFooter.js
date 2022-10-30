import FooterWrapper, { TextBlock } from '../common/FooterWrapper';
import LangSelector from '../common/LangSelect';
import { StyledLink } from '../common/StyledLink';

const LandingFooter = () => {
    return(
        <FooterWrapper>
            <p>질문이 있으신가요? 문의전화: 080-001-9587</p>
            <ul>
                <li>자주 묻는 질문</li>
                <li>고객 센터</li>
                <li>계정</li>
                <li>미디어 센터</li>
                <li>투자 정보(IR)</li>
                <li>입사 정보</li>
                <li>넷플릭스 지원 디바이스</li>
                <li>이용 약관</li>
                <li>개인 정보</li>
                <li>쿠키 설정</li>
                <li>회사 정보</li>
                <li>문의하기</li>
                <li>속도 테스트</li>
                <li>법적 고지</li>
                <li>오직 넷플릭스에서</li>
            </ul>
            <LangSelector type="land-footer" />
            <p>넷플릭스 대한민국</p>
            <TextBlock>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587</TextBlock>
            <TextBlock>대표: 레지널드 숀 톰프슨</TextBlock>
            <TextBlock>이메일 주소: korea@netflix.com</TextBlock>
            <TextBlock>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</TextBlock>
            <TextBlock>사업자등록번호: 165-87-00119</TextBlock>
            <TextBlock>클라우드 호스팅: Amazon Web Services Inc.</TextBlock>
            <StyledLink to="#" ><TextBlock>공정거래위원회 웹사이트</TextBlock></StyledLink>
        </FooterWrapper>
    )
}

export default LandingFooter;