import styled from "styled-components";

const ButtonWrapper = styled.button`
    width: ${(props) => `${props.$width}px`};
    height: 30px;
    margin: 5px 0 5px 0;
    padding: 0;
    border-radius: 6px;
    background-color: white;
`

const ButtonIconWrapper = styled.div`
    position: relative;
`

const IconButton = ({icon, buttonWidth}) => {
    return(
        <ButtonWrapper $width={buttonWidth}>
            <ButtonIconWrapper>{icon}</ButtonIconWrapper>
        </ButtonWrapper>
    )
};

export default IconButton;