import styled from "styled-components";
import { useState } from "react";

const UserAccordionWrapper = styled.div`
    margin: 10px 0 10px 0;
    border-radius: 4px;
    background-color: white;
`

const UserAccordionOpenButton = styled.button`
    width: 100%;
    margin: 5px 0 5px 0;
    padding: 0;
    background-color: transparent;
`

const UserAccordionContentWrapper = styled.div`
    height: ${(props) => props.$isHidden ? '0px' : `${props.$height}px`};
    overflow: hidden;
    transition-property: height;
    transition-duration: 0.5s;
`

const UserAccordion = ({innerComponent, buttonText, height}) => {
    const [isHidden, setHidden] = useState(true);

    return(
        <UserAccordionWrapper>
            <UserAccordionOpenButton onClick={() => setHidden(!isHidden)}>{buttonText}</UserAccordionOpenButton>
            <UserAccordionContentWrapper className="center" $isHidden={isHidden} $height={height}>
                {innerComponent}
            </UserAccordionContentWrapper>
        </UserAccordionWrapper>
    );
}

export default UserAccordion;