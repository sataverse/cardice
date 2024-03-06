import styled from "styled-components";
import { useRef, useEffect } from "react";
import SearchResultBoxTemplate from "./SearchResultBoxTemplate";

const SearchResultsWrapper = styled.div`
    width: ${(props) => `${props.$width}px`};
`

const NumberOfSearchResults = styled.div`
    margin-top: 20px;
    text-align: center;
    color: #959595;
`

const SearchResults = ({gameData, windowWidth, componentSize, renderNum, setRenderNum}) => {
    const target = useRef(null);
    
    useEffect(() => {
        observer.observe(target.current);
    }, []);

    const observer = new IntersectionObserver(() => setRenderNum(renderNum => renderNum + 2), { rootMargin: '80px', threshold: 0.1 });

    return(
        <SearchResultsWrapper className="center" $width={componentSize.infoBoxWidth}>
            <NumberOfSearchResults className="font6">{`총 ${gameData.length}건의 검색 결과가 있습니다!`}</NumberOfSearchResults>
            {gameData.map((data, index) => index < renderNum ? <SearchResultBoxTemplate key={index + 1} gameData={data} windowWidth={windowWidth} componentSize={componentSize} /> : null)}
            <div ref={target}></div>
        </SearchResultsWrapper>
    );
}

export default SearchResults;