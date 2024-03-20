import { useEffect, useState } from "react";
import { trimString } from "../../Modules/util";
import SearchBoard from "../Search/SearchBoard"
import SearchResults from "../Search/SearchResults";

const getComponentSize = width => {
    if(width >= 840) {
        return {infoBoxWidth: 800, margin: 16, fontSize: 1.1};
    }
    else if(width >= 640) {
        return {infoBoxWidth: 600, margin: 10, fontSize: 1};
    }
    else {
        return {infoBoxWidth: 430};
    }
}

const SearchPage = ({gameData, windowWidth}) => {
    const [filterValue, setFilterValue] = useState({title: '', sort: 0, player: 0, weight: 0, system: '전체'});
    const [searchGameData, setSearchGameData] = useState(gameData);
    const [renderNum, setRenderNum] = useState(0);
    const [componentSize, setComponentSize] = useState(getComponentSize(windowWidth));
    
    const changeSearchWord = str => setFilterValue({...filterValue, title: trimString(str)});
    const changeSort = num => setFilterValue({...filterValue, sort: num});
    const changePlayer = num => setFilterValue({...filterValue, player: num});
    const changeWeight = num => setFilterValue({...filterValue, weight: num});
    const changeSystem = str => setFilterValue({...filterValue, system: str});

    useEffect(() => setComponentSize(getComponentSize(windowWidth)), [windowWidth]);
    useEffect(() => {
        setRenderNum(6);
        var tempData = [...gameData];
        if(filterValue.title !== '') {
            const temptempData = tempData.filter(data => trimString(data.title).indexOf(filterValue.title) !== -1 || trimString(data.titleEN).indexOf(filterValue.title) !== -1);
            if(temptempData.length !== 0) {
                tempData = temptempData;
            }
        }
        if(filterValue.player === 7) {
            tempData = tempData.filter(data => data.player[1] >= 7);
        }
        else if(filterValue.player !== 0) {
            tempData = tempData.filter(data => data.player[0] <= filterValue.player && data.player[1] >= filterValue.player);
        }
        if(filterValue.weight !== 0) {
            tempData = tempData.filter(data => data.weight === filterValue.weight);
        }
        if(filterValue.system !== '전체') {
            tempData = tempData.filter(data => data.system.indexOf(filterValue.system) >= 0);
        }
        if(filterValue.sort === 0) {
            tempData.sort((dataA, dataB) => dataA.title > dataB.title ? 1 : -1);
        }
        else if(filterValue.sort === 1) {
            tempData.sort((dataA, dataB) => dataB.like - dataA.like);
        }
        else if(filterValue.sort === 2) {
            tempData.sort((dataA, dataB) => dataB.rating - dataA.rating);
        }
        else {
            tempData.sort((dataA, dataB) => dataB.reviewers - dataA.reviewers);
        }
        setSearchGameData(tempData);
    }, [filterValue])

    return(
        <>
            <SearchBoard componentSize={componentSize} changeSearchWord={changeSearchWord} changeSort={changeSort} changePlayer={changePlayer} changeWeight={changeWeight} changeSystem={changeSystem} />
            <SearchResults gameData={searchGameData} windowWidth={windowWidth} componentSize={componentSize} renderNum={renderNum} setRenderNum={setRenderNum} />
        </>
    );
}

export default SearchPage;