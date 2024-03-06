import styled from "styled-components";
import CardGrid from "./CardGrid";
import { useState } from "react";

const CardGridSliderWrapper = styled.div`
    margin-top: 30px;
`

const CardGridSliderButton = styled.button`
    width: ${(props) => `${props.$width}px`};
    font-size: ${(props) => `${props.$fontSize}rem`};
    margin-left: 20px;
    margin-right: 20px;
    background-color: transparent;
`

const CardGridSliderBar = styled.div`
    width: ${(props) => `${props.$width}px`};
    height: 2px;
    margin-top: 6px;
    margin-bottom: 30px;
    background-color: var(--main-01);
    transition-property: transform;
    transition-duration: 0.5s;
    transform: ${(props) => `translateX(${props.$posX}px)`};
`

const CardGridSliderContentsWrapper = styled.div`
    overflow: hidden;
    width: ${(props) => `${props.$gridWidth}px`};
`

const CardGridSlider = ({gameData, componentSize}) => {
    const [gridIndex, setGridIndex] = useState(0);
    const getPosX = idx => -((1 - idx) * (componentSize.buttonWidth + 40));

    return (
        <CardGridSliderWrapper>
            <div className="frow fjcenter">
                <CardGridSliderButton $width={componentSize.buttonWidth} $fontSize={componentSize.buttonFont} onClick={() => setGridIndex(0)}>종합 순위</CardGridSliderButton>
                <CardGridSliderButton $width={componentSize.buttonWidth} $fontSize={componentSize.buttonFont} onClick={() => setGridIndex(1)}>일간 순위</CardGridSliderButton>
                <CardGridSliderButton $width={componentSize.buttonWidth} $fontSize={componentSize.buttonFont} onClick={() => setGridIndex(2)}>월간 순위</CardGridSliderButton>
            </div>
            <CardGridSliderBar className='center' $width={componentSize.buttonWidth} $posX={getPosX(gridIndex)}/>
            <CardGridSliderContentsWrapper className="frow center" $gridWidth={componentSize.gridWidth}>
                <CardGrid key={0} gameData={gameData[0]} componentSize={componentSize} posX={gridIndex * componentSize.gridWidth} />
                <CardGrid key={1} gameData={gameData[1]} componentSize={componentSize} posX={gridIndex * componentSize.gridWidth} />
                <CardGrid key={2} gameData={gameData[2]} componentSize={componentSize} posX={gridIndex * componentSize.gridWidth} />
            </CardGridSliderContentsWrapper>
        </CardGridSliderWrapper>
    );
}

export default CardGridSlider;