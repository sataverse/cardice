import styled from "styled-components";

const Type = styled.div.attrs(props => ({
    style: { fontSize: `${props.$fontsize}rem` }
}))``;

const ElementsWrapper = styled.div`
    margin-top: 4px;
`;

const Element = styled.div.attrs(props => ({
    style: { fontSize: `${props.$fontsize}rem` }
}))`
    margin-right: 10px;
    padding: 4px 8px 4px 8px;
    border-radius: 4px;
    text-align: center;
    background-color: white;
`;

const DetailInfoBoxMultiElement = ({type, info, componentSize}) => {
    return (
        <>
            <Type $fontsize={componentSize.basicFont}>{type}</Type>
            <ElementsWrapper className='frow'>
                {info.map((item, index) => <Element key={index} $fontsize={componentSize.basicFont}>{item}</Element>)}
            </ElementsWrapper>
        </>
    );
}

export default DetailInfoBoxMultiElement;