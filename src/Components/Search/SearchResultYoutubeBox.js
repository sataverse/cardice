import styled from "styled-components";

const SearchResultInfoBoxWrapper = styled.button`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    padding: 0;
    border-radius: 10px;
`

const SearchResultYoutubeBox = ({width, height, onClick}) => {
    return(
        <SearchResultInfoBoxWrapper $width={width} $height={height} onClick={() => onClick()}>
            <svg width={width} height={height} viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="60" rx="10" fill="#FF0000"/>
                <path d="M78 30L51 45.5885V14.4115L78 30Z" fill="white"/>
            </svg>
        </SearchResultInfoBoxWrapper>
    );
}

export default SearchResultYoutubeBox;