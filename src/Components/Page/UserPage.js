import { useEffect, useState } from "react";
import UserInformationBox from "../User/UserInformationBox";
import userData from "../../Data/user.json";
import gameData from "../../Data/boardgame.json";

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
    useEffect(() => setComponentSize(getComponentSize(windowWidth)), [windowWidth]);
    return(
        <UserInformationBox gameData={userData[3].like.map(item => gameData[item])} componentSize={componentSize} userInfo={userData[3]} />
    );
}

export default UserPage;