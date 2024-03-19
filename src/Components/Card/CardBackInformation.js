import styled from "styled-components";
import { getColorRating, getFloatFixed } from "../../Modules/util";

const CardBackInformationWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 0;
    border-radius: 0 0 8px 8px;
    background-color: rgba(0, 0, 0, 0.85);
`

const Text = styled.div`
    color: ${(props) => props.$textColor};
`

const CardBackInformation = ({gameInfo}) => {
    return(
        <CardBackInformationWrapper className="fcol fjsaround">
            <Text className="center" $textColor={'#ffffff'}>{gameInfo.title}</Text>
            <div className="frow fjcenter">
                <Text $textColor={getColorRating(gameInfo.rating)}>{`★ ${getFloatFixed(gameInfo.rating, 1)}`}</Text>
                <Text $textColor={'#ffffff'}>{' ┃ '}</Text>
                <Text $textColor={'var(--red-00)'}>{`♥ ${gameInfo.like}`}</Text>
            </div>
        </CardBackInformationWrapper>
    );
}

export default CardBackInformation;