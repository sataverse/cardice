import styled from "styled-components";
import UserProfile from "./UserProfile";
import UserLike from "./UserLike";

const UserInformationBoxWrapper = styled.div`
    width: ${(props) => props.$width}px;
    min-height: 800px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    background-color: var(--gray-02);
`

const UserInformationBox = ({gameData, componentSize, userInfo}) => {

    return(
        <UserInformationBoxWrapper className="center" $width={componentSize.contentWidth}>
            <UserProfile userInfo={userInfo} />
            <UserLike gameData={gameData} componentSize={componentSize} />
        </UserInformationBoxWrapper>
    );
}

export default UserInformationBox;