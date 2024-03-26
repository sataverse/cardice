import { useEffect, useState } from "react";
import { loadLocalStorage } from "../../Modules/util";
import UserInformationBox from "../User/UserInformationBox";
import userData from "../../Data/user.json";
import gameData from "../../Data/boardgame.json";
import reviewData from "../../Data/review.json"

const getComponentSize = width => {
    if(width >= 840) {
        return {contentWidth: 800, gridWidth: 780, cardWidth: 180, numOfCards: 4};
    }
    else if(width >= 640) {
        return {contentWidth: 600, gridWidth: 580, cardWidth: 180, numOfCards: 3};
    }
    else {
        return {contentWidth: 430, gridWidth: 410, cardWidth: 195, numOfCards: 2};
    }
}

const UserPage = ({windowWidth}) => {
    const [componentSize, setComponentSize] = useState(getComponentSize(windowWidth));
    const myReviewData = reviewData.filter(item => item.userid === loadLocalStorage('id'));
    const reviewGameData = [[], [], [], [], [], [], [], [], [], []];
    myReviewData.forEach(item => {
        reviewGameData[10 - item.rating].push(gameData[item.gameid]);
    });
    useEffect(() => setComponentSize(getComponentSize(windowWidth)), [windowWidth]);
    return(
        <UserInformationBox likeGameData={userData[loadLocalStorage('id')].like.map(item => gameData[item])} reviewGameData={reviewGameData} componentSize={componentSize} userInfo={userData[loadLocalStorage('id')]} />
    );
}

export default UserPage;