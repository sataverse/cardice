import styled from "styled-components";
import { useRef, useEffect } from "react";
import SearchResultBoxTemplate from "./SearchResultBoxTemplate";
import SkeletonSearchResults from "../Skeleton/SkeletonSearchResults";

const SearchResultsWrapper = styled.div.attrs(props => ({
    style: { width: `${props.$width}px` }
}))``;

const NumberOfSearchResults = styled.div`
    margin-top: 20px;
    text-align: center;
    color: #959595;
`;

const SearchResults = ({gameData, windowWidth, componentSize, renderNum, setRenderNum}) => {
    const target = useRef(null);
    
    useEffect(() => {
        observer.observe(target.current);
    }, []);

    const observer = new IntersectionObserver(() => setRenderNum(renderNum => renderNum + 2), { rootMargin: '80px', threshold: 0.1 });

    return(
        <SearchResultsWrapper className='center' $width={componentSize.infoBoxWidth}>
            <NumberOfSearchResults className='font6'>{`총 ${!gameData ? 0 : gameData.length}건의 검색 결과가 있습니다`}</NumberOfSearchResults>
            {!gameData ? <SkeletonSearchResults windowWidth={windowWidth} componentSize={componentSize} /> : gameData.map((data, index) => index < renderNum ? <SearchResultBoxTemplate key={data.id} gameData={data} windowWidth={windowWidth} componentSize={componentSize} /> : null)}
            <div ref={target}></div>
        </SearchResultsWrapper>
    );
}

export default SearchResults;