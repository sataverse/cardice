import styled from "styled-components";
import userData from "../../Data/user.json"
import IconTextButton from "./IconTextButton";
import RatingStar from "../Svg/RatingStar"
import EmptyHeartIcon from "../Svg/EmptyHeartIcon";
import { getFloatFixed, getColorRating, getDateText } from "../../Modules/util";

const ReviewBoxWrapper = styled.div`
    padding: 10px;
    border-top: 2px solid var(--gray-01);
`

const ReviewBoxElement = styled.div`
    margin-left: 12px;
`

const ReviewBox = ({review}) => {
    return(
        <ReviewBoxWrapper className="frow">
            <ReviewBoxElement>
                <RatingStar width={60} height={60} color={getColorRating(review.rating)} rating={getFloatFixed(review.rating)} posX={review.rating == 10 ? 36 : 46} />
            </ReviewBoxElement>
            <div className="fcol fjsbetween">
                <div className="frow">
                    <ReviewBoxElement className="font5">{userData[review.userid].nickname}</ReviewBoxElement>
                    <ReviewBoxElement className="font5">{getDateText(...review.date)}</ReviewBoxElement>
                </div>
                <ReviewBoxElement>{review.comment}</ReviewBoxElement>
                <ReviewBoxElement>
                    <IconTextButton icon={<EmptyHeartIcon width={24} height={24} />} buttonWidth={80} text={review.like.length} />
                </ReviewBoxElement>
            </div>
        </ReviewBoxWrapper>
    );
}

export default ReviewBox;