import { useState } from "react";
import styled from "styled-components";

const FilterButtonsWrapper = styled.div`
    margin: 10px 0 10px 0;
`

const FilterTypeText = styled.div`
    width: 70px;
    flex-shrink: 0;
`

const FilterSelectButton = styled.button`
    width: ${(props) => isNaN(props.$val) ? '90px' : '60px'};
    margin: 0 5px 5px 5px;
    padding: 0;
    border-radius: 6px;
    background-color: ${(props) => props.$clicked ? 'var(--main-00)' : 'white'};
    transition-property: background-color;
    transition-duration: 0.5s;
`

const FilterButtons = ({type, items, changeFilterValue}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const clickButton = (value, index) => {
        changeFilterValue(value);
        setSelectedIndex(index);
    }

    return(
        <FilterButtonsWrapper className="frow">
            <FilterTypeText>{type}</FilterTypeText>
            <div className="frow fwrap">
                {items.map((item, index) => <FilterSelectButton key={index} $val={item.value} $clicked={index === selectedIndex} onClick={() => clickButton(item.value, index)}>{item.buttonText}</FilterSelectButton>)}
            </div>
        </FilterButtonsWrapper>
    );
}

export default FilterButtons;