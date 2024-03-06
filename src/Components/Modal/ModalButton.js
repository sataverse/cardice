import styled from "styled-components";

const ModalButtonWrapper = styled.button`
    width: 320px;
    height: 44px;
    margin-top: 15px;
    margin-bottom: 15px;
    border: 2px solid transparent;
    border-radius: 8px;
    text-align: center;
    color: white;
    background-color: var(--main-01);
`

const ModalButton = ({text, onClick}) => {
    return(
        <ModalButtonWrapper className="center" onClick={() => onClick()}>
            {text}
        </ModalButtonWrapper>
    )
}

export default ModalButton;