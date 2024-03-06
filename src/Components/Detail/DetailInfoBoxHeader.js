import styled from "styled-components";
import {getFloatFixed, getColorRating} from "../../Modules/util";
import RatingStar from "../Svg/RatingStar";

const TitleWrapper = styled.div`
    margin-left: 20px;
    color: ${(props) => props.$textColor};
`

const Text = styled.div`
    font-size: ${(props) => `${props.$fontSize}rem`};
    color: ${(props) => props.$textColor};
`

const DetailInfoBoxHeader = ({textColor, gameInfo, componentSize}) => {
    return (
        <div className="frow facenter">
            <RatingStar width={componentSize.starSize} height={componentSize.starSize} color={getColorRating(gameInfo.rating)} rating={getFloatFixed(gameInfo.rating, 1)} posX={34} />
            <TitleWrapper className="fcol fjsbetween">
                <div className="frow facenter">
                    <Text $fontSize={componentSize.titleFont - 0.1} $textColor={textColor}>{gameInfo.title}</Text>
                    <Text className="margin5" $fontSize={componentSize.basicFont} $textColor={textColor}>{`(${gameInfo.year})`}</Text>
                </div>
                <Text $fontSize={componentSize.basicFont - 0.1} $textColor={textColor}>{gameInfo.titleEN}</Text>
                <Text $fontSize={componentSize.basicFont - 0.1} $textColor={textColor}>{`${gameInfo.reviewers} 명이 평가함`}</Text>
            </TitleWrapper>
        </div>        
    );
}

export default DetailInfoBoxHeader;