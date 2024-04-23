import styled from "styled-components";
import Card from "./Card";

const CardGridWrapper = styled.div.attrs(props => ({
    style: { flexBasis: `${props.$gridwidth}px`, transform: `translateX(-${props.$posx}px)` }
}))`
    flex-shrink: 0;
    align-content: flex-start;
    margin-top: 10px;
    margin-bottom: 10px;
    transition-property: transform;
    transition-duration: 0.5s;
`;

const CardGrid = ({gameData, componentSize, posX}) => {
    return(
        <CardGridWrapper className='frow fwrap' $gridwidth={componentSize.gridWidth} $posx={posX}>
            {gameData.map((data, i) => <Card key={data.id} number={i + 1} gameInfo={data} componentSize={componentSize} posX={0} marginBottom={20} />)} 
        </CardGridWrapper>
    );
}

export default CardGrid;