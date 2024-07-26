import './App.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Favourite from './components/Favourite/Favourite';
import Errorpage from './components/Error/Errorpage';
import { useState } from 'react';
function App() {
  const[favArr,setFavArr]=useState(JSON.parse(localStorage.getItem('e-kart')) || []);
  return (
    <>
    <Nav className="justify-content-center" activeKey="/">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/product_list">Product List</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/fav">Favourite</Nav.Link>
      </Nav.Item>
    </Nav>

    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product_list" element={<Products favArr={favArr} setFavArr={setFavArr}/>}/>
          <Route path="/fav" element={<Favourite favArr={favArr}/>}/>
          <Route path="*" element={<Errorpage/>}/>
        </Routes>
      </Router>
  </>
  );
}

export default App;
