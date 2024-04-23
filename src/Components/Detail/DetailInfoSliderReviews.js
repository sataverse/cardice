import styled from "styled-components";
import { useState } from "react";
import { compareDate } from "../../Modules/util";
import ReviewBox from "../Others/ReviewBox";
import Pagination from "../Others/Pagination";

const SortComboBox = styled.div`
    margin: 10px 0px 10px 0px;
`;

const DetailInfoSliderReviewsWrapper = styled.div.attrs(props => ({
    style: { width: `${props.$width + 40}px` }
}))`
    padding: 5px 0 30px 0;
    flex-shrink: 0;
`;

const sortText = ['최신순', '오래된순', '평점높은순', '평점낮은순', '좋아요순'];
const sortFunc = [
    (a, b) => compareDate(a.date, b.date),
    (a, b) => compareDate(b.date, a.date),
    (a, b) => b.rating - a.rating,
    (a, b) => a.rating - b.rating,
    (a, b) => b.like - a.like,
];

const DetailInfoSliderReviews = ({reviewData, componentSize, changeModal}) => {
    const [curretSort, setCurrentSort] = useState(0);

    return(
        <div>
            <SortComboBox className='frow frowrev facenter'>
                <select className='margin10' onChange={e => setCurrentSort(e.target.value)}>
                    {sortText.map((data, i) => <option key={i} value={i}>{data}</option>)}
                </select>
                <div>{'정렬 기준'}</div>
            </SortComboBox>
            <DetailInfoSliderReviewsWrapper $width={componentSize.detailBoxWidth}>
                <Pagination pageSize={5} elements={[...[...reviewData].sort(sortFunc[curretSort]).map(data => <ReviewBox key={data.id} review={data} changeModal={changeModal} />)]}/>
            </DetailInfoSliderReviewsWrapper>
        </div>
    );
}

export default DetailInfoSliderReviews;