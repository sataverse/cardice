import styled from "styled-components";

const MainBannerButtonWrapper = styled.button.attrs(props => ({
    style: { backgroundColor: props.$backgroundcolor }
}))`
    width: 16px;
    height: 16px;
    margin: 0 6px 0 6px;
    padding: 0;
    border-radius: 16px;
    transition-property: background-color;
    transition-duration: 0.5s;
`;

const MainBannerButton = ({size, buttonColor, setShowIndex}) => {
    return(
        <MainBannerButtonWrapper $backgroundcolor={buttonColor} onClick={() => setShowIndex()}/>
    );
}

export default MainBannerButton;
