import styled from 'styled-components'
import { useState } from 'react';
import { saveLocalStorage, loadLocalStorage } from '../../Modules/util';
import { useToken } from '../../Modules/store';
import Logo from '../Svg/Logo';
import ModalInputText from './ModalInputText';
import ModalButton from './ModalButton';
import ModalText from './ModalText';
import ModalTextWithButton from './ModalTextWithButton';
import ModalFailText from './ModalFailText';

const LogoWrapper = styled.div`
    margin-bottom: 15px;
`;

const ModalSignIn = ({changeModal, fail, setFail, setSigninStatus}) => {
    const token = useToken();
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');

    const clickSignInButton = async () => {
        try {
            const response = await fetch('http://localhost:3001/user/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ token, email, password: passwd })
            });
            const { code, data } = await response.json();
            if(code !== 200) {
                setFail([1, 0, 0, 0]);
            }
            else {
                for(const key in data) {
                    saveLocalStorage(key, data[key]);
                }
                setSigninStatus(loadLocalStorage('id'));
                changeModal(0);
            }
        } catch(error) {
            console.log(error);
        }
        
    }

    return(
        <div className='fcol fjsaround'>
            <LogoWrapper className='center'>
                <Logo width={210} height={75} />
            </LogoWrapper>
            <ModalText text={'로그인'} />
            <ModalInputText type={'text'} placeholder={'이메일'} changeText={setEmail} />
            <ModalInputText type={'password'} placeholder={'비밀번호'} changeText={setPasswd} />
            {fail[0] === 0 ? null : <ModalFailText text={'이메일 또는 비밀번호가 일치하지 않습니다.'} />}
            <ModalButton text={'로그인'} onClick={clickSignInButton}  />
            <ModalTextWithButton text={'계정이 없으신가요?'} buttonText={'회원가입'} changeModal={() => changeModal(2)}/>
        </div>
    );
}

export default ModalSignIn;