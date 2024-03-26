import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TopNavigationButtons from './TopNavigationButtons';
import Logo from '../Svg/Logo';
import { UserIcon } from '../Svg/NavigationIcon';

const TopNavigationBarWrapper = styled.div`
    position: sticky;
    top: 0;
    border-bottom: 2px solid lightgray;
    background-color: white;
    z-index: 99;
`

const TopNavigationBarMainWrapper = styled.div`
    height: 60px;
    width: ${(props) => `${props.$contentsWidth - 20}px`};
`

const MainLogoWrapper = styled.div`
    margin-right: ${(props) => `${props.$margin}px`};
    padding-top: 10px;
    flex-shrink: 0;
    &:hover {
        cursor: pointer;
    }
`

const MenuWrapper = styled.div`
    flex-shrink: 0;
`

const BlankWrapper = styled.div`
    flex-grow: 12;
    flex-shrink: 1;
`

const ButtonWrapper = styled.button`
    margin-left: ${(props) => `${props.$margin}px`};
    background-color: transparent;
`

const getComponentSize = width => {
    if(width >= 1380) {
        return {contentsWidth: 1300, margin: 40};
    }
    else if(width >= 1120) {
        return {contentsWidth: 1040, margin: 30};
    }
    else if(width >= 860) {
        return {contentsWidth: 780, margin: 20};
    }
    else {
        return {contentsWidth: width - 80, margin: 20};
    }
}

const SignInUpButtons = ({componentSize, changeModal}) => {
    return(
        <>
            <ButtonWrapper $margin={componentSize.margin} onClick={() => changeModal(1)}>{'로그인'}</ButtonWrapper>
            <ButtonWrapper $margin={componentSize.margin} onClick={() => changeModal(2)}>{'회원가입'}</ButtonWrapper>
        </>
    );
}

const UserPageButton = ({}) => {
    const navigate = useNavigate();
    return(
        <ButtonWrapper className='frow facenter' onClick={() => navigate('/user')}>
            <UserIcon width={20} height={20} />
        </ButtonWrapper>
    );
}

const TopNavigationBar = ({windowWidth, signinStatus, changeModal}) => {
    const navigate = useNavigate();
    const [componentSize, setComponentSize] = useState(getComponentSize(windowWidth));
    useEffect(() => setComponentSize(getComponentSize(windowWidth)), [windowWidth]);
    
    return (
        <TopNavigationBarWrapper>
            <TopNavigationBarMainWrapper className='frow fjsbetween facenter center' $contentsWidth={componentSize.contentsWidth}>
                <MainLogoWrapper $margin={componentSize.margin} onClick={() => navigate('/')}>
                    <Logo width={120} height={40} />
                </MainLogoWrapper>
                <MenuWrapper className='frow'>
                    <TopNavigationButtons />
                </MenuWrapper>
                <BlankWrapper />
                <MenuWrapper className='frow'>
                    {signinStatus ? <UserPageButton /> : <SignInUpButtons componentSize={componentSize} changeModal={changeModal} />}
                </MenuWrapper>
            </TopNavigationBarMainWrapper>
        </TopNavigationBarWrapper>
    );
}

export default TopNavigationBar;