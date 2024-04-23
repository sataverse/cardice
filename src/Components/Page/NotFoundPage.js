import styled from "styled-components";
import NotFoundIcon from "../Svg/NotFoundIcon";

const NotFoundPageWrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh - 70px);
`;

const Content = styled.div`
    position: absolute;
    top: 45%;
    left: 49.5%;
    width: 400px;
    height: 450px;
    transform: translate(-50%, -50%);
`;

const IconWrapper = styled.div`
    width: 300px;
    height: 300px;
`;

const Error = styled.div`
    font-size: 3rem;
    font-weight: bolder;
`;

const Message = styled.div`
    width: 370px;
    color: #959595;
`;

const NotFoundPage = () => {
    return (
        <NotFoundPageWrapper>
            <Content className='fcol facenter fjsaround'>
                <IconWrapper>
                    <NotFoundIcon width={300} height={300} />
                </IconWrapper>
                <Error>{'404 ERROR'}</Error>
                <Message>{'지금 입력하신 주소의 페이지는 없거나 변경되었습니다. 주소를 다시 확인해주세요.'}</Message>
            </Content>
        </NotFoundPageWrapper>
    );
}

export default NotFoundPage;