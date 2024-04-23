import styled from "styled-components";
import { getColorRating } from "../../Modules/util";
import DonutChart from "../Others/DonutChart";

const TitleWrapper = styled.div.attrs(props => ({
    style: { color: props.$textcolor }
}))`
    margin-left: 20px;
`;

const Text = styled.div.attrs(props => ({
    style: { fontSize: `${props.$fontsize}rem`, color: props.$textcolor }
}))``;

const DetailInfoBoxHeader = ({textColor, backgroundColor, gameInfo, componentSize}) => {
    return (
        <div className='frow facenter'>
            <DonutChart width={componentSize.chartSize} percent={gameInfo.rating * 10} backgroundColor={getColorRating(gameInfo.rating)} centerColor={backgroundColor} textColor={textColor} />
            <TitleWrapper className='fcol fjsbetween'>
                <div className='frow facenter'>
                    <Text $fontsize={componentSize.titleFont - 0.1} $textcolor={textColor}>{gameInfo.title}</Text>
                    <Text className='margin5' $fontsize={componentSize.basicFont} $textcolor={textColor}>{`(${gameInfo.year})`}</Text>
                </div>
                <Text $fontsize={componentSize.basicFont - 0.1} $textcolor={textColor}>{gameInfo.titleEN}</Text>
                <Text $fontsize={componentSize.basicFont - 0.1} $textcolor={textColor}>{`${gameInfo.reviewers} 명이 평가함`}</Text>
            </TitleWrapper>
        </div>        
    );
}

export default DetailInfoBoxHeader;