import { useEffect } from 'react';
// eslint-disable-next-line
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Checkout from './scenes/checkout/Checkout';
import Confirmation from './scenes/checkout/Confirmation';
import Home from './scenes/home/Home';
import Navbar from './scenes/global/Navbar';
import ItemDetails from './scenes/itemDetails/ItemDetails';


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
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/item/:itemId" element={<ItemDetails/>}></Route>
          <Route path="checkout" element={<Checkout/>}></Route>
          <Route path="checkout/success" element={<Confirmation/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
