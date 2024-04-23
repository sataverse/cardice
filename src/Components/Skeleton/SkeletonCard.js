import styled from "styled-components";

const CardWrapper = styled.div.attrs(props => ({
    style: {
        width: `${props.$cardwidth}px`,
        height: `${props.$cardwidth * 1.2}px`,
        marginBottom: `${props.$marginbottom}px`
    }
}))`
    margin: 0px 10px 0px 10px;
    border-radius: 4px;
    background-color: var(--gray-01);
`;

const SkeletonCard = ({componentSize, marginBottom}) => {
    return (
        <CardWrapper $cardwidth={componentSize.cardWidth} $marginbottom={marginBottom} />
    );
}

export default SkeletonCard;