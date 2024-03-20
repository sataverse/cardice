import styled from "styled-components";
import CardFrontInformation from "./CardFrontInformation";
import CardBackInformation from "./CardBackInformation";

const CardImageWrapper = styled.div`
    width: ${(props) => `${props.$cardWidth}px`};
    height: ${(props) => `${props.$cardWidth * 1.2}px`};
    border-radius: 8px;
    background-image: ${(props) => `url(${props.$imgURL})`};
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    filter: ${(props) => props.$isMouseOver ? 'brightness(15%)' : 'brightness(100%)'};
    transition-property: filter;
    transition-duration: 0.3s;
`

const CardImageNumberTag = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    top: 10px;
    left: 10px;
    border-radius: 4px;
    background-color: rgb(0, 0, 0, 0.8);
    text-align: center;
    color: white;
`

const CardImage = ({gameInfo, numberTag, isMouseOver, componentSize}) => {
    return(
        <>
            <CardImageWrapper $cardWidth={componentSize.cardWidth} $imgURL={gameInfo.image} $isMouseOver={isMouseOver} />
            {isMouseOver ? <CardBackInformation gameInfo={gameInfo} /> : <CardFrontInformation gameInfo={gameInfo} />}
            {numberTag === 0 ? null : <CardImageNumberTag>{numberTag}</CardImageNumberTag>}
        </>
    );
}

export default CardImage
