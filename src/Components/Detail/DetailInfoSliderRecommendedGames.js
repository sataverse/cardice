import styled from "styled-components";
import CardSlider from "../Card/CardSlider";
import SkeletonCardSlider from "../Skeleton/SkeletonCardSlider";

const DetailInfoSliderRecommendedGamesWrapper = styled.div.attrs(props => ({
    style: { width: `${props.$width + 40}px` }
}))`
    flex-shrink: 0;
`;

const DetailInfoSliderRecommendedGames = ({gameData, componentSize}) => {
    return(
        <DetailInfoSliderRecommendedGamesWrapper $width={componentSize.detailBoxWidth}>
            {!gameData ? <SkeletonCardSlider title={false} componentSize={componentSize} /> : <CardSlider gameData={gameData} componentSize={componentSize} buttonColor={'var(--main-01)'} />}
        </DetailInfoSliderRecommendedGamesWrapper>
    );
}

export default DetailInfoSliderRecommendedGames;