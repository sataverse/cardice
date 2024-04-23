import styled from "styled-components";
import { useState } from "react";
import DetailInfoSliderRecommendedGames from "./DetailInfoSliderRecommendedGames";
import DetailInfoSliderReviews from "./DetailInfoSliderReviews";
import SkeletonReviews from "../Skeleton/SkeletonReviews";

const DetailInfoSliderWrapper = styled.div.attrs(props => ({
    style: { width: `${props.$width + 40}px`}
}))`
    overflow: hidden;
`;

const DetailInfoSliderButton = styled.button`
    width: 100px;
    margin-right: 20px;
    background-color: transparent;
`;

const DetailInfoSliderBar = styled.div.attrs(props => ({
    style: { transform: `translateX(${props.$posx}px)` }
}))`
    width: 100px;
    height: 2px;
    margin-top: 6px;
    margin-bottom: 10px;
    background-color: var(--main-01);
    transition-property: transform;
    transition-duration: 0.5s;
`;

const DetailInfoSliderConetentsWrapper = styled.div.attrs(props => ({
    style: { height: props.$height, transform: `translateX(${props.$posx}px)` }
}))`
    transition-property: transform;
    transition-duration: 0.5s;
`;

const DetailInfoSlider = ({recommendGameData, reviewData, componentSize, changeModal}) => {
    const [index, setIndex] = useState(0);

    return (
        <DetailInfoSliderWrapper className='center' $width={componentSize.detailBoxWidth}>
            <div className='frow'>
                <DetailInfoSliderButton onClick={() => setIndex(0)}>{'추천 게임'}</DetailInfoSliderButton>
                <DetailInfoSliderButton onClick={() => setIndex(1)}>{'리뷰'}</DetailInfoSliderButton>
            </div>
            <DetailInfoSliderBar $posx={index * 120} />
            <DetailInfoSliderConetentsWrapper className='frow' $height={index === 0 ? `${componentSize.cardWidth * 1.2 + 30}px` : 'auto'} $posx={-(index * (componentSize.detailBoxWidth + 40))}>
                <DetailInfoSliderRecommendedGames gameData={recommendGameData} componentSize={componentSize} />
                {!reviewData ? <SkeletonReviews componentSize={componentSize} /> : <DetailInfoSliderReviews reviewData={reviewData} componentSize={componentSize} changeModal={changeModal} />}
            </DetailInfoSliderConetentsWrapper>
        </DetailInfoSliderWrapper>
    );
}

export default DetailInfoSlider;