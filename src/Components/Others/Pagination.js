import styled from "styled-components";
import { useState, useEffect } from "react";
import { LeftButton, LeftLeftButton, RightButton, RightRightButton } from "../Svg/DirectionIcon";

const PageButton = styled.button.attrs(props => ({
    style: { color: props.$iscurrent ? 'var(--gray-00)' : 'var(--gray-01)' }
}))`
    width: 30px;
    height: 30px;
    margin: 0 5px 0 5px;
    text-align: center;
    background-color: transparent;
`;

const Pagination = ({pageSize, elements}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [buttonStatus, setButtonStatus] = useState([false, false]);
    const maxPage = Math.ceil(elements.length / pageSize);
    const pageArray = Array.from({length: maxPage}, (_, index) => index + 1);

    useEffect(() => setCurrentPage(1), [elements]);
    useEffect(() => {
        const tempStatus = [false, false];
        if(Math.floor((currentPage - 1) / 10) > 0) {
            tempStatus[0] = true;
        }
        if(Math.floor((currentPage - 1) / 10) < Math.floor((maxPage - 1) / 10)) {
            tempStatus[1] = true;
        }
        setButtonStatus(tempStatus);
    }, [currentPage]);

    return(
        <>
            {elements.filter((_, index) => index >= (currentPage - 1) * pageSize && index < currentPage * pageSize)}
            <div className='frow fjcenter facenter'>
                {buttonStatus[0] ? <PageButton onClick={() => setCurrentPage(1)}><LeftLeftButton width={30} height={30} color={'var(--main-01)'} /></PageButton> : null}
                {buttonStatus[0] ? <PageButton onClick={() => setCurrentPage(currentPage - ((currentPage - 1) % 10) - 10)}><LeftButton width={30} height={30} color={'var(--main-01)'} /></PageButton> : null}
                {pageArray.filter(data => Math.ceil(data / 10) === Math.ceil(currentPage / 10)).map((data, idx) => <PageButton key={idx} className='font6' $iscurrent={data === currentPage} onClick={() => setCurrentPage(data)}>{data}</PageButton>)}
                {buttonStatus[1] ? <PageButton onClick={() => setCurrentPage(Math.ceil(currentPage / 10) * 10 + 1)}><RightButton width={30} height={30} color={'var(--main-01)'} /></PageButton> : null}
                {buttonStatus[1] ? <PageButton onClick={() => setCurrentPage(maxPage)}><RightRightButton width={30} height={30} color={'var(--main-01)'} /></PageButton> : null}
            </div>
        </>
    );
}

export default Pagination;