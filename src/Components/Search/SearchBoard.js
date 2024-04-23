import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSort, usePlayer, useWeight, useSystem } from "../../Modules/store";
import FilterButtons from "./FilterButtons";
import CloseButton from "../Others/CloseButton";
import { SearchIcon } from "../Svg/NavigationIcon";
import { FilterIcon } from "../Svg/ButtonIcon";

const SearchBoardWrapper = styled.div`
    margin-top: 30px;
`;

const SearchBarOuterWrapper = styled.div.attrs(props => ({
    style: { width: `${props.$width}px`, border: props.$border ? '2px solid var(--main-00)' : '2px solid transparent' }
}))`
    height: 30px;
    padding: 0 12px 0 6px;
    border-radius: 4px;
    background-color: var(--gray-02);
`;

const SearchBarInnerWrapper = styled.div`
    position: relative;
    top: 3px;
`;

const SearchBar = styled.input.attrs(props => ({
    style: { width: `${props.$width}px`}
}))`
    outline: none;
    height: 24px;
    padding: 0 10px 0 10px;
    border : 0;
    background-color: transparent;
`;

const FilterBoxWrapper = styled.div.attrs(props => ({
    style: { display: props.$display ? 'block' : 'none', width: `${props.$width}px`}
}))`
    margin-top: 10px;
    padding: 10px;
    border-radius: 4px;
    background-color: var(--gray-02);
`;

const FilterBoxButton = styled.button`
    width: 100px;
    margin-left: 10px;
    border-radius: 4px;
    background-color: var(--gray-02);
`;

const ButtonText = styled.div`
    width: 50px;
    text-align: center;
`;

const FilterInitButton = styled.button`
    display: block;
    margin-top: 10px;
    padding: 0;
    border-radius: 4px;
    color: #959595;
    background-color: transparent;
`;

const filterItems = [
    [{value: 0, buttonText: '제목'}, {value: 1, buttonText: '좋아요'}, {value: 2, buttonText: '평점'}, {value: 3, buttonText: '리뷰'}],
    [{value: 0, buttonText: '전체'}, {value: 1, buttonText: '1인'}, {value: 2, buttonText: '2인'}, {value: 3, buttonText: '3인'}, {value: 4, buttonText: '4인'}, {value: 5, buttonText: '5인'}, {value: 6, buttonText: '6인'}, {value: 7, buttonText: '7인+'}],
    [{value: 0, buttonText: '전체'}, {value: 1, buttonText: '입문'}, {value: 2, buttonText: '초보'}, {value: 3, buttonText: '중수'}, {value: 4, buttonText: '고수'}, {value: 5, buttonText: '초고수'}, {value: 6, buttonText: '전문가'}],
    [
        { value: '전체', buttonText: '전체' },
        { value: '건설', buttonText: '건설' },
        { value: '경로구축', buttonText: '경로구축' },
        { value: '경매', buttonText: '경매' },
        { value: '기억력', buttonText: '기억력' },
        { value: '단어', buttonText: '단어' },
        { value: '덱빌딩', buttonText: '덱빌딩' },
        { value: '레이싱', buttonText: '레이싱' },
        { value: '마피아', buttonText: '마피아' },
        { value: '미로', buttonText: '미로' },
        { value: '베팅', buttonText: '베팅' },
        { value: '블러핑', buttonText: '블러핑' },
        { value: '빼앗기', buttonText: '빼앗기' },
        { value: '셋컬렉션', buttonText: '셋컬렉션' },
        { value: '순발력', buttonText: '순발력' },
        { value: '숫자', buttonText: '숫자' },
        { value: '스토리텔링', buttonText: '스토리텔링' },
        { value: '오픈드래프팅', buttonText: '오픈드래프팅' },
        { value: '운', buttonText: '운' },
        { value: '의사소통제한', buttonText: '의사소통제한' },
        { value: '일꾼놓기', buttonText: '일꾼놓기' },
        { value: '전략', buttonText: '전략' },
        { value: '종이&펜', buttonText: '종이&펜' },
        { value: '주사위', buttonText: '주사위' },
        { value: '지역확장', buttonText: '지역확장' },
        { value: '추리', buttonText: '추리' },
        { value: '추상전략', buttonText: '추상전략' },
        { value: '타일배치', buttonText: '타일배치' },
        { value: '트릭테이킹', buttonText: '트릭테이킹' },
        { value: '특수능력', buttonText: '특수능력' },
        { value: '팀게임', buttonText: '팀게임' },
        { value: '파티게임', buttonText: '파티게임' },
        { value: '패턴', buttonText: '패턴' },
        { value: '퍼즐', buttonText: '퍼즐' },
        { value: '핸드관리', buttonText: '핸드관리' },
        { value: '협력', buttonText: '협력' },
        { value: '협상', buttonText: '협상' }
    ]
];

const SearchBoard = ({componentSize, changeTitle}) => {
    const { sort, setSort } = useSort();
    const { player, setPlayer } = usePlayer();
    const { weight, setWeight } = useWeight();
    const { system, setSystem } = useSystem();
    const [isMouseOver, setMouseOver] = useState(false);
    const [isFocus, setFocus] = useState(false);
    const [filterBoxStatus, setFilterBoxStatus] = useState(false);
    const [searchWord, setSearchWord] = useState('');
    const initFilter = () => {
        setPlayer(0);
        setWeight(0);
        setSystem('전체');
        setSort(0);
    }
    useEffect(() => {
        const timer = setTimeout(() => changeTitle(searchWord), 500);
        return () => clearTimeout(timer);
    }, [searchWord]);

    return(
        <SearchBoardWrapper>
            <div className='frow fjcenter'>
                <SearchBarOuterWrapper $width={componentSize.infoBoxWidth - 132} $border={isMouseOver || isFocus} onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}>
                    <SearchBarInnerWrapper>
                        <label className='frow fjsbetween'>
                            <SearchIcon width={24} height={24} />
                            <SearchBar type='text' value={searchWord} $width={componentSize.infoBoxWidth - 200} onChange={e => setSearchWord(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
                            <CloseButton width={24} onClick={() => setSearchWord('')} />
                        </label>
                    </SearchBarInnerWrapper>
                </SearchBarOuterWrapper>
                <FilterBoxButton className='frow fjsaround facenter' onClick={() => setFilterBoxStatus(!filterBoxStatus)}>
                    <FilterIcon width={24} height={24} />
                    <ButtonText>{filterBoxStatus ? '숨기기' : '필터'}</ButtonText>
                </FilterBoxButton>
            </div>
            <FilterBoxWrapper className='fcol center' $display={filterBoxStatus} $width={componentSize.infoBoxWidth - 20}>
                <FilterButtons type={'정렬 기준'} items={filterItems[0]} currentValue={sort} changeFilterValue={setSort}/>
                <FilterButtons type={'인원 수'} items={filterItems[1]} currentValue={player} changeFilterValue={setPlayer}/>
                <FilterButtons type={'난이도'} items={filterItems[2]} currentValue={weight} changeFilterValue={setWeight}/>
                <FilterButtons type={'시스템'} items={filterItems[3]} currentValue={system} changeFilterValue={setSystem}/>
                <FilterInitButton className='font5 center' onClick={() => initFilter()}>{'초기화'}</FilterInitButton>
            </FilterBoxWrapper>
        </SearchBoardWrapper>
    );
}

export default SearchBoard;