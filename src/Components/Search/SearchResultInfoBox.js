import styled from "styled-components";

const SearchResultInfoBoxWrapper = styled.div.attrs(props => ({
    style: { marginRight: `${props.$marginright}px` }
}))`
    width: 100px;
    height: 50px;
    border-radius: 4px;
    background-color: white;
`;

const SearchResultInfoBoxType = styled.div`
    text-align: center;
    color: #959595;
`;

const SearchResultInfoBoxText = styled.div.attrs(props => ({
    style: { fontSize: `${props.$fontsize}rem`, color: props.$textcolor }
}))`
    text-align: center;
`;

const SearchResultInfoBox = ({componentSize, type, text, color}) => {
    return(
        <SearchResultInfoBoxWrapper $marginright={componentSize.margin}>
            <SearchResultInfoBoxType className='font2'>{type}</SearchResultInfoBoxType>
            <SearchResultInfoBoxText $fontsize={componentSize.fontSize} $textcolor={color}>{text}</SearchResultInfoBoxText>
        </SearchResultInfoBoxWrapper>
    );
}

export default SearchResultInfoBox;