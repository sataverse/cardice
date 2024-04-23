import styled from "styled-components";
import DetailInfoBoxRanking from "./DetailInfoBoxRanking";
import DetailInfoBoxHeader from "./DetailInfoBoxHeader";
import DetailInfoBoxSingleElement from "./DetailInfoBoxSingleElement";
import DetailInfoBoxMultiElement from "./DetailInfoBoxMultiElement";
import DetailInfoBoxRowList from "./DetailInfoBoxRowList";
import DetailInfoBoxImage from "./DetailInfoBoxImage";
import DetailInfoBoxButtons from "./DetailInfoBoxButtons";

const DetailInfoBoxWrapper = styled.div.attrs(props => ({ 
    style: { width: `${props.$width}px` }
 }))`
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 10px 20px 10px 20px;
    border-radius: 4px;
    background-color: var(--gray-02);
`;

const DetailInfoBoxLeftWrapper = styled.div`
    flex-basis: 700px;
    flex-shrink: 1;
    margin-right: 20px;
`;

const DetailInfoBoxElement = styled.div`
    margin: 10px 0 10px 0;
`;

const DetailInfoBoxRightWrapper = styled.div`
    flex-basis: 240px;
    flex-shrink: 0;
`;

const DetailInfoBox = ({gameInfo, myReview, componentSize, saveMyReview, changeModal}) => {
    return(
        <DetailInfoBoxWrapper className='frow center' $width={componentSize.detailBoxWidth}>
            <DetailInfoBoxLeftWrapper className='fcol'>
                <DetailInfoBoxElement>
                    <DetailInfoBoxRanking gameInfo={gameInfo} />
                </DetailInfoBoxElement>
                <DetailInfoBoxElement>
                    <DetailInfoBoxHeader textColor={'var(--gray-00)'} backgroundColor={'var(--gray-02)'} gameInfo={gameInfo} componentSize={componentSize} />
                </DetailInfoBoxElement>
                <DetailInfoBoxElement>
                    <DetailInfoBoxMultiElement type={'디자이너'} info={gameInfo.designer.split(',')} componentSize={componentSize} />
                </DetailInfoBoxElement>
                <DetailInfoBoxElement>
                    <DetailInfoBoxSingleElement type={'소개'} info={gameInfo.introduction} componentSize={componentSize} />
                </DetailInfoBoxElement>
                <DetailInfoBoxElement>
                    <DetailInfoBoxRowList type={'플레이 정보'} gameInfo={gameInfo} componentSize={componentSize} />
                </DetailInfoBoxElement>
                <DetailInfoBoxElement>
                    <DetailInfoBoxMultiElement type={'게임 시스템'} info={gameInfo.system} componentSize={componentSize} />
                </DetailInfoBoxElement>
            </DetailInfoBoxLeftWrapper>
            <DetailInfoBoxRightWrapper>
                <DetailInfoBoxImage width={240} link={gameInfo.image} />
                <DetailInfoBoxButtons isWindowSmall={false} gameInfo={gameInfo} myReview={myReview} saveMyReview={saveMyReview} changeModal={changeModal} />
            </DetailInfoBoxRightWrapper>
        </DetailInfoBoxWrapper>
    );
}

export default DetailInfoBox;