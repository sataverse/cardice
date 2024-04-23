import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { HomeIcon, SearchIcon, RankIcon, CommunityIcon, UserIcon } from "../Svg/NavigationIcon";

const Blank = styled.div`
    width: 100%;
    height: 80px;
`;

const BottomNavigationBarWrapper = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    border-top: 2px solid lightgray;
    background-color: white;
    z-index: 99;
`;

const NavigationButton = styled.button`
    width: 70px;
    padding: 10px;
    background-color: transparent;
`;

const BottomNavigationBar = ({signinStatus, changeModal}) => {
    const navigate = useNavigate();

    return(
        <>
            <Blank />
            <BottomNavigationBarWrapper className='frow fjsaround'>
                <Link to={'/'} className='link'>
                    <NavigationButton>
                        <HomeIcon width={24} height={24} />
                        <div className='font2'>{'홈'}</div>
                    </NavigationButton>
                </Link>
                <Link to={'/search'} className='link'>
                    <NavigationButton>
                        <SearchIcon width={24} height={24} />
                        <div className='font2'>{'검색'}</div>
                    </NavigationButton>
                </Link>
                <Link to={'/rank'} className='link'>
                    <NavigationButton>
                        <RankIcon width={24} height={24} />
                        <div className='font2'>{'랭킹'}</div>
                    </NavigationButton>
                </Link>

                <NavigationButton onClick={() => alert('준비중입니다.')}>
                    <CommunityIcon width={24} height={24} />
                    <div className='font2'>{'커뮤니티'}</div>
                </NavigationButton>

                <NavigationButton onClick={() => signinStatus ? navigate('/user') : changeModal(1)}>
                    <UserIcon width={24} height={24} />
                    <div className='font2'>{'마이'}</div>
                </NavigationButton>
            </BottomNavigationBarWrapper>
        </>
    );
}

export default BottomNavigationBar;