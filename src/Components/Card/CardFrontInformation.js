import styled from "styled-components";
import { getColorRating } from "../../Modules/util";

const CardFrontInformationWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;
    border-radius: 0 0 4px 4px;
    background-color: rgba(0, 0, 0, 0.85);
`;

const Text = styled.div`
    height: 24px;
    padding: 0 8px 0 8px;
    color: ${(props) => props.$textColor};
    overflow: hidden;
`;

const CardFrontInformation = ({gameInfo}) => {
    return(
        <CardFrontInformationWrapper className='fcol fjsaround'>
            <Text className='center font3' $textColor={'#ffffff'}>{gameInfo.title}</Text>
            <div className='frow fjcenter'>
                <Text className='font3' $textColor={getColorRating(gameInfo.rating)}>{`${Math.round(gameInfo.rating * 10)}%`}</Text>
                <Text className='font3' $textColor={'var(--red-00)'}>{`♥ ${gameInfo.like}`}</Text>
            </div>
        </CardFrontInformationWrapper>
    );
}

export default CardFrontInformation;