import styled from "styled-components";
import CardGrid from "../Card/CardGrid";
import { getColorRating } from "../../Modules/util";

const ScoreText = styled.div`
    width: ${(props) => props.$textWidth}px;
    height: 30px;
    margin-top: 5px;
    margin-bottom: 5px;
    border-top: 2px solid var(--gray-01);
    color: ${(props) => props.$fontColor};
`

const UserReview = ({gameData, componentSize}) => {
    return(
        <>
            {gameData.map((item, idx) => {
                return(
                    <div>
                        <ScoreText className="font7 center" $textWidth={componentSize.gridWidth} $fontColor={getColorRating(10 - idx)}>{`★ ${10 - idx}`}</ScoreText>
                        <CardGrid gameData={item} componentSize={componentSize} posX={0} />
                    </div>
                );
            })}
        </>
    );
}

export default UserReview;