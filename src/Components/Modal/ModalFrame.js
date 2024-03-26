import styled from 'styled-components'
import { useEffect } from 'react'
import { preventScroll, allowScroll } from '../../Modules/util'
import ModalSignIn from './ModalSignIn'
import ModalSignUp from './ModalSignUp'

const ModalBackgroundWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(58, 58, 58, 0.7);
    z-index: 100;
`

const ModalWrapper = styled.div`
    position: relative;
    width: 360px;
    top: 50%;
    left: 49.5%;
    padding: 30px 0 30px 0;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    background-color: white;
`

const ModalFrame = ({modalStatus, changeModal, setSigninStatus}) => {
    useEffect(() => {
        const prevScrollY = preventScroll();
        return () => allowScroll(prevScrollY);
    }, []);
    return(
        <ModalBackgroundWrapper onClick={() => changeModal(0)}>
            <ModalWrapper onClick={e => e.stopPropagation()}>
                {modalStatus === 1 ? <ModalSignIn changeModal={changeModal} setSigninStatus={setSigninStatus} /> : <ModalSignUp changeModal={changeModal} />}
            </ModalWrapper>
        </ModalBackgroundWrapper>
    );
}

export default ModalFrame;