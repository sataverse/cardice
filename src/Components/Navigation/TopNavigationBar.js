import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { loadLocalStorage } from "../../Modules/util";
import TopNavigationButtons from "./TopNavigationButtons";
import Logo from "../Svg/Logo";
import { UserIcon } from "../Svg/NavigationIcon";

const TopNavigationBarWrapper = styled.div`
    position: sticky;
    top: 0;
    border-bottom: 2px solid lightgray;
    background-color: white;
    z-index: 99;
`;

const TopNavigationBarMainWrapper = styled.div.attrs(props => ({
    style: { width: `${props.$contentswidth - 20}px` }
}))`
    height: 70px;
`;

const MainLogoWrapper = styled.div.attrs(props => ({
    style: { marginRight: `${props.$margin}px` }
}))`
    padding-top: 10px;
    flex-shrink: 0;
    &:hover {
        cursor: pointer;
    }
`;

const MenuWrapper = styled.div`
    flex-shrink: 0;
`;

const BlankWrapper = styled.div`
    flex-grow: 12;
    flex-shrink: 1;
`;

const ButtonWrapper = styled.button.attrs(props => ({
    style: { marginLeft: `${props.$margin}px` }
}))`
    background-color: transparent;
`;

const ButtonIconWrapper = styled.div`
    margin: 7px 6px 0 0;
`;

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
    return(
        <Link to={'/user'} className='link'>
            <ButtonWrapper className='frow facenter'>
                <ButtonIconWrapper>
                    <UserIcon width={20} height={20} />
                </ButtonIconWrapper>
                <div>{`${loadLocalStorage('nickname')} 님`}</div>
            </ButtonWrapper>
        </Link>
    );
}

const TopNavigationBar = ({windowWidth, signinStatus, changeModal}) => {
    const [componentSize, setComponentSize] = useState(getComponentSize(windowWidth));
    useEffect(() => setComponentSize(getComponentSize(windowWidth)), [windowWidth]);
    
    return (
        <TopNavigationBarWrapper>
            <TopNavigationBarMainWrapper className='frow fjsbetween facenter center' $contentswidth={componentSize.contentsWidth}>
                <Link to={'/'} className='link'>
                    <MainLogoWrapper $margin={componentSize.margin}>
                        <Logo width={120} height={40} />
                    </MainLogoWrapper>
                </Link>
                <MenuWrapper className='frow'>
                    <TopNavigationButtons />
                </MenuWrapper>
                <BlankWrapper />
                <MenuWrapper className='frow'>
                    {!loadLocalStorage('id') ? <SignInUpButtons componentSize={componentSize} changeModal={changeModal} /> : <UserPageButton />}
                </MenuWrapper>
            </TopNavigationBarMainWrapper>
        </TopNavigationBarWrapper>
    );
}

export default TopNavigationBar;