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

const DetailInfoBoxElement = styled.div.attrs(props => ({
    style: { width: `${props.$width}px`, height: `${props.$height}px` }
}))`
    margin: 10px 5px 10px 5px;
    border-radius: 4px;
    background-color: white;
`;

const DetailInfoBoxLeftWrapper = styled.div`
    flex-basis: 740px;
    flex-shrink: 1;
    margin-right: 20px;
`;

const DetailInfoBoxRightWrapper = styled.div`
    flex-basis: 200px;
    flex-shrink: 0;
`;

const SkeletonDetailBox = ({componentSize}) => {
    return(
        <DetailInfoBoxWrapper className='frow center skeleton' $width={componentSize.detailBoxWidth}>
            <DetailInfoBoxLeftWrapper className='fcol'>
                <DetailInfoBoxElement $width={240} $height={32} />
                <DetailInfoBoxElement $width={340} $height={100} />
                <DetailInfoBoxElement $width={400} $height={80} />
                <div className='frow'>
                    <DetailInfoBoxElement $width={90} $height={32} />
                    <DetailInfoBoxElement $width={90} $height={32} />
                    <DetailInfoBoxElement $width={90} $height={32} />
                </div>
            </DetailInfoBoxLeftWrapper>
            <DetailInfoBoxRightWrapper>
                <DetailInfoBoxElement $width={200} $height={200} />
            </DetailInfoBoxRightWrapper>
        </DetailInfoBoxWrapper>
    );
}

export default SkeletonDetailBox;