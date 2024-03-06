import styled from "styled-components";

const SearchResultInfoSmallBoxType = styled.div`
    width: 100px;
`

const SearchResultInfoSmallBoxText = styled.div`
    width: 150px;
    color: ${(props) => props.$textColor};
`

const SearchResultInfoSmallBox = ({type, text, color}) => {
    return(
        <div className="frow">
            <SearchResultInfoSmallBoxType className="font3">{type}</SearchResultInfoSmallBoxType>
            <SearchResultInfoSmallBoxText className="font3" $textColor={color}>{text}</SearchResultInfoSmallBoxText>
        </div>
    );
}

export default SearchResultInfoSmallBox;