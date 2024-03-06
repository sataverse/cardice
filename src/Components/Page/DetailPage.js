import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import DetailInfoBox from "../Detail/DetailInfoBox"
import gameData from '../../Data/boardgame.json'
import DetailInfoSmallBox from "../Detail/DetailInfoSmallBox";
import DetailInfoSlider from "../Detail/DetailInfoSlider";
import TopButton from "../Others/TopButton";

const getComponentSize = width => {
    if(width >= 1040) {
        return {detailBoxWidth: 960, starSize: 80, titleFont: 2, basicFont: 1, rowListMargin: '0 10px 0 10px', sliderWidth: 920, cardWidth: 210, cardHeight: 300, numberOfCards: 4, cardFont: 0.9};
    }
    else if(width >= 840) {
        return {detailBoxWidth: width - 80, starSize: 70, titleFont: 1.7, basicFont: 1, rowListMargin: '0 10px 0 10px', sliderWidth: width - 120, cardWidth: 210 - (1040 - width) * 1 / 4, numberOfCards: 4, cardFont: 0.9};
    }
    else if(width > 720) {
        return {detailBoxWidth: width - 80, starSize: 60, titleFont: 1.2, basicFont: 0.9, rowListMargin: '0 6px 0 6px', sliderWidth: width - 120, cardWidth: 210 - (1040 - width) * 1 / 4, numberOfCards: 4, cardFont: 0.8};
    }
    else {
        return {detailBoxWidth: width - 80, starSize: 60, titleFont: 1.2, basicFont: 1.0, rowListMargin: '0 10px 0 10px', sliderWidth: width - 120, cardWidth: 180 - (720 - width) * 1 / 3, numberOfCards: 3, cardFont: 0.8};
    }
}

const DetailPage = ({windowWidth}) => {
    const [searchParams] = useSearchParams();
    const [componentSize, setComponentSize] = useState(getComponentSize(windowWidth));
    const gameId = parseInt(searchParams.get('id'));
    const recommends = gameData[gameId].anotherGames.map(id => gameData[id]);
    useEffect(() => setComponentSize(getComponentSize(windowWidth)), [windowWidth]);
    console.log(recommends);

    return(
        <>
            {windowWidth > 720 ? <DetailInfoBox gameInfo={gameData[gameId]} componentSize={componentSize} /> : <DetailInfoSmallBox gameInfo={gameData[parseInt(searchParams.get('id'))]} componentSize={componentSize} />}
            <DetailInfoSlider recommendGameData={recommends} reviewIds={gameData[gameId].review} componentSize={componentSize} />
            <TopButton windowWidth={windowWidth} />
        </>
        
    );
}

export default DetailPage;