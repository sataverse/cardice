import IconButton from "../Others/IconButton";
import IconTextButton from "../Others/IconTextButton";
import EmptyStarIcon from "../Svg/EmptyStarIcon";
import EmptyHeartIcon from "../Svg/EmptyHeartIcon";
import YoutubeIcon from "../Svg/YoutubeIcon";

const DetailInfoBoxButtons = ({isWindowSmall, gameInfo}) => {
    return (
        <div className="frow fjsbetween">
            {isWindowSmall ? <IconTextButton icon={<YoutubeIcon width={24} height={24} />} buttonWidth={90} text={'동영상'} /> : <IconButton icon={<YoutubeIcon width={30} height={30} />} buttonWidth={30} />}
            <IconTextButton icon={<EmptyHeartIcon width={24} height={24} />} buttonWidth={90} text={gameInfo.like} />
            <IconTextButton icon={<EmptyStarIcon width={24} height={24} />} buttonWidth={90} text={'내 평가'} />
        </div>
    );
}

export default DetailInfoBoxButtons;