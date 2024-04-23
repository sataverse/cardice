import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardImage from "./CardImage";

const CardWrapper = styled.div.attrs(props => ({
    style: { marginBottom: props.$marginbottom, transform: `translateX(-${props.$posx}px)` }
}))`
    margin: 0px 10px 0px 10px;
    transition-property: transform;
    transition-duration: 0.5s;
    &:hover {
        cursor: pointer;
    };
`;

const Card = ({number, gameInfo, componentSize, posX, marginBottom}) => {
    const [isMouseOver, setMouseOver] = useState(false);
    return (
        <Link to={`/detail?id=${gameInfo.id}`} className='link'>
            <CardWrapper $marginbottom={marginBottom} $posx={posX} onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}>
                <CardImage gameInfo={gameInfo} numberTag={number} isMouseOver={isMouseOver} componentSize={componentSize} />
            </CardWrapper>
        </Link>
    );
}

export default Card;