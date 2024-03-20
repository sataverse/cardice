import { useEffect, useState } from "react";
import CardGridSlider from "../Card/CardGridSlider";
import TopButton from "../Others/TopButton";

const getComponentSize = width => {
    if(width >= 1380) {
        return {gridWidth: 1300, cardWidth: 240, buttonWidth: 100, buttonFont: 1.1};
    }
    else if(width >= 1120) {
        return {gridWidth: 1040, cardWidth: 240, buttonWidth: 100, buttonFont: 1.1};
    }
    else if(width >= 860) {
        return {gridWidth: 780, cardWidth: 240, buttonWidth: 100, buttonFont: 1.1};
    }
    else if(width >= 680) {
        return {gridWidth: width - 80, cardWidth: 240 - (860 - width) * 1 / 3, buttonWidth: 80, buttonFont: 1.0};
    }
    else {
        return {gridWidth: width - 80, cardWidth: 280 - (680 - width) * 1 / 2, buttonWidth: 80, buttonFont: 1.0};
    }
}

const RankPage = ({gameData, windowWidth}) => {
    const [componentSize, setComponentSize] = useState(getComponentSize(windowWidth));
    useEffect(() => setComponentSize(getComponentSize(windowWidth)), [windowWidth]);

    return(
        <>
            <CardGridSlider gameData={gameData} componentSize={componentSize} />
            <TopButton windowWidth={windowWidth} />
        </>
    );
}

export default RankPage