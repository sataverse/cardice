import styled from "styled-components";
import CardGrid from "../Card/CardGrid";
import { getColorRating } from "../../Modules/util";
import SkeletonCardGrid from "../Skeleton/SkeletonCardGrid";

const ScoreText = styled.div.attrs(props => ({
    style: { width: `${props.$textwidth}px`, color: props.$fontcolor }
}))`
    height: 30px;
    margin-top: 5px;
    margin-bottom: 5px;
    border-top: 2px solid var(--gray-01);
`;

const UserReview = ({gameData, componentSize}) => {
    return(
        <>
            {!gameData ? <SkeletonCardGrid componentSize={componentSize} /> : gameData.map((item, idx) => {
                return(
                    <div key={idx}>
                        <ScoreText className='font7 center' $textwidth={componentSize.gridWidth} $fontcolor={getColorRating(10 - idx)}>{`★ ${10 - idx}`}</ScoreText>
                        <CardGrid gameData={item} componentSize={componentSize} posX={0} />
                    </div>
                );
            })}
        </>
    );
}

export default UserReview;