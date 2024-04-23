import styled from "styled-components";
import SkeletonCard from "./SkeletonCard";

const CardSliderWrapper = styled.div`
    padding: 0 5px 0 5px;
`;

const CardSliderHeader = styled.div.attrs(props => ({
    style: { width: `${props.$sliderwidth - 20}px` }
}))`
    margin-bottom: 10px;
`;

const CardSliderTitle = styled.div.attrs(props => ({
    style: { fontSize: `${props.$fontsize}rem` }
}))`
    width: 160px;
    border-radius: 4px;
    color: var(--gray-01);
    background-color: var(--gray-01);
`;

const SkeletonCardSlider = ({title, componentSize}) => {
    const temp = [0, 0, 0, 0, 0];
    return(
        <CardSliderWrapper className='skeleton'>
            <CardSliderHeader className="center" $sliderwidth={componentSize.sliderWidth}>
                {title ? <CardSliderTitle $fontsize={componentSize.titleFont}>{'...'}</CardSliderTitle> : null}
            </CardSliderHeader>
            <div className='frow fjcenter center'>
                {temp.map((_, i) => i < componentSize.numberOfCards ? <SkeletonCard key={i} componentSize={componentSize} /> : null)}
            </div>
        </CardSliderWrapper>
    );
}

export default SkeletonCardSlider;