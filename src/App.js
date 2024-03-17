import logo from './logo.svg';
import './App.css';
import gameData from './Data/boardgame.json'

import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'

import HeaderTemplate from './Components/Header/HeaderTemplate';
import MainPage from './Components/Page/MainPage';
import SearchPage from './Components/Page/SearchPage';
import RankPage from './Components/Page/RankPage';
import CommunityPage from './Components/Page/CommunityPage';
import DetailPage from './Components/Page/DetailPage';

const bestData = [gameData[19], gameData[12], gameData[40], gameData[30], gameData[28], gameData[22], gameData[67], gameData[142], gameData[49], gameData[64], gameData[3], gameData[41], gameData[24], gameData[27], gameData[48], gameData[39]];
const easyData = [gameData[7], gameData[8], gameData[11], gameData[6], gameData[25], gameData[29], gameData[32], gameData[49], gameData[50], gameData[56], gameData[62]];
const findData = [gameData[9], gameData[5], gameData[10], gameData[12], gameData[16], gameData[24], gameData[28], gameData[37], gameData[55], gameData[57], gameData[69], gameData[53]];
const zeroData = [gameData[1], gameData[4], gameData[13], gameData[14], gameData[17], gameData[18], gameData[26], gameData[31], gameData[32], gameData[33], gameData[34], gameData[37], gameData[38], gameData[42], gameData[45], gameData[50], gameData[51], gameData[52], gameData[53], gameData[54], gameData[55], gameData[60], gameData[61], gameData[62], gameData[65], gameData[66], gameData[68]];

const d1 = [...gameData].sort((a, b) => a.ranking[0] - b.ranking[0]).slice(0, 100);
const d2 = [...gameData].filter(a => a.ranking[1] > 0).sort((a, b) => a.ranking[1] - b.ranking[1]);
const d3 = [...gameData].filter(a => a.ranking[2] > 0).sort((a, b) => a.ranking[2] - b.ranking[2]);
//const d3 = [...gameData].sort((a, b) => b.like - a.like).slice(0, 100);
const d4 = [...gameData].sort((a, b) => (a.rating !== b.rating) ? b.rating - a.rating : b.reviewers - a.reviewers).slice(0, 100);
const d5 = [...gameData].sort((a, b) => (a.reviewers !== b.reviewers) ? b.reviewers - a.reviewers : b.like - a.like).slice(0, 100);

const App = () => {
  const delay = 50;
  const {pathname, search} = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    var timer = null;
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setWindowWidth(window.innerWidth), delay);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return (
    <>
      <HeaderTemplate windowWidth={windowWidth} />
      <Routes>
        <Route path='/' element={<MainPage gameData={[bestData, zeroData]} windowWidth={windowWidth} />} />
        <Route path='/search' element={<SearchPage gameData={gameData} windowWidth={windowWidth} />} />
        <Route path='/rank' element={<RankPage gameData={[d1, d2, d3, d4, d5]} windowWidth={windowWidth} />} />
        <Route path='/detail' element={<DetailPage windowWidth={windowWidth} />} />
      </Routes>
    </>
  );
}

export default App;
// <SearchPage gameData={gameData} componentSize={componentSize} />
// <MainPage gameData={[gameData, bestData, easyData, findData, zeroData]} componentSize={componentSize} />