import styled from "styled-components";
import DetailInfoSliderRecommendedGames from "./DetailInfoSliderRecommendedGames";
import DetailInfoSliderReviews from "./DetailInfoSliderReviews";
import { useState, useEffect } from "react";

const DetailInfoSliderWrapper = styled.div`
    width: ${(props) => `${props.$width + 40}px`};
    overflow: hidden;
`

const DetailInfoSliderButton = styled.button`
    width: 100px;
    margin-right: 20px;
    background-color: transparent;
`

const DetailInfoSliderBar = styled.div`
    width: 100px;
    height: 2px;
    margin-top: 6px;
    margin-bottom: 10px;
    background-color: var(--main-01);
    transition-property: transform;
    transition-duration: 0.5s;
    transform: ${(props) => `translateX(${props.$posX}px)`};
`

const DetailInfoSliderConetentsWrapper = styled.div`
    height: ${(props) => props.$height};
    transition-property: transform;
    transition-duration: 0.5s;
    transform: ${(props) => `translateX(${props.$posX}px)`};
`

const DetailInfoSlider = ({recommendGameData, reviewIds, componentSize}) => {
    const [index, setIndex] = useState(0);

    return (
        <DetailInfoSliderWrapper className="center" $width={componentSize.detailBoxWidth}>
            <div className="frow">
                <DetailInfoSliderButton onClick={() => setIndex(0)}>{'추천 게임'}</DetailInfoSliderButton>
                <DetailInfoSliderButton onClick={() => setIndex(1)}>{'리뷰'}</DetailInfoSliderButton>
            </div>
            <DetailInfoSliderBar $posX={index * 120} />
            <DetailInfoSliderConetentsWrapper className="frow" $height={index === 0 ? `${componentSize.cardWidth * 1.2 + 30}px` : 'auto'} $posX={-(index * (componentSize.detailBoxWidth + 40))}>
                <DetailInfoSliderRecommendedGames gameData={recommendGameData} componentSize={componentSize} />
                <DetailInfoSliderReviews reviewIds={reviewIds} componentSize={componentSize} />
            </DetailInfoSliderConetentsWrapper>
        </DetailInfoSliderWrapper>
    );
}

export default DetailInfoSlider;