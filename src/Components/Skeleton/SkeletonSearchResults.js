import SkeletonSearchResultBox from "./SkeletonSearchResultBox";

const SkeletonSearchResults = ({windowWidth, componentSize}) => {
    return (
        <>
            <SkeletonSearchResultBox key={0} windowWidth={windowWidth} componentSize={componentSize} />
            <SkeletonSearchResultBox key={1} windowWidth={windowWidth} componentSize={componentSize} />
            <SkeletonSearchResultBox key={2} windowWidth={windowWidth} componentSize={componentSize} />
            <SkeletonSearchResultBox key={3} windowWidth={windowWidth} componentSize={componentSize} />
        </>
    );
}

export default SkeletonSearchResults;