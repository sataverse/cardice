import styled from "styled-components";

const Text = styled.div`
    width: 310px;
    margin-bottom: 8px;
    color: var(--red-00);
`

const ModalFailText = ({text}) => {
    return(
        <Text className="center font3">{text}</Text>
    );
}

export default ModalFailText;