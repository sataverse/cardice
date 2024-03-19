import styled from "styled-components";
import { useNavigate } from "react-router";
import {getFloatFixed, getRangeText, getColorRating, getColorWeight, getTextWeight} from "../../Modules/util";
import SearchResultInfoSmallBox from "./SearchResultInfoSmallBox";

const SearchResultBoxWrapper = styled.div`
    height: 160px;
    margin: 20px 0 20px 0;
    padding: 0 10px 0 10px;
    border-radius: 10px;
    background-color: var(--gray-02);
`

const SearchResultImage = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 10px;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    background-image: ${(props) => `url(${props.$imgURL})`};
`

const SearchResultInfosWrapper = styled.div`
    width: 260px;
    height: 140px;
`

const SearchResultButton = styled.button`
    color: var(--blue-00);
    background-color: transparent;
`

const SearchResultSmallBox = ({gameData}) => {
    const navigate = useNavigate();
    const openYoutube = () => window.open(gameData.youtube, '_blank', 'noopener, noreferrer');
    return(
        <SearchResultBoxWrapper className="frow fjsbetween facenter">
            <SearchResultImage $imgURL={gameData.image} />
            <SearchResultInfosWrapper className="fcol fjsbetween">
                <div className="font5">{gameData.title}</div>
                <div className="fcol">
                    <SearchResultInfoSmallBox type={'평점'} text={`★ ${getFloatFixed(gameData.rating, 1)}`} color={getColorRating(gameData.rating)} />
                    <SearchResultInfoSmallBox type={'인원'} text={getRangeText(gameData.player[0], gameData.player[1]) + '인'} color={getColorWeight(0)} />
                    <SearchResultInfoSmallBox type={'플레이 시간'} text={getRangeText(gameData.playTime[0], gameData.playTime[1]) + '분'} color={getColorWeight(0)} />
                    <SearchResultInfoSmallBox type={'난이도'} text={getTextWeight(gameData.weight)} color={getColorWeight(gameData.weight)} />
                </div>
                <div className="frow fjsbetween">
                    <SearchResultButton className="font3" onClick={() => openYoutube()}>{'설명영상'}</SearchResultButton>
                    <SearchResultButton className="font3" onClick={() => navigate(`/detail?id=${gameData.id}`)}>{'자세히보기'}</SearchResultButton>
                </div>
            </SearchResultInfosWrapper>
        </SearchResultBoxWrapper>
    );
}

export default SearchResultSmallBox;