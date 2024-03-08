import styled from "styled-components"
import MainBannerButton from "./MainBannerButton";
import LeftButton from "../Svg/LeftButton";
import RightButton from "../Svg/RightButton";

const MainBannerButtonGroupWrapper = styled.div`
    position: absolute;
    left: ${(props) => `${props.$windowWidth / 2 - (80 + 18 * props.$num)}px`};
    bottom: 40px;
    width: ${(props) => `${120 + 36 * props.$num}px`};
    height: 36px;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 98;
`

const MainBannerMoveButtonWrapper = styled.button`
    width: 36px;
    height: 36px;
    margin: 0 12px 0 12px;
    padding: 0;
    background-color: transparent;
`

const MainBannerButtonGroup = ({bannerArray, windowWidth, showIndex, setShowIndex}) => {
    const increaseShowIndex = () => setShowIndex((showIndex + 1) % bannerArray.length);
    const decreaseShowIndex = () => setShowIndex((showIndex == 0) ? bannerArray.length - 1 : showIndex - 1);

    return(
        <MainBannerButtonGroupWrapper className="frow facenter" $windowWidth={windowWidth} $num={bannerArray.length}>
            <MainBannerMoveButtonWrapper onClick={() => decreaseShowIndex()}>
                <LeftButton width={36} height={36} color={'#ffffff'} />
            </MainBannerMoveButtonWrapper>
            {bannerArray.map((_, index) => <MainBannerButton key={index} buttonColor={showIndex == index ? 'var(--main-02)' : 'white'} setShowIndex={() => setShowIndex(index)} />)}
            <MainBannerMoveButtonWrapper onClick={() => increaseShowIndex()}>
                <RightButton width={36} height={36} color={'#ffffff'} />
            </MainBannerMoveButtonWrapper>
        </MainBannerButtonGroupWrapper>
    );
}

export default MainBannerButtonGroup;