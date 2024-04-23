import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { preventScroll, allowScroll } from '../../Modules/util'
import StarButtons from '../Others/StarButtons'

const ModalBackgroundWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(58, 58, 58, 0.7);
    z-index: 100;
`;

const ModalWrapper = styled.div`
    position: relative;
    width: 480px;
    top: 50%;
    left: 49.5%;
    padding: 30px 0 30px 0;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    background-color: white;
`;

const Text = styled.div`
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center; 
`;

const Box = styled.div`
    padding: 10px 0 10px 0;
    width: 420px;
    height: 240px;
    border: 2px solid var(--gray-01);
    border-radius: 4px;
    background-color: var(--gray-02);
`;

const CommentTextArea = styled.textarea`
    width: 400px;
    height: 200px;
    margin-top: 16px;
    border: 0;
    text-align: justify;
    background-color: transparent;
    resize: none;
    outline: none;
`;

const ModalButton = styled.button`
    margin: 30px 30px 0 30px;
    color: ${(props) => props.$textColor};
    background-color: transparent;
`;

const Divider = styled.div`
    width: 2px;
    height: 30px;
    margin: 30px 10px 0 10px;
    background-color: var(--gray-01);
`;

const DetailInfoReviewModal = ({myReview, saveReview, deleteReview, closeModal}) => {
    const [currentRating, setCurrentRating] = useState(!myReview ? 0 : myReview.rating);
    const [currentComment, setCurrentComment] = useState(!myReview ? '' : myReview.comment);

    useEffect(() => {
        const prevScrollY = preventScroll();
        return () => allowScroll(prevScrollY);
    }, []);

    return(
        <ModalBackgroundWrapper>
            <ModalWrapper>
            <Text className='font7'>{'내 평가'}</Text>
                <Box className='fcol center'>
                    <StarButtons currentRating={currentRating} setCurrentRating={setCurrentRating} />
                    <CommentTextArea className='center' placeholder='코멘트를 남겨보세요.' value={currentComment} onChange={e => setCurrentComment(e.target.value)} />
                </Box>
                <div className='frow fjcenter'>
                    {!myReview ? null : <ModalButton className='font6' $textColor={'var(--red-00)'} onClick={() => deleteReview()}>{'삭제'}</ModalButton>}
                    {!myReview ? null : <Divider /> }
                    <ModalButton className='font6' $textColor={'#959595'} onClick={() => saveReview(currentRating, currentComment)}>{'저장'}</ModalButton>
                    <Divider />
                    <ModalButton className='font6' $textColor={'#959595'} onClick={() => closeModal()}>{'닫기'}</ModalButton>
                </div>
            </ModalWrapper>
        </ModalBackgroundWrapper>
    );
}

export default DetailInfoReviewModal;