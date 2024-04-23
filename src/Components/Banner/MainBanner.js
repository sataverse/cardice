import styled from "styled-components";
import { useState, useEffect } from "react";
import MainBannerImage from "./MainBannerImage";
import MainBannerButtonGroup from "./MainBannerButtonGroup";

const MainBannerWrapper = styled.div.attrs(props => ({
    style: { height: `${props.$height}px` }
}))`
    position: relative;
    width: 100%;
`;

const imageLinks = ['/bannerImg/main1.png', '/bannerImg/main2.png', '/bannerImg/main3.png', '/bannerImg/main4.png', '/bannerImg/main5.png'];

const MainBanner = ({windowWidth}) => {
    const [showIndex, setShowIndex] = useState(0);
    const getZindex = (index) => (imageLinks.length - 1 + showIndex - index) % imageLinks.length;
    useEffect(() => {
        const timer = setTimeout(() => setShowIndex((showIndex + 1) % imageLinks.length), 5000);
        return () => clearTimeout(timer);
    }, [showIndex]);

    return(
        <MainBannerWrapper className='center' $height={windowWidth * 1 / 4}>
            {imageLinks.map((data, index) => <MainBannerImage key={index} link={data} opacity={index === showIndex ? 1 : 0} zindex={getZindex(index)} />)}
            {windowWidth > 720 ? <MainBannerButtonGroup bannerArray={imageLinks} showIndex={showIndex} setShowIndex={setShowIndex} /> : null}
        </MainBannerWrapper>
    );
}

export default MainBanner;