import styled from "styled-components";
import { useState, useEffect } from "react";
import { preventScroll, allowScroll } from "../../Modules/util";
import ModalSignIn from "./ModalSignIn";
import ModalSignUp from "./ModalSignUp";

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
    width: 360px;
    top: 50%;
    left: 49.5%;
    padding: 30px 0 30px 0;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    background-color: white;
`;

const ModalFrame = ({modalStatus, setModal, setSigninStatus}) => {
    const [fail, setFail] = useState([0, 0, 0, 0]);
    const changeModal = num => {
        setFail([0, 0, 0, 0]);
        setModal(num);
    }
    const closeModal = () => {
        setFail([0, 0, 0, 0]);
        changeModal(0);
    }

    useEffect(() => {
        const prevScrollY = preventScroll();
        return () => allowScroll(prevScrollY);
    }, []);

    return(
        <ModalBackgroundWrapper onClick={() => closeModal()}>
            <ModalWrapper onClick={e => e.stopPropagation()}>
                {modalStatus === 1 ? <ModalSignIn changeModal={changeModal} fail={fail} setFail={setFail} setSigninStatus={setSigninStatus} /> : <ModalSignUp changeModal={changeModal} fail={fail} setFail={setFail} setSigninStatus={setSigninStatus} />}
            </ModalWrapper>
        </ModalBackgroundWrapper>
    );
}

export default ModalFrame;