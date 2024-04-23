import styled from "styled-components";
import { useState } from "react";
import { getFloatFixed, getColorRating, getDateText, loadLocalStorage, saveLocalStorage } from "../../Modules/util";
import IconTextButton from "./IconTextButton";
import RatingStar from "../Svg/RatingStar";
import { EmptyHeartIcon, FillHeartIcon } from "../Svg/ButtonIcon";

const ReviewBoxWrapper = styled.div`
    padding: 10px;
    border-top: 2px solid var(--gray-01);
`;

const ReviewBoxElement = styled.div`
    margin-left: 12px;
    text-align: justify;
`;

const ReviewBox = ({review, changeModal}) => {
    const getLikeStatus = () => loadLocalStorage('like').review.indexOf(review.id) !== -1;
    const [like, setLike] = useState(!loadLocalStorage('id') ? false : getLikeStatus());
    const [likeNum, setLikeNum] = useState(review.like);

    const likeReview = async () => {
        const response = await fetch('http://localhost:3001/review/like', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ token: loadLocalStorage('token'), reviewid: review.id, userid: loadLocalStorage('id'), status: !getLikeStatus() })
        });
        const { code } = await response.json();
        if(code === 200) {
            const temp = loadLocalStorage('like');
            if(getLikeStatus()) {
                temp.review = temp.review.filter(item => item !== review.id);
                setLike(false);
                setLikeNum(likeNum - 1);
            }
            else {
                temp.review.unshift(review.id);
                setLike(true);
                setLikeNum(likeNum + 1);
            }
            saveLocalStorage('like', temp);
        }
    }

    return(
        <ReviewBoxWrapper className='frow'>
            <ReviewBoxElement>
                <RatingStar width={60} height={60} color={getColorRating(review.rating)} rating={getFloatFixed(review.rating)} posX={review.rating === 10 ? 36 : 46} />
            </ReviewBoxElement>
            <div className='fcol fjsbetween'>
                <div className='frow facenter'>
                    <ReviewBoxElement className='font5'>{review.nickname}</ReviewBoxElement>
                    <ReviewBoxElement className='font3'>{getDateText(...review.date)}</ReviewBoxElement>
                </div>
                <ReviewBoxElement>{review.comment}</ReviewBoxElement>
                <ReviewBoxElement>
                    <IconTextButton icon={like ? <FillHeartIcon width={24} height={24} /> : <EmptyHeartIcon width={24} height={24} /> } buttonWidth={80} text={likeNum} onClick={!loadLocalStorage('id') ? () => changeModal(1) : likeReview} />
                </ReviewBoxElement>
            </div>
        </ReviewBoxWrapper>
    );
}

export default ReviewBox;