import styled from "styled-components";
import CardSlider from "../Card/CardSlider";

const DetailInfoSliderRecommendedGamesWrapper = styled.div`
    width: ${(props) => `${props.$width + 40}px`};
    flex-shrink: 0;
`

const DetailInfoSliderRecommendedGames = ({gameData, componentSize}) => {
    return(
        <DetailInfoSliderRecommendedGamesWrapper $width={componentSize.detailBoxWidth}>
            <CardSlider gameData={gameData} componentSize={componentSize} />
        </DetailInfoSliderRecommendedGamesWrapper>
    );
}

export default DetailInfoSliderRecommendedGames;