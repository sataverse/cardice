import styled from "styled-components"
import { Link } from "react-router-dom"
import { SearchIcon, RankIcon, CommunityIcon, UserIcon } from "../Svg/NavigationIcon"

const NavButtonWrapper = styled.button`
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
`;

const NavButtonIconWrapper = styled.div`
    margin: 7px 6px 0 6px;
`;

const TopNavigationButtons = () => {
    return(
        <>
            <Link to={'/search'} className='link'>
                <NavButtonWrapper className='frow facenter'>
                    <NavButtonIconWrapper>
                        <SearchIcon width={20} height={20} />
                    </NavButtonIconWrapper>
                    <div>{'검색'}</div>
                </NavButtonWrapper>
            </Link>
            <Link to={'/rank'} className='link'>
                <NavButtonWrapper className='frow facenter'>
                    <NavButtonIconWrapper>
                        <RankIcon width={20} height={20} />
                    </NavButtonIconWrapper>
                    <div>{'랭킹'}</div>
                </NavButtonWrapper>
            </Link>
            <NavButtonWrapper className='frow facenter' onClick={() => alert('준비중입니다.')}>
                <NavButtonIconWrapper>
                    <CommunityIcon width={20} height={20} />
                </NavButtonIconWrapper>
                <div>{'커뮤니티'}</div>
            </NavButtonWrapper>
        </>
    );
}

export default TopNavigationButtons;