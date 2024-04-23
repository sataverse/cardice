import styled from "styled-components";

const GameImage = styled.img.attrs(props => ({
    style: { width: `${props.$imagewidth}px` }
}))`
    border-radius: 4px;
    object-fit: cover;
`;

const DetailInfoBoxImage = ({width, link}) => {
    return (
        <GameImage src={link} $imagewidth={width} />
    );
}

export default DetailInfoBoxImage; 