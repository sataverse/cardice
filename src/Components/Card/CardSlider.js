import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import { LeftButton, RightButton } from "../Svg/DirectionIcon";

const CardSliderWrapper = styled.div`
    padding: 0 5px 0 5px;
`;

const CardSliderHeader = styled.div.attrs(props => ({
    style: { width: `${props.$sliderwidth - 20}px` }
}))`
    margin-bottom: 10px;
`;

const CardSliderTitle = styled.div.attrs(props => ({
    style: { fontSize: `${props.$fontsize}rem` }
}))``;

const CardSliderCardsWrapper = styled.div.attrs(props => ({
    style: { width: `${props.$sliderwidth}px` }
}))`
    overflow: hidden;
`;

const CardSliderButtonWrapper = styled.div`
    width: 30px;
`;

const CardSliderButton = styled.button.attrs(props => ({
    style: { top: `${props.$cardwidth * 1.2 / 2 - 15}px` }
}))`
    position: relative;
    height: 30px;
    padding: 0;
    background-color: transparent;
`;

const CardSlider = ({title, gameData, componentSize, buttonColor}) => {
    const { search } = useLocation();
    const [cardIndex, setCardIndex] = useState(0);
    const [moveButtonVisible, setMoveButtonVisible] = useState({left: false, right: false});
    const isMin = () => cardIndex <= 0;
    const isMax = () => cardIndex >= gameData.length - componentSize.numberOfCards;
    const showMoveButton = dir => {
        if(dir === 0) {
            setMoveButtonVisible({...moveButtonVisible, left: true});
        }
        else {
            setMoveButtonVisible({...moveButtonVisible, right: true});
        }
    }
    const hideMoveButton = dir => {
        if(dir === 0) {
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
    }, [componentSize.sliderWidth]);

    useEffect(() => {
        setCardIndex(0);
    }, [search]);

    return(
        <CardSliderWrapper>
            <CardSliderHeader className='frow fjsbetween faend center' $sliderwidth={componentSize.sliderWidth}>
                {!title ? null : <CardSliderTitle $fontsize={componentSize.titleFont}>{title}</CardSliderTitle>}
            </CardSliderHeader>
            <div className='frow fjcenter'>
                <CardSliderButtonWrapper onMouseOver={() => showMoveButton(0)} onMouseOut={() => hideMoveButton(0)}>
                    {!isMin() && moveButtonVisible.left ? <CardSliderButton $cardwidth={componentSize.cardWidth} onClick={() => moveSliderLeft()}><LeftButton width={30} height={30} color={buttonColor} /></CardSliderButton> : null}
                </CardSliderButtonWrapper>
                <CardSliderCardsWrapper className='frow' $sliderwidth={componentSize.sliderWidth}>
                    {gameData.map((data, i) => <Card key={data.id} number={i + 1} gameInfo={data} componentSize={componentSize} posX={cardIndex * (componentSize.cardWidth + 20)} />)} 
                </CardSliderCardsWrapper>
                <CardSliderButtonWrapper onMouseOver={() => showMoveButton(1)} onMouseOut={() => hideMoveButton(1)}>
                    {!isMax() && moveButtonVisible.right ? <CardSliderButton $cardwidth={componentSize.cardWidth} onClick={() => moveSliderRight()}><RightButton width={30} height={30} color={buttonColor} /></CardSliderButton> : null}
                </CardSliderButtonWrapper>
            </div>
        </CardSliderWrapper>
    );
}

export default CardSlider;