import styled from "styled-components";
import React, { useState, useEffect } from 'react'

import Card from './Card'
import LeftButton from "../Svg/LeftButton";
import RightButton from "../Svg/RightButton";

const CardSliderWrapper = styled.div`
    padding: 0 5px 0 5px;
`

const CardSliderHeader = styled.div`
    margin-bottom: 10px;
    width: ${(props) => `${props.$sliderWidth - 20}px`};
`

const CardSliderTitle = styled.div`
    font-size: ${(props) => `${props.$fontSize}rem`};
`

const CardSliderLink = styled.button`
    color: var(--blue-00);
    background-color: transparent;
`

const CardSliderCardsWrapper = styled.div`
    overflow: hidden;
    width: ${(props) => `${props.$sliderWidth}px`};
`

const CardSliderButtonWrapper = styled.div`
    width: 30px;
`

const CardSliderButton = styled.div`
    position: relative;
    height: 30px;
    top: ${(props) => `${props.$cardWidth / 2 - 15}px`};
    &:hover {
        cursor: pointer;
    }
`

const CardSlider = ({id, title, gameData, componentSize, link}) => {
    const [cardIndex, setCardIndex] = useState(0);
    const [moveButtonVisible, setMoveButtonVisible] = useState({left: false, right: false});
    const isMin = () => cardIndex <= 0;
    const isMax = () => cardIndex >= gameData.length - componentSize.numberOfCards;
    const showMoveButton = dir => {
        if(dir == 0) {
            setMoveButtonVisible({...moveButtonVisible, left: true});
        }
        else {
            setMoveButtonVisible({...moveButtonVisible, right: true});
        }
    }
    const hideMoveButton = dir => {
        if(dir == 0) {
            setMoveButtonVisible({...moveButtonVisible, left: false});
        }
        else {
            setMoveButtonVisible({...moveButtonVisible, right: false});
        }
    }
    const moveSliderLeft = () => {
        const idx = cardIndex - componentSize.numberOfCards;
        if(idx < 0) {
            setCardIndex(0);
        }
        else {
            setCardIndex(idx);
        }
    }
    const moveSliderRight = () => {
        const idx = cardIndex + componentSize.numberOfCards, max = gameData.length - componentSize.numberOfCards;
        if(idx > max) {
            setCardIndex(max);
        }
        else {
            setCardIndex(idx);
        }
    }

    useEffect(() => {
        const max = gameData.length - componentSize.numberOfCards;
        if(cardIndex > max) {
            setCardIndex(max);
        }
    }, [componentSize.sliderWidth])

    return(
        <CardSliderWrapper id={id}>
            <CardSliderHeader className="frow fjsbetween faend center" $sliderWidth={componentSize.sliderWidth}>
                {!title ? null : <CardSliderTitle $fontSize={componentSize.titleFont}>{title}</CardSliderTitle>}
                {!link ? null : <CardSliderLink>{'더 보기'}</CardSliderLink>}
            </CardSliderHeader>
            <div className="frow fjcenter">
                <CardSliderButtonWrapper onMouseOver={() => showMoveButton(0)} onMouseOut={() => hideMoveButton(0)}>
                    {!isMin() && moveButtonVisible.left ? <CardSliderButton $cardWidth={componentSize.cardWidth} onClick={() => moveSliderLeft()}><LeftButton width={30} height={30} /></CardSliderButton> : null}
                </CardSliderButtonWrapper>
                <CardSliderCardsWrapper className="frow" $sliderWidth={componentSize.sliderWidth}>
                    {gameData.map((data, i) => <Card key={i + 1} number={i + 1} gameInfo={data} componentSize={componentSize} posX={cardIndex * (componentSize.cardWidth + 20)} marginBottom={0} />)} 
                </CardSliderCardsWrapper>
                <CardSliderButtonWrapper onMouseOver={() => showMoveButton(1)} onMouseOut={() => hideMoveButton(1)}>
                    {!isMax() && moveButtonVisible.right ? <CardSliderButton $cardWidth={componentSize.cardWidth} onClick={() => moveSliderRight()}><RightButton width={30} height={30} /></CardSliderButton> : null}
                </CardSliderButtonWrapper>
            </div>
        </CardSliderWrapper>
    );
}

export default CardSlider