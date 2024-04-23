import styled from "styled-components";

const FilterButtonsWrapper = styled.div`
    margin: 10px 0 10px 0;
`;

const FilterTypeText = styled.div`
    width: 70px;
    flex-shrink: 0;
`;

const FilterSelectButton = styled.button.attrs(props => ({
    style: { width: isNaN(props.$val) ? '90px' : '60px', backgroundColor: props.$clicked ? 'var(--main-00)' : 'white' }
}))`
    margin: 0px 5px 5px 5px;
    padding: 0;
    border-radius: 4px;
    transition-property: background-color;
    transition-duration: 0.5s;
`;

const FilterButtons = ({type, items, currentValue, changeFilterValue}) => {
    const clickButton = value => {
        changeFilterValue(value);
    }

    return(
        <FilterButtonsWrapper className='frow'>
            <FilterTypeText>{type}</FilterTypeText>
            <div className='frow fwrap'>
                {items.map((item, index) => <FilterSelectButton key={index} $val={item.value} $clicked={item.value === currentValue} onClick={() => clickButton(item.value)}>{item.buttonText}</FilterSelectButton>)}
            </div>
        </FilterButtonsWrapper>
    );
}

export default FilterButtons;