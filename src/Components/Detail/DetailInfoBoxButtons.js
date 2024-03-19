import IconButton from "../Others/IconButton";
import IconTextButton from "../Others/IconTextButton";
import EmptyStarIcon from "../Svg/EmptyStarIcon";
import EmptyHeartIcon from "../Svg/EmptyHeartIcon";
import YoutubeIcon from "../Svg/YoutubeIcon";

const DetailInfoBoxButtons = ({isWindowSmall, gameInfo}) => {
    const openYoutube = () => window.open(gameInfo.youtube, '_blank', 'noopener, noreferrer');
    return (
        <div className="frow fjsbetween">
            {isWindowSmall ? <IconTextButton icon={<YoutubeIcon width={24} height={24} />} buttonWidth={90} text={'동영상'} onClick={() => openYoutube()} /> : <IconButton icon={<YoutubeIcon width={30} height={30} />} buttonWidth={30} onClick={() => openYoutube()} />}
            <IconTextButton icon={<EmptyHeartIcon width={24} height={24} />} buttonWidth={90} text={gameInfo.like} onClick={() => openYoutube()} />
            <IconTextButton icon={<EmptyStarIcon width={24} height={24} />} buttonWidth={90} text={'내 평가'} onClick={() => openYoutube()} />
        </div>
    );
}

export default DetailInfoBoxButtons;