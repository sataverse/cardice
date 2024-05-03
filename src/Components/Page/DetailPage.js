import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import { loadLocalStorage } from "../../Modules/util";
import DetailInfoBox from "../Detail/DetailInfoBox"
import DetailInfoSmallBox from "../Detail/DetailInfoSmallBox";
import DetailInfoSlider from "../Detail/DetailInfoSlider";
import SkeletonDetailBox from "../Skeleton/SkeletonDetailBox";
import SkeletonDetailSmallBox from "../Skeleton/SkeletonDetailSmallBox";

const getComponentSize = width => {
    if(width >= 1040) {
        return {detailBoxWidth: 960, chartSize: 80, titleFont: 2, basicFont: 1, rowListMargin: '0 10px 0 10px', sliderWidth: 920, cardWidth: 210, numberOfCards: 4};
    }
    else if(width >= 840) {
        return {detailBoxWidth: width - 80, chartSize: 70, titleFont: 1.7, basicFont: 1, rowListMargin: '0 10px 0 10px', sliderWidth: width - 120, cardWidth: 210 - (1040 - width) * 1 / 4, numberOfCards: 4};
    }
    else if(width > 720) {
        return {detailBoxWidth: width - 80, chartSize: 60, titleFont: 1.2, basicFont: 0.9, rowListMargin: '0 6px 0 6px', sliderWidth: width - 120, cardWidth: 220 - (840 - width) * 1 / 3, numberOfCards: 3};
    }
    else {
        return {detailBoxWidth: width - 80, chartSize: 60, titleFont: 1.2, basicFont: 1.0, rowListMargin: '0 10px 0 10px', sliderWidth: width - 120, cardWidth: 280 - (720 - width) * 1 / 2, numberOfCards: 2};
    }
}

const DetailPage = ({windowWidth, changeModal}) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [componentSize, setComponentSize] = useState(getComponentSize(windowWidth));
    const [gameInfo, setGameInfo] = useState(null);
    const [recommendGameData, setRecommendGameData] = useState(null);
    const [reviewData, setReviewData] = useState(null);
    const [myReview, setMyReview] = useState(null);
    const saveMyReview = (review, code) => {
        var temp = reviewData;
        temp = temp.filter(item => item.id !== review.id);
        if(code === 0) {
            temp.push(review);
            setReviewData(temp);
            setMyReview(review);
        }
        else {
            setReviewData(temp);
            setMyReview(null);
        }
    }

    useEffect(() => setComponentSize(getComponentSize(windowWidth)), [windowWidth]);
    useEffect(() => {
        (async () => {
            try {
                const gameId = parseInt(searchParams.get('id'));
                var response = await fetch(`http://localhost:3030/boardgame?id=${gameId}`);
                const gameData = await response.json();
                if(!gameData.data[0]) {
                    navigate('/error');
                    return;
                }
                setGameInfo(gameData.data[0]);

                response = await fetch(`http://localhost:3030/boardgame?id=${gameData.data[0].anotherGames.join(',')}`);
                const recommends = await response.json();
                setRecommendGameData(recommends.data);

                response = await fetch(`http://localhost:3030/review?id=${gameData.data[0].review.join(',')}`);
                const reviews = await response.json();
                setReviewData(reviews.data);
                
                const temp = reviews.data.find(item => loadLocalStorage('review').indexOf(item.id) !== -1);
                setMyReview(!temp ? null : temp);
            } catch(error) {
                console.log(error);
            }
        })();
    }, [searchParams.get('id')]);

    return(
        <>
            {gameInfo !== null ? null : windowWidth > 720 ? <SkeletonDetailBox componentSize={componentSize} /> : <SkeletonDetailSmallBox componentSize={componentSize} />}
            {!gameInfo ? null : windowWidth > 720 ? 
                <DetailInfoBox gameInfo={gameInfo} myReview={myReview} componentSize={componentSize} saveMyReview={saveMyReview} changeModal={changeModal} /> 
                : <DetailInfoSmallBox gameInfo={gameInfo} myReview={myReview} componentSize={componentSize} saveMyReview={saveMyReview} changeModal={changeModal} />
            }
            <DetailInfoSlider recommendGameData={recommendGameData} reviewData={reviewData} componentSize={componentSize} changeModal={changeModal} />
        </>
    );
}

export default DetailPage;