import styled from "styled-components";
import RankIcon from "../Svg/RankIcon";

const Text = styled.div`
    margin-left: ${(props) => `${props.$margin}px`};
`

const DetailInfoBoxRanking = ({gameInfo}) => {
    return (
        <div className="frow facenter">
            <RankIcon width={20} height={20} />
            <Text $margin={10}>{'종합 순위:'}</Text>
            <Text $margin={5}>{`${gameInfo.ranking[0]}위`}</Text>
            {gameInfo.ranking[2] == 0 ? null : <Text $margin={15}>{'월간 순위:'}</Text>}
            {gameInfo.ranking[2] == 0 ? null : <Text $margin={5}>{`${gameInfo.ranking[2]}위`}</Text>}
        </div>
    );
}

export default DetailInfoBoxRanking;