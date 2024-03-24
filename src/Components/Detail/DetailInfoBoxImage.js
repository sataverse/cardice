import styled from "styled-components";

const GameImage = styled.img`
    border-radius: 4px;
    width: ${(props) => `${props.$imageWidth}px`};
    object-fit: cover;
`

const DetailInfoBoxImage = ({width, link}) => {
    return (
        <GameImage src={link} $imageWidth={width} />
    );
}

export default DetailInfoBoxImage; 