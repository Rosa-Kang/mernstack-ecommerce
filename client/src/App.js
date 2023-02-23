import { useEffect } from 'react';
// eslint-disable-next-line
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './scenes/home/Home'


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTop(0, 0);
  }, [pathname]);
  return null;
}

function App() { 
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
