import styled from 'styled-components'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFloatFixed, getRangeText, getColorRating } from "../../Modules/util";
import CardImage from './CardImage';

const CardWrapper = styled.div`
    width: ${(props) => `${props.$cardWidth}px`};
    margin: 0 10px 0 10px;
    margin-bottom: ${(props) => `${props.$marginBottom}px`};
    transition-property: transform;
    transition-duration: 0.5s;
    transform: ${(props) => `translateX(-${props.$posX}px)`};
    &:hover {
        cursor: pointer;
    }
`

const CardText = styled.div`
    margin-right: 4px;
    font-size: ${(props) => `${props.$fontSize}rem`};
    color: ${(props) => props.$textColor};
`

const Card = ({number, gameInfo, componentSize, posX, marginBottom}) => {
    const navigate = useNavigate();
    const [imageBrightness, setImageBrightness] = useState(100);
    return (
        <CardWrapper $cardWidth={componentSize.cardWidth} $marginBottom={marginBottom} $posX={posX} onClick={() => navigate(`/detail?id=${gameInfo.id}`)} onMouseOver={() => setImageBrightness(30)} onMouseOut={() => setImageBrightness(100)}>
            <CardImage url={gameInfo.image} numberTag={number} brightness={imageBrightness} componentSize={componentSize} />
            <CardText $fontSize={componentSize.cardFont}>{gameInfo.title}</CardText>
            <CardText $fontSize={componentSize.cardFont}>{getRangeText(gameInfo.player[0], gameInfo.player[1])}인 · {getRangeText(gameInfo.playTime[0], gameInfo.playTime[1])}분</CardText>
            <div className='frow'>
                <CardText $fontSize={componentSize.cardFont} $textColor={getColorRating(gameInfo.rating)}>{`★ ${getFloatFixed(gameInfo.rating, 1)}`}</CardText>
                <CardText $fontSize={componentSize.cardFont} $textColor={'#959595'}>{' ┃ '}</CardText>
                <CardText $fontSize={componentSize.cardFont} $textColor={'var(--red-00)'}>{`♥ ${gameInfo.like}`}</CardText>
            </div>
        </CardWrapper>
    );
}

export default Card;