import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import NavButtons from './NavButtons'
import Logo from '../Svg/Logo'

const HeaderWrapper = styled.div`
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 99;
`

const HeaderMainWrapper = styled.div`
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

const HeaderMenuWrapper = styled.div`
    flex-shrink: 0;
`

const HeaderBlankWrapper = styled.div`
    flex-grow: 12;
    flex-shrink: 1;
`

const HeaderButtonWrapper = styled.button`
    margin-left: ${(props) => `${props.$margin}px`};
    background-color: transparent;
`

const HeaderHr = styled.div`
    height: 2px;
    width: 100%;
    background-color: lightgray;
`

const Header = ({componentSize, changeModal}) => {
    const navigate = useNavigate();
    return (
        <HeaderWrapper>
            <HeaderMainWrapper className='frow fjsbetween facenter center' $contentsWidth={componentSize.contentsWidth}>
                <MainLogoWrapper $margin={componentSize.margin} onClick={() => navigate('/')}>
                    <Logo width={120} height={40} />
                </MainLogoWrapper>
                <HeaderMenuWrapper className='frow'>
                    <NavButtons />
                </HeaderMenuWrapper>
                <HeaderBlankWrapper />
                <HeaderMenuWrapper className='frow'>
                    <HeaderButtonWrapper $margin={componentSize.margin} onClick={() => changeModal(1)}>{'로그인'}</HeaderButtonWrapper>
                    <HeaderButtonWrapper $margin={componentSize.margin} onClick={() => changeModal(2)}>{'회원가입'}</HeaderButtonWrapper>
                </HeaderMenuWrapper>
            </HeaderMainWrapper>
            <HeaderHr />
        </HeaderWrapper>
    );
}

export default Header