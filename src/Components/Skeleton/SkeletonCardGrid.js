import styled from "styled-components";
import SkeletonCard from "./SkeletonCard";

const CardGridWrapper = styled.div.attrs(props => ({
    style: { flexBasis: `${props.$gridwidth}px` }
}))`
    flex-shrink: 0;
    align-content: flex-start;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const SkeletonCardGrid = ({componentSize}) => {
    const temp = new Array(20).fill(false);
    return(
        <CardGridWrapper className='frow fwrap skeleton' $gridwidth={componentSize.gridWidth}>
            {temp.map((_, i) => i >= componentSize.numberOfCards * 3 ? null : <SkeletonCard key={i} componentSize={componentSize} marginBottom={20} />)} 
        </CardGridWrapper>
    );
}

export default SkeletonCardGrid;