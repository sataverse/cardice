import styled from "styled-components";

const MainBannerButtonWrapper = styled.button`
    width: 20px;
    height: 20px;
    margin: 0 8px 0 8px;
    border-radius: 20px;
    background-color: ${(props) => `${props.$backgroundColor}`};
    transition-property: background-color;
    transition-duration: 0.5s;
`

const MainBannerButton = ({size, buttonColor, setShowIndex}) => {
    return(
        <MainBannerButtonWrapper $size={size} $backgroundColor={buttonColor} onClick={() => setShowIndex()}/>
    );
}

export default MainBannerButton;
