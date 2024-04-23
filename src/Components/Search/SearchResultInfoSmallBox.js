import styled from "styled-components";

const SearchResultInfoSmallBoxType = styled.div`
    width: 100px;
    color: #959595;
`;

const SearchResultInfoSmallBoxText = styled.div.attrs(props => ({
    style: { color: props.$textcolor }
}))`
    width: 150px;
`;

const SearchResultInfoSmallBox = ({type, text, color}) => {
    return(
        <div className='frow'>
            <SearchResultInfoSmallBoxType className='font3'>{type}</SearchResultInfoSmallBoxType>
            <SearchResultInfoSmallBoxText className='font3' $textcolor={color}>{text}</SearchResultInfoSmallBoxText>
        </div>
    );
}

export default SearchResultInfoSmallBox;