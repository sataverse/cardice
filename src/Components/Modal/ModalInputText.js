import styled from "styled-components";

const ModalInputTextWrapper = styled.input`
    outline: 0;
    width: 296px;
    height: 36px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 2px 10px 2px 10px;
    border: 2px solid transparent;
    border-radius: 4px;
    background-color: var(--gray-02);
    &:hover {
        border: 2px solid var(--main-01);
    }
    &:focus {
        border: 2px solid var(--main-01);
    }
`;

const ModalInputText = ({type, placeholder, changeText}) => {
    return(
        <ModalInputTextWrapper className='center' type={type} placeholder={placeholder} onChange={e => changeText(e.target.value)} />
    )
}

export default ModalInputText;