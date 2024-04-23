import styled from "styled-components";
import { getRangeText, getTextWeight } from "../../Modules/util";
import { TimeIcon, PlayerIcon, CardIcon  } from "../Svg/CardIcon";

const CardBackInformationWrapper = styled.div`
    position: absolute;
    width: 120px;
    height: 90px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const IconWrapper = styled.div`
    width: 20px;
    height: 20px;
`;

const Text = styled.div`
    color: white;
`;

const CardBackInformation = ({gameInfo}) => {
    return(
        <CardBackInformationWrapper className='fcol fjsbetween'>
            <div className='frow fjsbetween facenter'>
                <IconWrapper>
                    <PlayerIcon width={20} height={20} />
                </IconWrapper>
                <Text>{getRangeText(gameInfo.player[0], gameInfo.player[1]) + '인'}</Text>
            </div>
            <div className='frow fjsbetween facenter'>
                <IconWrapper>
                    <TimeIcon width={20} height={20} />
                </IconWrapper>
                <Text>{getRangeText(gameInfo.playTime[0], gameInfo.playTime[1]) + '분'}</Text>
            </div>
            <div className='frow fjsbetween facenter'>
                <IconWrapper>
                    <CardIcon width={20} height={20} />
                </IconWrapper>
                <Text>{getTextWeight(gameInfo.weight) + ' 단계'}</Text>
            </div>
        </CardBackInformationWrapper>
    );
}

export default CardBackInformation;