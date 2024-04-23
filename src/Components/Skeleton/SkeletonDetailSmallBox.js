import styled from "styled-components";

const DetailInfoBoxWrapper = styled.div.attrs(props => ({
    style: { width: `${props.$width}px` }
}))`
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 10px 20px 10px 20px;
    border-radius: 4px;
    background-color: var(--gray-01);
`;

const TitleAndImageWrapper = styled.div`
    margin: 10px 0 10px 0;
    padding: 10px 20px 10px 20px;
    border-radius: 4px;
    background-color: var(--gray-00);
`;

const DetailInfoBoxElement = styled.div.attrs(props => ({
    style: { width: `${props.$width}px`, height: `${props.$height}px` }
}))`
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    background-color: white;
`;

const SkeletonDetailSmallBox = ({componentSize}) => {
    return(
        <DetailInfoBoxWrapper className='fcol center skeleton' $width={componentSize.detailBoxWidth}>
            <DetailInfoBoxElement className='center' $width={componentSize.detailBoxWidth} $height={32} />
            <TitleAndImageWrapper>
                <DetailInfoBoxElement className='center' $width={300} $height={300} />
            </TitleAndImageWrapper>
            <DetailInfoBoxElement $width={componentSize.detailBoxWidth} $height={100} />
            <div className='frow'>
                <DetailInfoBoxElement $width={90} $height={32} />
            </div>
        </DetailInfoBoxWrapper>
    );
}

export default SkeletonDetailSmallBox;