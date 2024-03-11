import styled from "styled-components";

const CardImageWrapper = styled.div`
    width: ${(props) => `${props.$cardWidth}px`};
    height: ${(props) => `${props.$cardWidth}px`};
    border-radius: 10px;
    background-image: ${(props) => `url(${props.$imgURL})`};
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    filter: ${(props) => `brightness(${props.$brightness}%)`};
    transition-property: filter;
    transition-duration: 0.3s;
`

const CardImageNumberTag = styled.div`
    position: fixed;
    width: 24px;
    height: 24px;
    top: 10px;
    left: 10px;
    border-radius: 4px;
    background-color: rgb(0, 0, 0, 0.8);
    text-align: center;
    color: white;
`

const CardImage = ({url, numberTag, brightness, componentSize}) => {
    return(
        <>
            <CardImageWrapper $cardWidth={componentSize.cardWidth} $imgURL={url} $brightness={brightness} />
            {numberTag === 0 ? null : <CardImageNumberTag>{numberTag}</CardImageNumberTag>}
        </>
        
    );
}

export default CardImage
