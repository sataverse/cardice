import styled from "styled-components";
import { useState, useEffect } from "react";
import { loadLocalStorage, saveLocalStorage } from "../../Modules/util";
import { useToken } from "../../Modules/store";
import Logo from "../Svg/Logo";
import ModalInputText from "./ModalInputText";
import ModalButton from "./ModalButton";
import ModalText from "./ModalText";
import ModalTextWithButton from "./ModalTextWithButton";
import ModalFailText from "./ModalFailText";

const LogoWrapper = styled.div`
    margin-bottom: 15px;
`;

const ModalSignUp = ({changeModal, fail, setFail, setSigninStatus}) => {
    const token = useToken();
    const [nickname, setNickname] = useState();
    const [email, setEmail] = useState();
    const [passwd, setPasswd] = useState();
    const [passwdCheck, setPasswdCheck] = useState();

    useEffect(() => {
        const timer = setTimeout(() => {
            const temp = [...fail];
            if(nickname === '') {
                temp[0] = 1;
            }
            else {
                temp[0] = 0;
            }
            setFail(temp);
        }, 500);
        return () => clearTimeout(timer);
    }, [nickname]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const temp = [...fail];
            if(email === '') {
                temp[1] = 1;
            }
            else {
                temp[1] = 0;
            }
            setFail(temp);
        }, 500);
        return () => clearTimeout(timer);
    }, [email]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const temp = [...fail];
            if(passwd != null) {
                if(passwd.length > 3) {
                    temp[2] = 0;
                }
                else {
                    temp[2] = 1;
                }
            }
            setFail(temp);
        }, 500);
        return () => clearTimeout(timer);
    }, [passwd]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const temp = [...fail];
            if(passwdCheck != null) {
                if(passwd === passwdCheck) {
                    temp[3] = 0;
                }
                else {
                    temp[3] = 1;
                }
            }
            setFail(temp);
        }, 500);
        return () => clearTimeout(timer);
    }, [passwdCheck]);

    const clickSignUpButton = async () => {
        if(!nickname || !email || !passwd || !passwdCheck) {
            return;
        }
        if(nickname === '' || email === '' || passwd === '' || passwdCheck === '') {
            return;
        }
        if(fail[2] || fail[3]) {
            return;
        }

        try {
            const response = await fetch('http://localhost:3030/user/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ token, email, nickname, password: passwd })
            });
            const { code, data } = await response.json();

            if(code === 200) {
                for(const key in data) {
                    saveLocalStorage(key, data[key]);
                }
                setSigninStatus(loadLocalStorage('id'));
                changeModal(0);
            }
            else if(code === 409) {
                console.log(data)
                const temp = [...fail];
                temp[0] = 2;
                temp[1] = 2;
                if(data === 0) {
                    temp[0] = 0;
                }
                else if(data === 1) {
                    temp[1] = 0;
                }
                setFail(temp);
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
            <ModalText text={'회원가입'} />
            <ModalInputText type={'text'} placeholder={'닉네임'} changeText={setNickname} />
            {fail[0] === 0 ? null : fail[0] === 1 ? <ModalFailText text={'닉네임을 입력해주세요.'} /> : <ModalFailText text={'이미 사용 중인 닉네임입니다.'} />}
            <ModalInputText type={'text'} placeholder={'이메일'} changeText={setEmail} />
            {fail[1] === 0 ? null : fail[1] === 1 ? <ModalFailText text={'이메일을 입력해주세요.'} /> : <ModalFailText text={'이미 가입된 이메일입니다.'} />}
            <ModalInputText type={'password'} placeholder={'비밀번호'} changeText={setPasswd} />
            {fail[2] === 0 ? null : <ModalFailText text={'비밀번호는 최소 4자리 이상이어야 합니다.'} />}
            <ModalInputText type={'password'} placeholder={'비밀번호 재입력'} changeText={setPasswdCheck} />
            {fail[3] === 0 ? null : <ModalFailText text={'비밀번호가 일치하지 않습니다.'} />}
            <ModalButton text={'회원가입'} onClick={clickSignUpButton} />
            <ModalTextWithButton text={'이미 가입하셨나요?'} buttonText={'로그인'} changeModal={() => changeModal(1)}/>
        </div>
    );
}

export default ModalSignUp;