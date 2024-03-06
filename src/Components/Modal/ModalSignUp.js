import styled from 'styled-components'
import { useState, useEffect } from 'react';
import Logo from '../Svg/Logo';
import ModalInputText from './ModalInputText';
import ModalButton from './ModalButton';
import ModalText from './ModalText';
import ModalTextWithButton from './ModalTextWithButton';
import ModalFailText from './ModalFailText';

const LogoWrapper = styled.div`
    margin-bottom: 15px;
`

const ModalSignUp = ({changeModal}) => {
    const [nickname, setNickname] = useState();
    const [email, setEmail] = useState();
    const [passwd, setPasswd] = useState();
    const [passwdCheck, setPasswdCheck] = useState();
    useEffect(() => {
        const timer = setTimeout(() => console.log('패치를 하여 찾기 닉네임 상태변경', nickname), 500);
        return () => clearTimeout(timer);
    }, [nickname]);
    useEffect(() => {
        const timer = setTimeout(() => console.log('email', email));
        return () => clearTimeout(timer);
    }, [email]);

    return(
        <div className="fcol fjsaround">
            <LogoWrapper className="center">
                <Logo width={210} height={75} />
            </LogoWrapper>
            <ModalText text={'회원가입'} />
            <ModalInputText type={'text'} placeholder={'닉네임'} changeText={setNickname}/>
            {nickname == null ? null : nickname == '' ? <ModalFailText text={'닉네임을 입력해주세요.'} /> : <ModalFailText text={'이미 사용 중인 닉네임입니다.'} />}
            <ModalInputText type={'text'} placeholder={'이메일'} />
            <ModalFailText text={'이미 가입된 이메일입니다.'} />
            <ModalInputText type={'password'} placeholder={'비밀번호'} />
            <ModalFailText text={'비밀번호는 최소 4자리 이상이어야 합니다.'} />
            <ModalInputText type={'password'} placeholder={'비밀번호 재입력'} />
            <ModalFailText text={'비밀번호가 일치하지 않습니다.'} />
            <ModalButton text={'회원가입'} />
            <ModalTextWithButton text={'이미 가입하셨나요?'} buttonText={'로그인'} changeModal={() => changeModal(1)}/>
        </div>
    );
}

export default ModalSignUp;