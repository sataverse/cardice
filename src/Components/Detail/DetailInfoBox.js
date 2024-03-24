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
    border-radius: 4px;
    background-color: var(--gray-02);
`

const DetailInfoBoxLeftWrapper = styled.div`
    flex-basis: 700px;
    flex-shrink: 1;
    margin-right: 20px;
`

const DetailInfoBoxElement = styled.div`
    margin: 10px 0 10px 0;
`

const DetailInfoBoxRightWrapper = styled.div`
    flex-basis: 240px;
    flex-shrink: 0;
`

const DetailInfoBox = ({gameInfo, componentSize}) => {
    return(
        <DetailInfoBoxWrapper className="frow center" $width={componentSize.detailBoxWidth}>
            <DetailInfoBoxLeftWrapper className="fcol">
                <DetailInfoBoxElement>
                    <DetailInfoBoxRanking gameInfo={gameInfo} />
                </DetailInfoBoxElement>
                <DetailInfoBoxElement>
                    <DetailInfoBoxHeader textColor={'var(--gray-00)'} gameInfo={gameInfo} componentSize={componentSize} />
                </DetailInfoBoxElement>
                <DetailInfoBoxElement>
                    <DetailInfoBoxIntroduction gameInfo={gameInfo} componentSize={componentSize} />
                </DetailInfoBoxElement>
                <DetailInfoBoxElement>
                    <DetailInfoBoxRowList gameInfo={gameInfo} componentSize={componentSize} />
                </DetailInfoBoxElement>
                <DetailInfoBoxElement>
                    <DetailInfoBoxGameSystems gameInfo={gameInfo} componentSize={componentSize} />
                </DetailInfoBoxElement>
            </DetailInfoBoxLeftWrapper>
            <DetailInfoBoxRightWrapper>
                <DetailInfoBoxImage width={240} link={gameInfo.image} />
                <DetailInfoBoxButtons isWindowSmall={false} gameInfo={gameInfo} />
            </DetailInfoBoxRightWrapper>
        </DetailInfoBoxWrapper>
    );
}

export default DetailInfoBox;