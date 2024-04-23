import { useEffect, useState } from "react";
import CardGridSlider from "../Card/CardGridSlider";
import SkeletonCardGridSlider from "../Skeleton/SkeletonCardGridSlider";

const getComponentSize = width => {
    if(width >= 1380) {
        return {gridWidth: 1300, cardWidth: 240, buttonWidth: 100, buttonFont: 1.1, numberOfCards: 5};
    }
    else if(width >= 1120) {
        return {gridWidth: 1040, cardWidth: 240, buttonWidth: 100, buttonFont: 1.1, numberOfCards: 4};
    }
    else if(width >= 860) {
        return {gridWidth: 780, cardWidth: 240, buttonWidth: 100, buttonFont: 1.1, numberOfCards: 3};
    }
    else if(width >= 680) {
        return {gridWidth: width - 80, cardWidth: 240 - (860 - width) * 1 / 3, buttonWidth: 80, buttonFont: 1.0, numberOfCards: 3};
    }
    else {
        return {gridWidth: width - 80, cardWidth: 280 - (680 - width) * 1 / 2, buttonWidth: 80, buttonFont: 1.0, numberOfCards: 2};
    }
}

const RankPage = ({windowWidth}) => {
    const [gameRankData, setGameRankData] = useState();
    const [componentSize, setComponentSize] = useState(getComponentSize(windowWidth));
    useEffect(() => setComponentSize(getComponentSize(windowWidth)), [windowWidth]);
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:3001/boardgame/all');
                const gameData = await response.json();
                const sortData = [
                    gameData.data.sort((a, b) => a.ranking[0] - b.ranking[0]).slice(0, 60), 
                    gameData.data.filter(a => a.ranking[1] > 0).sort((a, b) => a.ranking[1] - b.ranking[1]).slice(0, 60),
                    gameData.data.filter(a => a.ranking[2] > 0).sort((a, b) => a.ranking[2] - b.ranking[2]).slice(0, 60)
                ];
                setGameRankData(sortData);
            } catch(error) {
                console.log(error);
            }
        })();
    }, []);

    return(
        <>
            {!gameRankData ? <SkeletonCardGridSlider componentSize={componentSize} /> : <CardGridSlider gameData={gameRankData} componentSize={componentSize} />}
        </>
    );
}

export default RankPage;