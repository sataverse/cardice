import styled from "styled-components";
import { useState } from "react";
import { AccordionIcon } from "../Svg/ButtonIcon";

const UserAccordionWrapper = styled.div`
    margin: 10px 0 10px 0;
    border-radius: 4px;
    background-color: white;
`;

const UserAccordionOpenButton = styled.button`
    position: relative;
    width: 100%;
    top: 5px;
    margin: 10px 0 10px 0;
    padding: 0;
    background-color: transparent;
`;

const ButtonText = styled.div`
    height: 20px;
    margin-right: 10px;
`;

const ButtonIcon = styled.div.attrs(props => ({
    style: { transform: props.$ishidden ? 'rotate(0deg)' : 'rotate(180deg)' }
}))`
    width: 20px;
    height: 20px;
    transition-property: transform;
    transition-duration: 0.5s;
`;

const UserAccordionContentWrapper = styled.div.attrs(props => ({
    style: { height: props.$ishidden ? '0px' : `${props.$height}px` }
}))`
    overflow: hidden;
    transition-property: height;
    transition-duration: 0.5s;
`;

const UserAccordion = ({innerComponent, buttonText, height}) => {
    const [isHidden, setHidden] = useState(true);

    return(
        <UserAccordionWrapper>
            <UserAccordionOpenButton className='frow fjcenter facenter' onClick={() => setHidden(!isHidden)}>
                <ButtonText>{buttonText}</ButtonText>
                <ButtonIcon $ishidden={isHidden}>
                    <AccordionIcon width={20} height={20} />
                </ButtonIcon>
            </UserAccordionOpenButton>
            <UserAccordionContentWrapper className='center' $ishidden={isHidden} $height={height}>
                {innerComponent}
            </UserAccordionContentWrapper>
        </UserAccordionWrapper>
    );
}

export default UserAccordion;