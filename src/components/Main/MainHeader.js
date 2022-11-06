import styled from 'styled-components';
import { StyledLink } from '../common/StyledLink';
import HeaderWrapper  from '../common/HeaderWrapper';
import Logo from '../common/Logo';


const StyledMainHeader = styled(HeaderWrapper)`
    position:fixed;
    z-index: 100;
    max-height: 68px;
    align-items: center;
    background: ${props => props.height > 0 ? "black" : "linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.01))" };
    transition: .4s;
`;

const FirstNavigation = styled.ul`
    display: flex;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    max-width: 800px;

    li {
        color: white;
        margin-left: 1.45rem;
        cursor: pointer;
        font-size: .8vw;
    }
`;

const SecondNavigation = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    height: 100%;
    justify-content: flex-end;
    position: relative;
    top: 0;
    right: 5%;

    &.search-div {
        display: flex;
        visibility: hidden;
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4));
        position: absolute;
        align-items: center;
        border: 0;
        padding: 0 13px;
        right: 195px;
        width: 0;
        height: 40px;

        input {
            height: 35px;
            width: 0;
            color: white;
            outline: none;
            background: transparent;
            border: 0; 
            padding: 0 0 0 8px;
        }

        input:focus {
            outline: none;
        }   
    }
`;

const NavElement = styled.div`
    margin-right: 15px;
    display: flex;
    color: white;
    align-items: center;

    &:not(:last-child) {
        margin-right: 15px;
    }
`;

const Notification = styled.span`
    position: relative;
    white-space: normal;
    color: white;

    button {
        background-color: transparent;
        border: none;
        font-size: 1.5em;
        line-height: 1;
        margin-top: 0.2em;
        padding: 2px 6px 3px;
        position:  relative;
        color: white;
    }
`;

const ShowKids = styled(NavElement)`
    display: block;
`;

const SearchBox = styled.div`
    display: ${props => props.design === 0 ? "inline-block" : "none" };
    vertical-align: middle;
    margin: 0 13px;
`;

const SearchTab = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline-block;
    text-transform: none;
    color: white;
    position: relative;
    z-index: 100;
`;

const SearchDiv = styled.div`
    display: flex;
    visibility: ${ props => !props.design ? "hidden" : "visible" };
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4));
    position: absolute;
    align-items: center;
    border: ${ props => !props.design ? 0 : "1px solid white" };
    transform: ${ props => !props.design ? "none" : "scaleX(1)" };
    transition: ${ props => !props.design ? "none" : ".4s" };
    padding: 0 13px;
    right: 195px;
    width: ${ props => !props.design ? 0 : "220px" };
    height: 40px;

    & input {
        height: 35px;
        width: ${ props => !props.design ? 0 : "130px" };
        color: white;
        outline: none;
        background: transparent;
        border: 0; 
        padding: 0 0 0 8px;
        margin: ${ props => !props.design ? 0 : "-3px 0 0 0" };
        transition-delay: ${ props => !props.design ? "0" : ".2s" };
    }

    & input:focus {
        outline: none;
    }
`;

const MainHeader = ({ scrollPos, searchBox, setSearchBox, searchDiv }) => {
    
    return (
       <StyledMainHeader height={scrollPos}>
            <StyledLink to="/">
                <Logo type="main"/>
            </StyledLink>
            <FirstNavigation>
                <li>홈</li>
                <li>시리즈</li>
                <li>영화</li>
                <li>NEW! 요즘 대세 콘텐츠</li>
                <li>내가 찜한 콘텐츠</li>
                <li>언어별로 찾아보기</li>
            </FirstNavigation>
            <SecondNavigation>
                <NavElement>
                    <SearchBox design={searchBox}>
                        { !searchBox &&
                            <SearchTab onClick={() => setSearchBox(1)} tabIndex="0" aria-label="검색">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon"><path fillRule="evenodd" clipRule="evenodd" d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z" fill="currentColor"></path></svg>
                            </SearchTab>
                        }
                    </SearchBox>
                    <SearchDiv design={searchBox} ref={searchDiv}>
                        { searchBox &&
                            <SearchTab tabIndex="0" aria-label="검색" >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon"><path fillRule="evenodd" clipRule="evenodd" d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z" fill="currentColor"></path></svg>
                            </SearchTab>
                        }
                        <input type="text" placeholder="제목, 사람, 장르" />
                    </SearchDiv>
                    <ShowKids>
                        <StyledLink to="#">키즈</StyledLink>
                    </ShowKids>
                    <NavElement>
                        <Notification>
                            <button aria-label="알림">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard"><path fillRule="evenodd" clipRule="evenodd" d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z" fill="currentColor"></path></svg>
                            </button>
                        </Notification>
                    </NavElement>
                    <NavElement>
                        <div>
                            <div>
                                <StyledLink to="#">
                                    <span>
                                        <img src="https://occ-0-3996-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVLBPyRzZ-Ti3d4hFKRYUQhyojEN_sc0mslh3esyadhdagUk_eFpati_TnKC8BxIFgyaafbYV1NOxtIS_iQYowIIbgMPUv0.png?r=12a" alt="profile"/>
                                    </span>
                                </StyledLink>
                                <span role="presentation"></span>
                            </div>
                        </div>
                    </NavElement>
                </NavElement>
            </SecondNavigation>
       </StyledMainHeader>
    );
};

export default MainHeader;