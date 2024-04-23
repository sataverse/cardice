import styled from "styled-components";
import SkeletonCardGrid from "./SkeletonCardGrid";

const CardGridSliderWrapper = styled.div`
    margin-top: 30px;
`;

const CardGridSliderButton = styled.button.attrs(props => ({
    style: { width: `${props.$width}px`, fontSize: `${props.$fontsize}rem` }
}))`
    margin-left: 20px;
    margin-right: 20px;
    background-color: transparent;
`;

const CardGridSliderBar = styled.div.attrs(props => ({
    style: { width: `${props.$width}px` }
}))`
    height: 2px;
    margin-top: 6px;
    margin-bottom: 30px;
    background-color: var(--main-01);
`;

const CardGridSliderContentsWrapper = styled.div.attrs(props => ({
    style: { width: `${props.$gridwidth}px` }
}))``;

const SkeletonCardGridSlider = ({componentSize}) => {
    return (
        <CardGridSliderWrapper>
            <div className='frow fjcenter'>
                <CardGridSliderButton $width={componentSize.buttonWidth} $fontsize={componentSize.buttonFont}>{'종합 순위'}</CardGridSliderButton>
                <CardGridSliderButton $width={componentSize.buttonWidth} $fontsize={componentSize.buttonFont}>{'일간 순위'}</CardGridSliderButton>
                <CardGridSliderButton $width={componentSize.buttonWidth} $fontsize={componentSize.buttonFont}>{'월간 순위'}</CardGridSliderButton>
            </div>
            <CardGridSliderBar className='center' $width={componentSize.buttonWidth}/>
            <CardGridSliderContentsWrapper className='frow center' $gridwidth={componentSize.gridWidth}>
                <SkeletonCardGrid key={0} componentSize={componentSize} />
            </CardGridSliderContentsWrapper>
        </CardGridSliderWrapper>
    );
}

export default SkeletonCardGridSlider;