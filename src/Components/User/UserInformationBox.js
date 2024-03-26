import styled from "styled-components";
import UserProfile from "./UserProfile";
import UserAccordion from "./UserAccordion";
import UserLike from "./UserLike";
import UserReview from "./UserReview";

const UserInformationBoxWrapper = styled.div`
    width: ${(props) => props.$width}px;
    min-height: 600px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    background-color: var(--gray-02);
    transition-property: height;
    transition-duration: 0.5s;
`

const UserInformationBox = ({likeGameData, reviewGameData, componentSize, userInfo}) => {
    const getHeight = length => {
        const layer = Math.ceil(length / componentSize.numOfCards);
        return layer * (componentSize.cardWidth * 1.2 + 20) - 10;
    }
    const likeHeight = getHeight(likeGameData.length);
    const reviewHeight = reviewGameData.reduce((sum, item) => sum + getHeight(item.length) + 55, 0);

    return(
        <UserInformationBoxWrapper className="center" $width={componentSize.contentWidth}>
            <UserProfile userInfo={userInfo} />
            <UserAccordion innerComponent={<UserLike gameData={likeGameData} componentSize={componentSize} />} buttonText={'좋아요 누른 보드게임'} height={likeHeight} />
            <UserAccordion innerComponent={<UserReview gameData={reviewGameData} componentSize={componentSize} />} buttonText={'나의 평가'} height={reviewHeight} />
        </UserInformationBoxWrapper>
    );
}

export default UserInformationBox;