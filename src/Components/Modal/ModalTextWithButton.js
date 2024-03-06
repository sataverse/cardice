import styled from "styled-components";

const ModalTextWithButtonWrapper = styled.div`
    margin-top: 15px;
    text-align: center; 
`

const ChangeModalButton = styled.button`
    color: var(--main-01);
    background-color: transparent;
`

const ModalTextWithButton = ({text, buttonText, changeModal}) => {
    return(
        <ModalTextWithButtonWrapper className="frow fjcenter">
            <div>{text}</div>
            <ChangeModalButton onClick={() => changeModal()}>{buttonText}</ChangeModalButton>
        </ModalTextWithButtonWrapper>
    );
}

export default ModalTextWithButton;