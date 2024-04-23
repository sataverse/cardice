import './App.css';

import { useEffect, useLayoutEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { loadLocalStorage, saveLocalStorage } from './Modules/util';
import { useScroll } from './Modules/store';

import TopNavigationBar from './Components/Navigation/TopNavigationBar';
import BottomNavigationBar from './Components/Navigation/BottomNavigationBar';
import ModalFrame from './Components/Modal/ModalFrame';
import TopButton from './Components/Others/TopButton';

import MainPage from './Components/Page/MainPage';
import SearchPage from './Components/Page/SearchPage';
import RankPage from './Components/Page/RankPage';
import CommunityPage from './Components/Page/CommunityPage';
import DetailPage from './Components/Page/DetailPage';
import Auth from './Components/Others/Auth';
import NotFoundPage from './Components/Page/NotFoundPage';

const App = () => {
  //const { scroll, setScroll } = useScroll();
  //const location = useLocation();
  const { pathname, search } = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [modalStatus, setModalStatus] = useState(0);
  const [signinStatus, setSigninStatus] = useState(loadLocalStorage('id'));

  /*
  useLayoutEffect(() => {
    scroll[location.key] = window.scrollY;

    const restore = () => {
      if(scroll[location.key] !== undefined) {
        window.scrollTo(0, scroll[location.key]);
      }
    };
    restore();
  }, [location]);
  
  
  useEffect(() => {
    var timer = null;
    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setScroll(location.key, window.scrollY);
      }, 100);
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  */

  useEffect(() => {
    var timer = null;
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setWindowWidth(window.innerWidth), 500);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  
  return (
    <>
      {windowWidth > 720 ? <TopNavigationBar windowWidth={windowWidth} signinStatus={signinStatus} changeModal={setModalStatus} /> : null}
      <Routes>
        <Route path='/' element={<MainPage windowWidth={windowWidth} />} />
        <Route path='/search' element={<SearchPage windowWidth={windowWidth} />} />
        <Route path='/rank' element={<RankPage windowWidth={windowWidth} />} />
        <Route path='/com' element={<CommunityPage />} />
        <Route path='/detail' element={<DetailPage windowWidth={windowWidth} changeModal={setModalStatus} />} />
        <Route path='/user' element={<Auth windowWidth={windowWidth} />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      {windowWidth > 720 ? <TopButton /> : null}
      {modalStatus === 0 ? null : <ModalFrame modalStatus={modalStatus} setModal={setModalStatus} setSigninStatus={setSigninStatus} />}
      {windowWidth > 720 ? null : <BottomNavigationBar signinStatus={signinStatus} changeModal={setModalStatus} />}
    </>
  );
}

export default App;
// <SearchPage gameData={gameData} componentSize={componentSize} />
// <MainPage gameData={[gameData, bestData, easyData, findData, zeroData]} componentSize={componentSize} />