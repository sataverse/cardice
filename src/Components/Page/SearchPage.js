import { useEffect, useState } from "react";
import { useFilter } from "../../Modules/store";
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

const sortFunc = [
    (dataA, dataB) => dataA.title > dataB.title ? 1 : -1,
    (dataA, dataB) => dataB.like - dataA.like,
    (dataA, dataB) => dataB.rating - dataA.rating,
    (dataA, dataB) => dataB.reviewers - dataA.reviewers,
]

const SearchPage = ({windowWidth}) => {
    const { sort, player, weight, system } = useFilter();
    const [renderNum, setRenderNum] = useState(0);
    const [title, setTitle] = useState('');
    const [searchGameData, setSearchGameData] = useState(null);
    const [componentSize, setComponentSize] = useState(getComponentSize(windowWidth));

    useEffect(() => setComponentSize(getComponentSize(windowWidth)), [windowWidth]);

    useEffect(() => {
        setRenderNum(6);
        if(searchGameData !== null) {
            var tempData = [...searchGameData];
            tempData.sort(sortFunc[sort]);
            setSearchGameData(tempData);
        }
    }, [sort]);

    useEffect(() => {
        const findGame = async() => {
            try {
                setRenderNum(6);
                var query = '?';
                if(title !== '') {
                    query += `title=${title}&`;
                }
                if(player !== 0) {
                    query += `player=${player}&`;
                }
                if(weight !== 0) {
                    query += `weight=${weight}&`;
                }
                if(system !== '전체') {
                    query += `system=${system}&`;
                }

                const response = await fetch(`http://localhost:3030/boardgame/find${query}`);
                const gameData = await response.json();
                setSearchGameData(gameData.data.sort(sortFunc[sort]));
            } catch(error) {
                console.log(error);
            }
        };
        const timer = setTimeout(() => findGame(), 500);
        return () => clearTimeout(timer);
    }, [title, player, weight, system]);

    return(
        <>
            <SearchBoard componentSize={componentSize} changeTitle={setTitle} />
            <SearchResults gameData={searchGameData} windowWidth={windowWidth} componentSize={componentSize} renderNum={renderNum} setRenderNum={setRenderNum} />
        </>
    );
}

export default SearchPage;