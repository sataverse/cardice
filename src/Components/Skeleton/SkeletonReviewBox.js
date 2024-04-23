import styled from "styled-components";
import RatingStar from "../Svg/RatingStar";

const ReviewBoxWrapper = styled.div`
    padding: 10px;
    border-top: 2px solid var(--gray-01);
`;

const ReviewBoxElement = styled.div`
    margin-left: 12px;
    border-radius: 4px;
    text-align: justify;
    color: var(--gray-01);
    background-color: var(--gray-01);
`;

const SkeletonReviewBox = () => {
    const temp = '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';

    return(
        <ReviewBoxWrapper className='frow skeleton'>
                <RatingStar width={60} height={60} color={'var(--gray-02)'} rating={' '} posX={36}/>
            <div className='fcol fjsbetween'>
                <div className='frow facenter'>
                    <ReviewBoxElement className='noselect'>{'닉네임'}</ReviewBoxElement>
                    <ReviewBoxElement className='noselect'>{'0000-00-00 00:00'}</ReviewBoxElement>
                </div>
                <ReviewBoxElement >{temp}</ReviewBoxElement>
            </div>
        </ReviewBoxWrapper>
    );
}

export default SkeletonReviewBox;