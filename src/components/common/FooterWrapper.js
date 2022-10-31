import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: rgba(0, 0, 0,.75);
    margin-top: 0;
    min-width: 190px;
    padding-bottom: 20px;
    position: relative;
    width: 100%;
`;


const SiteFooter = styled.div`
    color: #737373;
    padding: 30px;
    margin: 0 auto;
    text-align: left;
    

    & p:nth-child(1) {
        color: #737373;
        margin: 30px 0;
        padding: 0;
        display: inline-block;
    }

    & p:nth-child(2) {
        
        font-size: 11px;
        margin: 10px 0 13px 0;
    }

    & p a {
        color: #737373;
    }

    ul {
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        font-size: 13px;
        max-width: 1000px;
    }

    li {
        font-size: 13px;
        list-style: none;
        margin-left: 0;
        box-sizing: border-box;
        display: inline-block;
        margin-bottom: 16px;
        padding: 0 12px 0 0;
        vertical-align: top;
        width: 22%;
    }

    @media screen and (min-width: 740px) {
       & { 
            margin: 0 auto;
            max-width: 1000px;
       }
    }
`;

const FooterWrapper = ({ children }) => {
    return(
        <FooterContainer>
            <SiteFooter>
                { children }
            </SiteFooter>
        </FooterContainer>
    )
}

export default FooterWrapper;