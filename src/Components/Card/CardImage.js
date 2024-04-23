import styled from "styled-components";
import CardFrontInformation from "./CardFrontInformation";
import CardBackInformation from "./CardBackInformation";

const CardImageWrapper = styled.div.attrs(props => ({
    style: { 
        width: `${props.$cardwidth}px`, 
        height: `${props.$cardwidth * 1.2}px`,
        backgroundImage: `url(${props.$imgurl})`,
        filter: props.$ismouseover ? 'brightness(15%)' : 'brightness(100%)'
    }
}))`
    border-radius: 4px;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    transition-property: filter;
    transition-duration: 0.3s;
`;

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
`;

const CardImage = ({gameInfo, numberTag, isMouseOver, componentSize}) => {
    return(
        <>
            <CardImageWrapper $cardwidth={componentSize.cardWidth} $imgurl={gameInfo.image} $ismouseover={isMouseOver} />
            {isMouseOver ? <CardBackInformation gameInfo={gameInfo} /> : <CardFrontInformation gameInfo={gameInfo} />}
            {numberTag === 0 ? null : <CardImageNumberTag>{numberTag}</CardImageNumberTag>}
        </>
    );
}

export default CardImage;
