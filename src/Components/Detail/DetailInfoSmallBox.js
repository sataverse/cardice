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

const TitleAndImageWrapper = styled.div`
    margin: 10px 0 10px 0;
    padding: 10px 20px 10px 20px;
    border-radius: 4px;
    background-color: var(--gray-00);
`;

const DetailInfoBoxElement = styled.div`
    margin: 10px 0 10px 0;
`;

const DetailInfoHeader = styled.div`
    margin-bottom: 20px;
`;

const DetailInfoButtons = styled.div`
    width: 300px;
    margin-top: 20px;
`;

const DetailInfoSmallBox = ({gameInfo, myReview, componentSize, saveMyReview, changeModal}) => {
    return(
        <DetailInfoBoxWrapper className='fcol center' $width={componentSize.detailBoxWidth}>
            <DetailInfoBoxRanking gameInfo={gameInfo} />
            <TitleAndImageWrapper>
                <DetailInfoHeader>
                    <DetailInfoBoxHeader textColor={'var(--gray-02)'} backgroundColor={'var(--gray-00)'} gameInfo={gameInfo} componentSize={componentSize} />
                </DetailInfoHeader>
                <DetailInfoBoxElement className='frow fjcenter'>
                    <DetailInfoBoxImage width={300} link={gameInfo.image} />
                </DetailInfoBoxElement>
                <DetailInfoButtons className='center'>
                    <DetailInfoBoxButtons isWindowSmall={true} gameInfo={gameInfo} myReview={myReview} saveMyReview={saveMyReview} changeModal={changeModal} />
                </DetailInfoButtons>
            </TitleAndImageWrapper>
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
        </DetailInfoBoxWrapper>
    );
}

export default DetailInfoSmallBox;