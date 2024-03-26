import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HomeIcon, SearchIcon, RankIcon, CommunityIcon, UserIcon } from "../Svg/NavigationIcon";

const BottomNavigationBarWrapper = styled.div`
    position: sticky;
    bottom: 0;
    border-top: 2px solid lightgray;
    background-color: white;
    z-index: 99;
`

const NavigationButton = styled.button`
    width: 70px;
    padding: 10px;
    background-color: transparent;
`

const BottomNavigationBar = ({signinStatus, changeModal}) => {
    const navigate = useNavigate();

    return(
        <BottomNavigationBarWrapper className="frow fjsaround">
            <NavigationButton onClick={() => navigate('/')}>
                <HomeIcon width={24} height={24} />
                <div className="font2">{'홈'}</div>
            </NavigationButton>
            <NavigationButton onClick={() => navigate('/search')}>
                <SearchIcon width={24} height={24} />
                <div className="font2">{'검색'}</div>
            </NavigationButton>
            <NavigationButton onClick={() => navigate('/rank')}>
                <RankIcon width={24} height={24} />
                <div className="font2">{'랭킹'}</div>
            </NavigationButton>
            <NavigationButton>
                <CommunityIcon width={24} height={24} />
                <div className="font2">{'커뮤니티'}</div>
            </NavigationButton>
            <NavigationButton onClick={() => signinStatus ? navigate('/user') : changeModal(1)}>
                <UserIcon width={24} height={24} />
                <div className="font2">{'마이'}</div>
            </NavigationButton>
        </BottomNavigationBarWrapper>
    );
}

export default BottomNavigationBar;