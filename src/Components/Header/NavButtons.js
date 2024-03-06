import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import SearchIcon from "../Svg/SearchIcon"
import RankIcon from "../Svg/RankIcon"
import CommunityIcon from "../Svg/CommunityIcon"

const HeaderButtonWrapper = styled.button`
    background-color: transparent;
    @media (max-width: 1119px){
        & {
            margin: 0 15px 0 15px;
        }
    }
    @media (max-width: 1379px) and (min-width: 1120px){
        & {
            margin: 0 20px 0 20px;
        }
    }
    @media (min-width: 1380px) {
        & {
            margin: 0 25px 0 25px;
        }
    }
`

const HeaderButtonIconWrapper = styled.div`
    margin: 7px 6px 0 6px;
`

const NavButtons = () => {
    const navigate = useNavigate();
    return(
        <>
            <HeaderButtonWrapper className='frow facenter' onClick={() => navigate('/search')}>
                <HeaderButtonIconWrapper>
                    <SearchIcon width={20} height={20} />
                </HeaderButtonIconWrapper>
                <div>검색</div>
            </HeaderButtonWrapper>
            <HeaderButtonWrapper className='frow facenter' onClick={() => navigate('/rank')}>
                <HeaderButtonIconWrapper>
                    <RankIcon width={20} height={20} />
                </HeaderButtonIconWrapper>
                <div>랭킹</div>
            </HeaderButtonWrapper>
            <HeaderButtonWrapper className='frow facenter' onClick={() => navigate('/community')}>
                <HeaderButtonIconWrapper>
                    <CommunityIcon width={20} height={20} />
                </HeaderButtonIconWrapper>
                <div>커뮤니티</div>
            </HeaderButtonWrapper>
        </>
    )    
}

export default NavButtons;

/*
<Link to={'/search'} className="link">
                <HeaderButtonWrapper className='frow facenter'>
                    <HeaderButtonIconWrapper>
                        <SearchIcon width={20} height={20} />
                    </HeaderButtonIconWrapper>
                    <div>검색</div>
                </HeaderButtonWrapper>
            </Link>
            <Link to={'/rank'} className="link">
                <HeaderButtonWrapper className='frow facenter'>
                    <HeaderButtonIconWrapper>
                        <RankIcon width={20} height={20} />
                    </HeaderButtonIconWrapper>
                    <div>랭킹</div>
                </HeaderButtonWrapper>
            </Link>

*/