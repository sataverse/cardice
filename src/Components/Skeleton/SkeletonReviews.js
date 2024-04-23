import styled from "styled-components";
import SkeletonReviewBox from "./SkeletonReviewBox";

const DetailInfoSliderReviewsWrapper = styled.div.attrs(props => ({
    style: { width: `${props.$width + 40}px` }
}))`
    padding: 30px 0 10px 0;
    flex-shrink: 0;
`;

const SkeletonReviews = ({componentSize}) => {
    return (
        <DetailInfoSliderReviewsWrapper $width={componentSize.detailBoxWidth}>
            <SkeletonReviewBox />
            <SkeletonReviewBox />
            <SkeletonReviewBox />
            <SkeletonReviewBox />
            <SkeletonReviewBox />
        </DetailInfoSliderReviewsWrapper>
    );
}

export default SkeletonReviews;