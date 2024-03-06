import styled from "styled-components";

const GameSystemButtonsWrapper = styled.div`
    margin-top: 4px;
`

const GameSystemButton = styled.div`
    margin-right: 10px;
    padding: 2px 8px 2px 8px;
    border-radius: 10px;
    text-align: center;
    background-color: white;
    &:hover {
        cursor: pointer;
    }
`

const Text = styled.div`
    font-size: ${(props) => `${props.$fontSize}rem`};
`

const DetailInfoBoxGameSystems = ({gameInfo, componentSize}) => {
    return (
        <>
            <Text $fontSize={componentSize.basicFont}>{'게임 시스템'}</Text>
            <GameSystemButtonsWrapper className="frow">
                {gameInfo.system.map((text, index) => <GameSystemButton key={index}>{text}</GameSystemButton>)}
            </GameSystemButtonsWrapper>
        </>
    );
}

export default DetailInfoBoxGameSystems;