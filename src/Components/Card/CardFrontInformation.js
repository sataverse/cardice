import styled from "styled-components";
import { getColorRating, getFloatFixed } from "../../Modules/util";

const CardFrontInformationWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 0;
    border-radius: 0 0 8px 8px;
    background-color: rgba(0, 0, 0, 0.85);
`

const Text = styled.div`
    height: 24px;
    padding: 0 8px 0 8px;
    color: ${(props) => props.$textColor};
    overflow: hidden;
`

const CardFrontInformation = ({gameInfo}) => {
    return(
        <CardFrontInformationWrapper className="fcol fjsaround">
            <Text className="center" $textColor={'#ffffff'}>{gameInfo.title}</Text>
            <div className="frow fjcenter">
                <Text $textColor={getColorRating(gameInfo.rating)}>{`★ ${getFloatFixed(gameInfo.rating, 1)}`}</Text>
                <Text $textColor={'var(--red-00)'}>{`♥ ${gameInfo.like}`}</Text>
            </div>
        </CardFrontInformationWrapper>
    );
}

export default CardFrontInformation;