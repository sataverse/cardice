import styled from 'styled-components'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardImage from './CardImage';

const CardWrapper = styled.div`
    margin: 0px 10px 0px 10px;
    margin-bottom: ${(props) => `${props.$marginBottom}px`};
    transition-property: transform;
    transition-duration: 0.5s;
    transform: ${(props) => `translateX(-${props.$posX}px)`};
    &:hover {
        cursor: pointer;
    }
`

const Card = ({number, gameInfo, componentSize, posX, marginBottom}) => {
    const navigate = useNavigate();
    const [isMouseOver, setMouseOver] = useState(false);
    return (
        <CardWrapper $cardWidth={componentSize.cardWidth} $marginBottom={marginBottom} $posX={posX} onClick={() => navigate(`/detail?id=${gameInfo.id}`)} onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}>
            <CardImage gameInfo={gameInfo} numberTag={number} isMouseOver={isMouseOver} componentSize={componentSize} />
        </CardWrapper>
    );
}

export default Card;