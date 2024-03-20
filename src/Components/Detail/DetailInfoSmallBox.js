import styled from "styled-components";
import DetailInfoBoxRanking from "./DetailInfoBoxRanking";
import DetailInfoBoxHeader from "./DetailInfoBoxHeader";
import DetailInfoBoxIntroduction from "./DetailInfoBoxIntroduction";
import DetailInfoBoxRowList from "./DetailInfoBoxRowList";
import DetailInfoBoxGameSystems from "./DetailInfoBoxGameSystems";
import DetailInfoBoxImage from "./DetailInfoBoxImage";
import DetailInfoBoxButtons from "./DetailInfoBoxButtons";

const DetailInfoBoxWrapper = styled.div`
    width: ${(props) => `${props.$width}px`};
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
    background-color: var(--gray-02);
`

const TitleAndImageWrapper = styled.div`
    margin: 10px 0 10px 0;
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
    background-color: var(--gray-00);
` 

const DetailInfoBoxElement = styled.div`
    margin: 10px 0 10px 0;
`

const DetailInfoHeader = styled.div`
    margin-bottom: 20px;
`

const DetailInfoButtons = styled.div`
    width: 300px;
    margin-top: 20px;
`

const DetailInfoSmallBox = ({gameInfo, componentSize}) => {
    return(
        <DetailInfoBoxWrapper className="fcol center" $width={componentSize.detailBoxWidth}>
            <DetailInfoBoxRanking gameInfo={gameInfo} />
            <TitleAndImageWrapper>
                <DetailInfoHeader>
                    <DetailInfoBoxHeader textColor={'var(--gray-02)'} gameInfo={gameInfo} componentSize={componentSize} />
                </DetailInfoHeader>
                <DetailInfoBoxElement className="frow fjcenter">
                    <DetailInfoBoxImage width={300} link={gameInfo.image} />
                </DetailInfoBoxElement>
                <DetailInfoButtons className="center">
                    <DetailInfoBoxButtons isWindowSmall={true} gameInfo={gameInfo} />
                </DetailInfoButtons>
            </TitleAndImageWrapper>
            <DetailInfoBoxElement>
                <DetailInfoBoxIntroduction gameInfo={gameInfo} componentSize={componentSize} />
            </DetailInfoBoxElement>
            <DetailInfoBoxElement>
                <DetailInfoBoxRowList gameInfo={gameInfo} componentSize={componentSize} />
            </DetailInfoBoxElement>
            <DetailInfoBoxElement>
                <DetailInfoBoxGameSystems gameInfo={gameInfo} componentSize={componentSize} />
            </DetailInfoBoxElement>
        </DetailInfoBoxWrapper>
    );
}

export default DetailInfoSmallBox;