import styled from "styled-components";

const GameIntroductionWrapper = styled.div`
    margin-top: 8px;
    font-size: ${(props) => `${props.$fontSize}rem`};
    text-align: justify;
`

const Text = styled.div`
    font-size: ${(props) => `${props.$fontSize}rem`};
`

const DetailInfoBoxIntroduction = ({gameInfo, componentSize}) => {
    return (
        <>
            <div className="frow">
                <Text className="shrink0" $fontSize={componentSize.basicFont}>{'디자이너 : '}</Text>
                <Text className="margin5" $fontSize={componentSize.basicFont}>{gameInfo.designer}</Text>
            </div>
            <GameIntroductionWrapper $fontSize={componentSize.basicFont}>{gameInfo.introduction}</GameIntroductionWrapper>
        </>
    );
}

export default DetailInfoBoxIntroduction;