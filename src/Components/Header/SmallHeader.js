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
    height: 40px;
    width: ${(props) => `${props.$contentsWidth - 20}px`};
`

const MainLogoWrapper = styled.div`
    padding-top: 10px;
    &:hover {
        cursor: pointer;
    }
`

const HeaderButtonWrapper = styled.button`
    margin-left: 20px;
    background-color: transparent;
`

const HeaderHr = styled.div`
    height: 2px;
    width: 100%;
    background-color: lightgray;
`

const SmallHeader = ({componentSize, changeModal}) => {
    const navigate = useNavigate();
    return (
        <HeaderWrapper>
            <HeaderMainWrapper className='frow fjsbetween facenter center' $contentsWidth={componentSize.contentsWidth}>
                <MainLogoWrapper onClick={() => navigate('/')}>
                    <Logo width={120} height={40} />
                </MainLogoWrapper>
                <div className='frowrev'>
                    <HeaderButtonWrapper onClick={() => changeModal(1)}>{'회원가입'}</HeaderButtonWrapper>
                    <HeaderButtonWrapper onClick={() => changeModal(2)}>{'로그인'}</HeaderButtonWrapper>
                </div>
            </HeaderMainWrapper>
            <HeaderMainWrapper className='frow fjcenter' $contentsWidth={componentSize.contentsWidth}>
                <div className='frow'>
                    <NavButtons />
                </div>
            </HeaderMainWrapper>
            <HeaderHr />
        </HeaderWrapper>
    );
}

export default SmallHeader