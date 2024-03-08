import styled from "styled-components";
import { useState, useEffect } from "react";
import MainBannerImage from "./MainBannerImage";
import MainBannerButtonGroup from "./MainBannerButtonGroup";

const MainBannerWrapper = styled.div`
    position: relative;
    width: ${(props) => `${props.$windowWidth - 40}px`};
    height: 400px;
    padding: 20px 0 20px 0;
`

const imageLinks = ["/gameImg/2.png", "/gameImg/3.png", "/gameImg/5.png", "/gameImg/6.png", "/gameImg/12.png"];

const MainBanner = ({windowWidth}) => {
    const [showIndex, setShowIndex] = useState(0);
    const getZindex = (index) => (imageLinks.length - 1 + showIndex - index) % imageLinks.length;
    useEffect(() => {
        const timer = setTimeout(() => setShowIndex((showIndex + 1) % imageLinks.length), 5000);
        return () => clearTimeout(timer);
    }, [showIndex]);

    return(
        <MainBannerWrapper className="center" $windowWidth={windowWidth}>
            {imageLinks.map((data, index) => <MainBannerImage key={index} link={data} windowWidth={windowWidth} opacity={index == showIndex ? 1 : 0} zindex={getZindex(index)} />)}
            <MainBannerButtonGroup bannerArray={imageLinks} windowWidth={windowWidth} showIndex={showIndex} setShowIndex={setShowIndex} />
        </MainBannerWrapper>
    );
}

export default MainBanner;