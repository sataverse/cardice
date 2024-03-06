import styled from "styled-components";
import {getRangeText, getColorWeight, getTextWeight} from "../../Modules/util";

const DetailInfoRowListWrapper = styled.div`
    padding: 2px 0 2px 0;
    border-top: 2px solid var(--gray-01);
    border-bottom: 2px solid var(--gray-01);
`

const DetailInfoRowListElement = styled.div`
    margin: ${(props) => props.$margin};
`

const Text = styled.div`
    font-size: ${(props) => `${props.$fontSize}rem`};
    color: ${(props) => props.$textColor};
`

const DetailInfoBoxRowList = ({gameInfo, componentSize}) => {
    return (
        <>
            <Text $fontSize={componentSize.basicFont}>{'플레이 정보'}</Text>
            <DetailInfoRowListWrapper className="frow">
                <DetailInfoRowListElement $margin={componentSize.rowListMargin}>
                    <Text $fontSize={componentSize.basicFont - 0.1}>{'연령'}</Text>
                    <Text $fontSize={componentSize.basicFont}>{`${gameInfo.age}세 이상`}</Text>
                </DetailInfoRowListElement>
                <DetailInfoRowListElement $margin={componentSize.rowListMargin}>
                    <Text $fontSize={componentSize.basicFont - 0.1}>{'인원'}</Text>
                    <Text $fontSize={componentSize.basicFont}>{`${getRangeText(gameInfo.player[0], gameInfo.player[1])}명 (추천 ${getRangeText(gameInfo.player[2], gameInfo.player[3])}명)`}</Text>
                </DetailInfoRowListElement>
                <DetailInfoRowListElement $margin={componentSize.rowListMargin}>
                    <Text $fontSize={componentSize.basicFont - 0.1}>{'플레이 시간'}</Text>
                    <Text $fontSize={componentSize.basicFont}>{`${getRangeText(gameInfo.playTime[0], gameInfo.playTime[1])}분`}</Text>
                </DetailInfoRowListElement>
                <DetailInfoRowListElement $margin={componentSize.rowListMargin}>
                    <Text $fontSize={componentSize.basicFont - 0.1}>{'난이도'}</Text>
                    <Text $fontSize={componentSize.basicFont} $textColor={getColorWeight(gameInfo.weight)}>{getTextWeight(gameInfo.weight)}</Text>
                </DetailInfoRowListElement>
            </DetailInfoRowListWrapper>
        </>
        
    );
}

export default DetailInfoBoxRowList;