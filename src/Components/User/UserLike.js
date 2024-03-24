import styled from "styled-components";
import { useState } from "react";
import CardGrid from "../Card/CardGrid";

const UserLikeWrapper = styled.div`
    margin-top: 20px;
    border-top: 2px solid var(--gray-01);
`

const UserLikeOpenButton = styled.button`
    width: 100%;
    margin: 10px 0 10px 0;
`

const UserLikeGridWrapper = styled.div`
    height: ${(props) => props.$isHidden ? '0px' : `${props.$height}px`};
    overflow: hidden;
    transition-property: height;
    transition-duration: 0.5s;
`

const UserLike = ({gameData, componentSize}) => {
    const [isHidden, setHidden] = useState(true);
    const getHeight = (total, line, cardHeight) => {
        const layer = Math.ceil(total / line);
        return layer * (cardHeight + 20) - 20;
    }

    return(
        <UserLikeWrapper>
            <UserLikeOpenButton onClick={() => setHidden(!isHidden)}>{'좋아요 누른 보드게임'}</UserLikeOpenButton>
            <UserLikeGridWrapper className="center" $isHidden={isHidden} $height={getHeight(gameData.length, componentSize.numOfCards, componentSize.cardWidth * 1.2)}>
                <CardGrid gameData={gameData} componentSize={componentSize} posX={0} />
            </UserLikeGridWrapper>
        </UserLikeWrapper>
    );
}

export default UserLike;