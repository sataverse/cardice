import styled from "styled-components";
import { getGradeText } from "../../Modules/util";

const UserProfilePicture = styled.div`
    width: 100px;
    height: 100px;
    margin: 5px 0 5px;
    border-radius: 50px;
    background-color: white;
    background-image: ${(props) => `url(${props.$imgURL})`};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`

const UserProfileText = styled.div`
    margin: 2px;
`

const UserProfile = ({userInfo}) => {
    return(
        <div>
            <UserProfilePicture $imgURL={'/icon/Default_Profile.png'}/>
            <div className="frow facenter">
                <UserProfileText className="font8">{userInfo.nickname}</UserProfileText>
                <UserProfileText className="font3">{`(${getGradeText(userInfo.grade)})`}</UserProfileText>
            </div>
            <UserProfileText className="font3">{userInfo.email}</UserProfileText>
        </div>
    );
}

export default UserProfile;