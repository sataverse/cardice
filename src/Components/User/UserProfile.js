import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { clearLocalStorage, getGradeText, loadLocalStorage } from "../../Modules/util";

const UserProfilePicture = styled.div`
    width: 100px;
    height: 100px;
    margin: 5px 0 5px;
    border-radius: 50px;
    background-color: white;
    background-image: ${(props) => `url(${props.$imgurl})`};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

const UserProfileText = styled.div`
    margin: 2px;
`;

const SignOutButton = styled.button`
    margin: 5px 0 10px 0;
    background-color: transparent;
    color: red;
`;

const UserProfile = () => {
    const navigate = useNavigate();
    const signOut = () => {
        clearLocalStorage();
        navigate('/');
    }

    return(
        <div>
            <UserProfilePicture $imgurl={'/icon/Default_Profile.png'}/>
            <div className='frow facenter'>
                <UserProfileText className='font8'>{loadLocalStorage('nickname')}</UserProfileText>
                <UserProfileText className='font3'>{`(${getGradeText(loadLocalStorage('grade'))})`}</UserProfileText>
            </div>
            <UserProfileText className='font3'>{loadLocalStorage('email')}</UserProfileText>
            <SignOutButton onClick={() => signOut()}>{'로그아웃'}</SignOutButton>
        </div>
    );
}

export default UserProfile;