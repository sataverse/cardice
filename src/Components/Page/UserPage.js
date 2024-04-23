import { useEffect, useState } from "react";
import { loadLocalStorage } from "../../Modules/util";
import UserInformationBox from "../User/UserInformationBox";

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
    const [likeGameData, setLikeGameData] = useState(null);
    const [reviewGameData, setReviewGameData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const likeGameIds = loadLocalStorage('like').boardgame;
                if(likeGameIds.length > 0) {
                    var response = await fetch(`http://localhost:3001/boardgame?id=${likeGameIds.join(',')}`);
                    const jsonData = await response.json();
                    setLikeGameData(jsonData.data);
                }

                const reviewIds = loadLocalStorage('review');
                if(reviewIds.length > 0) {
                    const tempData = [[], [], [], [], [], [], [], [], [], []];
                    response = await fetch(`http://localhost:3001/review?id=${reviewIds.join(',')}`);
                    const reviewJsonData = await response.json();

                    const reviewGameIds = reviewJsonData.data.map(item => item.gameid);
                    response = await fetch(`http://localhost:3001/boardgame?id=${reviewGameIds.join(',')}`);
                    const gameJsonData = await response.json();
                    for(var i = 0; i < reviewJsonData.data.length; i++) {
                        tempData[10 - reviewJsonData.data[i].rating].push(gameJsonData.data[i]);
                    }
                    setReviewGameData(tempData);
                }  
            } catch(error) {
                console.log(error);
            }
        })();
    }, []);

    useEffect(() => setComponentSize(getComponentSize(windowWidth)), [windowWidth]);

    return(
        <UserInformationBox likeGameData={likeGameData} reviewGameData={reviewGameData} componentSize={componentSize} />
    );
}

export default UserPage;