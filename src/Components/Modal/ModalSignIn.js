import styled from 'styled-components'
import { useState } from 'react';
import userData from '../../Data/user.json';
import Logo from '../Svg/Logo';
import ModalInputText from './ModalInputText';
import ModalButton from './ModalButton';
import ModalText from './ModalText';
import ModalTextWithButton from './ModalTextWithButton';
import ModalFailText from './ModalFailText';

const LogoWrapper = styled.div`
    margin-bottom: 15px;
`

const ModalSignIn = ({changeModal}) => {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [loginStatus, setLoginStatus] = useState(false);
    const findAccount = () => {
        setLoginStatus(false);
        for(var i = 0; i < userData.length; i++) {
            if(userData[i].email === email) {
                if(userData[i].password === passwd) {
                    setLoginStatus(true);
                }
                break;
            }
        }
    }

    return(
        <div className="fcol fjsaround">
            <LogoWrapper className="center">
                <Logo width={210} height={75} />
            </LogoWrapper>
            <ModalText text={'로그인'} />
            <ModalInputText type={'text'} placeholder={'이메일'} changeText={setEmail} />
            <ModalInputText type={'password'} placeholder={'비밀번호'} changeText={setPasswd} />
            <ModalFailText text={loginStatus ? '성공' : '이메일 또는 비밀번호가 일치하지 않습니다.'} />
            <ModalButton text={'로그인'} onClick={findAccount}  />
            <ModalTextWithButton text={'계정이 없으신가요?'} buttonText={'회원가입'} changeModal={() => changeModal(2)}/>
        </div>
    );
}

export default ModalSignIn;