import styled from "styled-components";
import { useEffect, useState } from "react";
import MainBanner from "../Banner/MainBanner";
import CardSlider from "../Card/CardSlider";
import SkeletonCardSlider from "../Skeleton/SkeletonCardSlider";

const MainPageElement = styled.div`
    margin-top: ${(props) => `${props.$marginTop}px`};
    margin-bottom: ${(props) => `${props.$marginBottom}px`};
`;

const getComponentSize = width => {
    if(width >= 1380) {
        return {sliderWidth: 1300, cardWidth: 240, numberOfCards: 5, titleFont: 1.6};
    }
    else if(width >= 1120) {
        return {sliderWidth: 1040, cardWidth: 240, numberOfCards: 4, titleFont: 1.6};
    }
    else if(width >= 860) {
        return {sliderWidth: 780, cardWidth: 240, numberOfCards: 3, titleFont: 1.6};
    }
    else if(width >= 680) {
        return {sliderWidth: width - 80, cardWidth: 240 - (860 - width) * 1 / 3, numberOfCards: 3, titleFont: 1.3};
    }
    else {
        return {sliderWidth: width - 80, cardWidth: 280 - (680 - width) * 1 / 2, numberOfCards: 2, titleFont: 1.3};
    }
}

const MainPage = ({windowWidth}) => {
    const temp = [true, true, true];
    const [gameListData, setGameListData] = useState(null);
    const [componentSize, setComponentSize] = useState(getComponentSize(windowWidth));

    useEffect(() => setComponentSize(getComponentSize(windowWidth)), [windowWidth]);
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:3001/boardgame/list');
                const jsonData = await response.json();
                setGameListData(jsonData.data);
            } catch(error) {
                console.log(error);
            }
        })();
    }, []);

    return(
        <>
            <MainPageElement>
                <MainBanner windowWidth={windowWidth} />
            </MainPageElement>
            {!gameListData ? temp.map((_, idx) => {
                return(
                    <MainPageElement key={idx} $marginTop={idx === 0 ? 20 : 50} $marginBottom={50}>
                        <SkeletonCardSlider key={0} title={true} componentSize={componentSize} />
                    </MainPageElement>
                )
            }) : gameListData.map((item, idx) => {
                return(
                    <MainPageElement key={idx} $marginTop={idx === 0 ? 20 : 50} $marginBottom={50}>
                        <CardSlider key={0} title={item.title} gameData={item.list} buttonColor={'var(--main-02)'} componentSize={componentSize} />
                    </MainPageElement>
                );
            })}
        </>
    );
}

export default MainPage;