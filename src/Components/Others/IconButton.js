import styled from "styled-components";

const ButtonWrapper = styled.button`
    width: ${(props) => `${props.$width}px`};
    height: ${(props) => `${props.$width}px`};
    margin: 5px 0 5px 0;
    padding: 0;
    border-radius: 4px;
    background-color: white;
`;

const ButtonIconWrapper = styled.div`
    position: relative;
`;

const IconButton = ({icon, buttonWidth, onClick}) => {
    return(
        <ButtonWrapper $width={buttonWidth} onClick={() => onClick()}>
            <ButtonIconWrapper>{icon}</ButtonIconWrapper>
        </ButtonWrapper>
    );
};

export default IconButton;