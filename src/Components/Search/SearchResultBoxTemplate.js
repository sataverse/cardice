import SearchResultBox from "./SearchResultBox";
import SearchResultSmallBox from "./SearchResultSmallBox";

const SearchResultBoxTemplate = ({gameData, windowWidth, componentSize}) => {
    return(
        <div>
            {windowWidth >= 640 ? <SearchResultBox gameData={gameData} windowWidth={windowWidth} componentSize={componentSize} /> : <SearchResultSmallBox gameData={gameData} />}
        </div>
    );
}

export default SearchResultBoxTemplate;