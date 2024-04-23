import CardGrid from "../Card/CardGrid";
import SkeletonCardGrid from "../Skeleton/SkeletonCardGrid";

const UserLike = ({gameData, componentSize}) => {
    return(
        <>
            {!gameData ? <SkeletonCardGrid componentSize={componentSize} /> : <CardGrid gameData={gameData} componentSize={componentSize} posX={0} />}
        </>
    );
}

export default UserLike;