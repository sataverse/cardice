import styled from "styled-components"
import MainBannerButton from "./MainBannerButton";
import LeftButton from "../Svg/LeftButton";
import RightButton from "../Svg/RightButton";

const MainBannerButtonGroupWrapper = styled.div`
    position: absolute;
    left: 50%;
    bottom: 0px;
    height: 28px;
    transform: translate(-50%, -50%);
    border-radius: 28px;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 98;
`

const MainBannerMoveButtonWrapper = styled.button`
    width: 28px;
    height: 28px;
    margin: 0 10px 0 10px;
    padding: 0;
    background-color: transparent;
`

const MainBannerButtonGroup = ({bannerArray, showIndex, setShowIndex}) => {
    const increaseShowIndex = () => setShowIndex((showIndex + 1) % bannerArray.length);
    const decreaseShowIndex = () => setShowIndex((showIndex === 0) ? bannerArray.length - 1 : showIndex - 1);

    return(
        <MainBannerButtonGroupWrapper className="frow facenter">
            <MainBannerMoveButtonWrapper onClick={() => decreaseShowIndex()}>
                <LeftButton width={28} height={28} color={'#ffffff'} />
            </MainBannerMoveButtonWrapper>
            {bannerArray.map((_, index) => <MainBannerButton key={index} buttonColor={showIndex === index ? 'var(--main-02)' : 'white'} setShowIndex={() => setShowIndex(index)} />)}
            <MainBannerMoveButtonWrapper onClick={() => increaseShowIndex()}>
                <RightButton width={28} height={28} color={'#ffffff'} />
            </MainBannerMoveButtonWrapper>
        </MainBannerButtonGroupWrapper>
    );
}

export default MainBannerButtonGroup;