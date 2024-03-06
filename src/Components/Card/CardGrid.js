import styled from "styled-components";
import Card from './Card'

const CardGridWrapper = styled.div`
    flex-basis: ${(props) => `${props.$gridWidth}px`};
    flex-shrink: 0;
    align-content: flex-start;
    transition-property: transform;
    transition-duration: 0.5s;
    transform: ${(props) => `translateX(-${props.$posX}px)`};
`

const CardGrid = ({gameData, componentSize, posX}) => {
    return(
        <CardGridWrapper className="frow fwrap" $gridWidth={componentSize.gridWidth} $posX={posX}>
            {gameData.map((data, i) => <Card key={i + 1} number={i + 1} gameInfo={data} componentSize={componentSize} posX={0} marginBottom={50} />)} 
        </CardGridWrapper>
    );
}

export default CardGrid;