import styled from "styled-components";
import { useState } from "react";
import { compareDate } from "../../Modules/util";
import review from "../../Data/review.json"
import ReviewBox from "../Others/ReviewBox";

const SortComboBox = styled.div`
    margin: 10px 0px 10px 0px;
`

const DetailInfoSliderReviewsWrapper = styled.div`
    width: ${(props) => `${props.$width + 40}px`};
    flex-shrink: 0;
`

const sortText = ['최신순', '오래된순', '평점높은순', '평점낮은순', '좋아요순'];
const sortFunc = [
    (a, b) => compareDate(a.date, b.date),
    (a, b) => compareDate(b.date, a.date),
    (a, b) => b.rating - a.rating,
    (a, b) => a.rating - b.rating,
    (a, b) => b.like.length - a.like.length
];

const DetailInfoSliderReviews = ({reviewIds, componentSize}) => {
    const reviewData = reviewIds.map(id => review[id]);
    const [curretSort, setCurrentSort] = useState(0);

    return(
        <div>
            <SortComboBox className="frow frowrev facenter">
                <select className="margin10" onChange={e => setCurrentSort(e.target.value)}>
                    {sortText.map((data, i) => <option value={i}>{data}</option>)}
                </select>
                <div>{'정렬 기준'}</div>
            </SortComboBox>
            <DetailInfoSliderReviewsWrapper $width={componentSize.detailBoxWidth}>
                {reviewData.sort(sortFunc[curretSort]).map((data, index) => <ReviewBox key={index} review={data} />)}
            </DetailInfoSliderReviewsWrapper>
        </div>
    );
}

export default DetailInfoSliderReviews;