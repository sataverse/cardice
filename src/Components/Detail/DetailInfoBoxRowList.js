import styled from "styled-components";
import {getRangeText, getColorWeight, getTextWeight} from "../../Modules/util";

const DetailInfoRowListWrapper = styled.div`
    margin-top: 4px;
    padding: 4px 2px 4px 2px;
    border-radius: 4px;
    background-color: white;
`;

const DetailInfoRowListElement = styled.div.attrs(props => ({
    style: { margin: props.$margin }
}))``;

const Text = styled.div.attrs(props => ({
    style: { fontSize: `${props.$fontsize}rem`, color: props.$textcolor }
}))``;

const DetailInfoBoxRowList = ({type, gameInfo, componentSize}) => {
    return (
        <>
            <Text $fontsize={componentSize.basicFont}>{type}</Text>
            <div className='frow'>
                <DetailInfoRowListWrapper className='frow'>
                    <DetailInfoRowListElement key={0} $margin={componentSize.rowListMargin}>
                        <Text $fontsize={componentSize.basicFont - 0.1} $textcolor={'#959595'}>{'연령'}</Text>
                        <Text $fontsize={componentSize.basicFont}>{`${gameInfo.age}세 이상`}</Text>
                    </DetailInfoRowListElement>
                    <DetailInfoRowListElement key={1} $margin={componentSize.rowListMargin}>
                        <Text $fontsize={componentSize.basicFont - 0.1} $textcolor={'#959595'}>{'인원'}</Text>
                        <Text $fontsize={componentSize.basicFont}>{`${getRangeText(gameInfo.player[0], gameInfo.player[1])}명 (추천 ${getRangeText(gameInfo.player[2], gameInfo.player[3])}명)`}</Text>
                    </DetailInfoRowListElement>
                    <DetailInfoRowListElement key={2} $margin={componentSize.rowListMargin}>
                        <Text $fontsize={componentSize.basicFont - 0.1} $textcolor={'#959595'}>{'플레이 시간'}</Text>
                        <Text $fontsize={componentSize.basicFont}>{`${getRangeText(gameInfo.playTime[0], gameInfo.playTime[1])}분`}</Text>
                    </DetailInfoRowListElement>
                    <DetailInfoRowListElement key={3} $margin={componentSize.rowListMargin}>
                        <Text $fontsize={componentSize.basicFont - 0.1} $textcolor={'#959595'}>{'난이도'}</Text>
                        <Text $fontsize={componentSize.basicFont} $textcolor={getColorWeight(gameInfo.weight)}>{getTextWeight(gameInfo.weight)}</Text>
                    </DetailInfoRowListElement>
                </DetailInfoRowListWrapper>
            </div>
        </>
    );
}

export default DetailInfoBoxRowList;