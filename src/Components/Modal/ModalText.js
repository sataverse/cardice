import styled from "styled-components";

const Text = styled.div`
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center; 
`;

const ModalText = ({text}) => {
    return(
        <Text className='center'>{text}</Text>
    );
}

export default ModalText;