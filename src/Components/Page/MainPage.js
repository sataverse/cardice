import styled from 'styled-components'
import { useEffect, useState } from "react";
import MainBanner from '../Others/MainBanner';
import CardSlider from "../Card/CardSlider";
import TopButton from "../Others/TopButton";

const MainPageElement = styled.div`
    margin-top: ${(props) => `${props.$marginTop}px`};
    margin-bottom: ${(props) => `${props.$marginBottom}px`};
`

const getComponentSize = width => {
    if(width >= 1380) {
        return {sliderWidth: 1300, cardWidth: 240, numberOfCards: 5, titleFont: 1.6, cardFont: 0.9};
    }
    else if(width >= 1120) {
        return {sliderWidth: 1040, cardWidth: 240, numberOfCards: 4, titleFont: 1.6, cardFont: 0.9};
    }
    else if(width >= 860) {
        return {sliderWidth: 780, cardWidth: 240, numberOfCards: 3, titleFont: 1.6, cardFont: 0.9};
    }
    else {
        return {sliderWidth: width - 80, cardWidth: 240 - (860 - width) * 1 / 3, numberOfCards: 3, titleFont: 1.3, cardFont: 0.8};
    }
}

const MainPage = ({gameData, windowWidth}) => {
    const [componentSize, setComponentSize] = useState(getComponentSize(windowWidth));
    useEffect(() => setComponentSize(getComponentSize(windowWidth)), [windowWidth]);

    return(
        <>
            <MainPageElement>
                <MainBanner windowWidth={windowWidth} />
            </MainPageElement>
            <MainPageElement $marginTop={20} $marginBottom={50}>
                <CardSlider key={0} title={'추천 보드게임'} gameData={gameData[0]} buttonColor={'var(--main-02)'} componentSize={componentSize} link={'a'}/>
            </MainPageElement>
            <MainPageElement $marginTop={50} $marginBottom={50}>
                <CardSlider key={1} title={'초보 추천 보드게임'} gameData={gameData[1]} buttonColor={'var(--main-02)'} componentSize={componentSize} link={'a'}/>
            </MainPageElement>
            <TopButton windowWidth={windowWidth} />
        </>
    );
}

export default MainPage