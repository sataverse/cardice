import styled from "styled-components";

const SearchResultBoxWrapper = styled.div`
    height: 160px;
    margin: 20px 0 20px 0;
    padding: 0 20px 0 20px;
    border-radius: 4px;
    background-color: var(--gray-01);
`;

const SearchResultImage = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 4px;
    background-color: white;
`;

const SearchResultInfosWrapper = styled.div.attrs(props => ({
    style: { width: `${props.$width}px` }
}))`
    height: 140px;
`;

const SearchResultInfoBoxWrapper = styled.div.attrs(props => ({
    style: { marginRight: `${props.$marginright}px` }
}))`
    width: 100px;
    height: 50px;
    border-radius: 4px;
    background-color: white;
`;

const SkeletonSearchResultBox = ({windowWidth, componentSize}) => {
    return(
        <SearchResultBoxWrapper className='frow fjsbetween facenter skeleton'>
            <SearchResultImage />
            <SearchResultInfosWrapper className='fcol fjcenter' $width={componentSize.infoBoxWidth - 200}>
                {windowWidth < 640 ? null : (
                    <div className='frow'>
                        <SearchResultInfoBoxWrapper key={0} $marginright={componentSize.margin} />
                        <SearchResultInfoBoxWrapper key={1} $marginright={componentSize.margin} />
                        <SearchResultInfoBoxWrapper key={2} $marginright={componentSize.margin} />
                        <SearchResultInfoBoxWrapper key={3} $marginright={componentSize.margin} />
                        {windowWidth >= 840 ? <SearchResultInfoBoxWrapper key={4} $marginright={componentSize.margin} />: null}
                    </div>
                )}
            </SearchResultInfosWrapper>
        </SearchResultBoxWrapper>
    );
}

export default SkeletonSearchResultBox;