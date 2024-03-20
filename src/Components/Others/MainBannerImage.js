import styled from "styled-components";

const BannerImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: var(--gray-02);
    opacity: ${(props) => props.$opacity};
    z-index: ${(props) => props.$zindex};
    transition-property: opacity;
    transition-duration: 1s;
`

const MainBannerImage = ({link, opacity, zindex}) => {
    return(
        <BannerImage src={link} $opacity={opacity} $zindex={zindex} />
    );
}

export default MainBannerImage;
