import styled from "styled-components";

const ButtonWrapper = styled.button`
    width: ${(props) => `${props.$width}px`};
    height: 30px;
    margin: 5px 0 5px 0;
    padding: 0;
    border-radius: 4px;
    background-color: white;
`

const ButtonIconWrapper = styled.div`
    position: relative;
    top: ${(props) => `${props.$top}px`};
`

const ButtonTextWrapper = styled.div`
    width: 50px;
    text-align: center;
`

const IconTextButton = ({icon, buttonWidth, text, onClick}) => {
    return(
        <ButtonWrapper className="frow fjsaround facenter" $width={buttonWidth} onClick={() => onClick()}>
            <ButtonIconWrapper $top={3}>{icon}</ButtonIconWrapper>
            <ButtonTextWrapper>{text}</ButtonTextWrapper>
        </ButtonWrapper>
    )
};

export default IconTextButton;