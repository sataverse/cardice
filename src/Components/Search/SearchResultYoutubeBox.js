import styled from "styled-components";

const SearchResultInfoBoxWrapper = styled.button`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    padding: 0;
    border-radius: 4px;
`;

const SearchResultYoutubeBox = ({width, height, onClick}) => {
    return(
        <SearchResultInfoBoxWrapper $width={width} $height={height} onClick={() => onClick()}>
            <svg width={width} height={height} viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="60" rx="4" fill="#FF0000"/>
                <path d="M75 28.268C76.3333 29.0378 76.3333 30.9622 75 31.732L54 43.8564C52.6667 44.6262 51 43.664 51 42.1244V17.8756C51 16.336 52.6667 15.3738 54 16.1436L75 28.268Z" fill="white"/>
            </svg>
        </SearchResultInfoBoxWrapper>
    );
}

export default SearchResultYoutubeBox;