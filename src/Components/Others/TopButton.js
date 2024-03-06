import styled from "styled-components";

const TopButtonWrapper = styled.button`
    position: fixed;
    width: 50px;
    height: 50px;
    bottom: 30px;
    padding: 0;
    border: 0 solid var(--gray-00);
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 0px 5px 2px var(--gray-01);
    @media (min-width: 721px){
        & {
            right: 30px;
        }
    }
    @media (max-width: 720px){
        & {
            right: ${(props) => `${props.$windowWidth / 2 - 25}px`};;
        }
    }
`

const TopButton = ({windowWidth}) => {
    return(
        <TopButtonWrapper $windowWidth={windowWidth} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5 35C23.5 35.8284 24.1716 36.5 25 36.5C25.8284 36.5 26.5 35.8284 26.5 35H23.5ZM26.0607 13.9393C25.4749 13.3536 24.5251 13.3536 23.9393 13.9393L14.3934 23.4853C13.8076 24.0711 13.8076 25.0208 14.3934 25.6066C14.9792 26.1924 15.9289 26.1924 16.5147 25.6066L25 17.1213L33.4853 25.6066C34.0711 26.1924 35.0208 26.1924 35.6066 25.6066C36.1924 25.0208 36.1924 24.0711 35.6066 23.4853L26.0607 13.9393ZM26.5 35L26.5 15H23.5L23.5 35H26.5Z" fill="#3A3A3A"/>
            </svg>
        </TopButtonWrapper>
    );
}

export default TopButton;