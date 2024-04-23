import styled from "styled-components";

const BannerImage = styled.img.attrs(props => ({ 
    style: { opacity: props.$opacity, zIndex: props.$zindex }
}))`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: var(--gray-02);
    transition-property: opacity;
    transition-duration: 1s;
`;

const MainBannerImage = ({link, opacity, zindex}) => {
    return(
        <BannerImage src={link} $opacity={opacity} $zindex={zindex} />
    );
}

export default MainBannerImage;
