import styled from "styled-components";
import { EmptyStarIcon, FillStarIcon } from "../Svg/ButtonIcon";

const StarButtonWrapper = styled.button`
    width: 36px;
    height: 36px;
    margin: 0 2px 0 2px;
    padding: 0;
    background-color: transparent;
`;

const StarButton = ({isOn, setRating}) => {
    return (
        <StarButtonWrapper onClick={() => setRating()}>
            {isOn ? <FillStarIcon width={36} height={36} /> : <EmptyStarIcon width={36} height={36} />}
        </StarButtonWrapper>
    );
}

const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const StarButtons = ({currentRating, setCurrentRating}) => {
    return (
        <div className='frow center'>
            {scores.map((data, idx) => <StarButton key={idx} isOn={currentRating >= data} setRating={() => setCurrentRating(data)} />)}
        </div>
    );
}

export default StarButtons;