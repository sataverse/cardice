import styled from "styled-components";
import { useState, useEffect } from "react";
import MainBannerImage from "./MainBannerImage";
import MainBannerButtonGroup from "./MainBannerButtonGroup";

const MainBannerWrapper = styled.div`
    position: relative;
    width: 100%;
    height: ${(props) => `${props.$windowWidth * 1 / 4}px`};
`

const imageLinks = ["/bannerImg/main1.png", "/bannerImg/main2.png", "/bannerImg/main3.png", "/bannerImg/main4.png", "/bannerImg/main5.png"];

const MainBanner = ({windowWidth}) => {
    const [showIndex, setShowIndex] = useState(0);
    const getZindex = (index) => (imageLinks.length - 1 + showIndex - index) % imageLinks.length;
    useEffect(() => {
        const timer = setTimeout(() => setShowIndex((showIndex + 1) % imageLinks.length), 5000);
        return () => clearTimeout(timer);
    }, [showIndex]);

    return(
        <MainBannerWrapper className="center" $windowWidth={windowWidth}>
            {imageLinks.map((data, index) => <MainBannerImage key={index} link={data} opacity={index === showIndex ? 1 : 0} zindex={getZindex(index)} />)}
            <MainBannerButtonGroup bannerArray={imageLinks} showIndex={showIndex} setShowIndex={setShowIndex} />
        </MainBannerWrapper>
    );
}

export default MainBanner;