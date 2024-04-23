import styled from "styled-components";

const CloseButtonWrapper = styled.button`
    width: ${(props) => `${props.$width}px`};
    height: ${(props) => `${props.$width}px`};
`;

const CloseButton = ({width, onClick}) => {
    return(
        <CloseButtonWrapper $width={width} onClick={() => onClick()}>        
            <svg width={width} height={width} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8.43934" y1="50.8659" x2="50.8657" y2="8.43945" stroke="#959595" strokeWidth="4"/>
                <line x1="9.56066" y1="8.43934" x2="51.9871" y2="50.8657" stroke="#959595" strokeWidth="4"/>
            </svg>
        </CloseButtonWrapper>
    );
}

export default CloseButton;