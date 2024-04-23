import styled from "styled-components";
import { Link } from "react-router-dom";
import {getFloatFixed, getRangeText, getColorRating, getColorWeight, getTextWeight} from "../../Modules/util";
import SearchResultInfoBox from "./SearchResultInfoBox";
import SearchResultYoutubeBox from "./SearchResultYoutubeBox";

const SearchResultBoxWrapper = styled.div`
    height: 160px;
    margin: 20px 0 20px 0;
    padding: 0 20px 0 20px;
    border-radius: 4px;
    background-color: var(--gray-02);
`;

const SearchResultImage = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 4px;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    background-image: ${(props) => `url(${props.$imgurl})`};
`;

const SearchResultInfosWrapper = styled.div.attrs(props => ({
    style: { width: `${props.$width}px` }
}))`
    height: 140px;
`;

const SearchResultButton = styled.button`
    color: var(--blue-00);
    background-color: transparent;
`;

const SystemText = styled.div`
    margin: 0 5px 0 5px;
`;

const SearchResultBox = ({gameData, windowWidth, componentSize}) => {
    const openYoutube = () => window.open(gameData.youtube, '_blank', 'noopener, noreferrer');
    return(
        <SearchResultBoxWrapper className='frow fjsbetween facenter'>
            <SearchResultImage $imgurl={gameData.image} />
            <SearchResultInfosWrapper className='fcol fjsbetween' $width={componentSize.infoBoxWidth - 200}>
                <div className='frow fjsbetween faend'>
                    <div className='font6'>{gameData.title}</div>
                </div>
                <div className='frow'>
                    <SearchResultInfoBox key={0} componentSize={componentSize} type={'평점'} text={`★ ${getFloatFixed(gameData.rating, 1)}`} color={getColorRating(gameData.rating)} />
                    <SearchResultInfoBox key={1} componentSize={componentSize} type={'인원'} text={getRangeText(gameData.player[0], gameData.player[1]) + '인'} color={getColorWeight(0)} />
                    <SearchResultInfoBox key={2} componentSize={componentSize} type={'플레이 시간'} text={getRangeText(gameData.playTime[0], gameData.playTime[1]) + '분'} color={getColorWeight(0)} />
                    <SearchResultInfoBox key={3} componentSize={componentSize} type={'난이도'} text={getTextWeight(gameData.weight)} color={getColorWeight(gameData.weight)} />
                    {windowWidth >= 840 ? <SearchResultYoutubeBox width={100} height={50} onClick={() => openYoutube()} /> : null}
                </div>
                <div className='frow fjsbetween'>
                    <div className='frow'>
                        {gameData.system.map((item, idx) => <SystemText key={idx} className='font3'>{'• ' + item}</SystemText>)}
                    </div>
                    <Link to={`/detail?id=${gameData.id}`} className='link'>
                        <SearchResultButton>{'자세히보기'}</SearchResultButton>
                    </Link>
                </div>
            </SearchResultInfosWrapper>
        </SearchResultBoxWrapper>
    );
}

export default SearchResultBox;