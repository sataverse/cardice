import CardGrid from "../Card/CardGrid";

const UserLike = ({gameData, componentSize}) => {
    return(
        <CardGrid gameData={gameData} componentSize={componentSize} posX={0} />
    );
}

export default UserLike;