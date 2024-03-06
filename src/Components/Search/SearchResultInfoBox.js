import styled from "styled-components";

const SearchResultInfoBoxWrapper = styled.div`
    width: 100px;
    height: 50px;
    margin-right: ${(props) => `${props.$marginRight}px`};
    border-radius: 10px;
    background-color: white;
`

const SearchResultInfoBoxType = styled.div`
    text-align: center;
`

const SearchResultInfoBoxText = styled.div`
    text-align: center;
    font-size: ${(props) => `${props.$fontSize}rem`};
    color: ${(props) => props.$textColor};
`

const SearchResultInfoBox = ({componentSize, type, text, color}) => {
    return(
        <SearchResultInfoBoxWrapper $marginRight={componentSize.margin}>
            <SearchResultInfoBoxType className="font2">{type}</SearchResultInfoBoxType>
            <SearchResultInfoBoxText $fontSize={componentSize.fontSize} $textColor={color}>{text}</SearchResultInfoBoxText>
        </SearchResultInfoBoxWrapper>
    );
}

export default SearchResultInfoBox;