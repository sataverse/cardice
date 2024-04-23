import styled from "styled-components";

const Type = styled.div.attrs(props => ({
    style: { fontSize: `${props.$fontsize}rem` }
}))``;

const Element = styled.div.attrs(props => ({
    style: { fontSize: `${props.$fontsize}rem`, textAlign: props.$align }
}))`
    margin-top: 4px;
    padding: 4px 8px 4px 8px;
    border-radius: 4px;
    background-color: white;
`;

const DetailInfoBoxSingleElement = ({type, info, componentSize}) => {
    return (
        <>
            <Type $fontsize={componentSize.basicFont}>{type}</Type>
            <Element $align={'justify'} $fontsize={componentSize.basicFont}>{info}</Element>
        </>
    );
}

export default DetailInfoBoxSingleElement;