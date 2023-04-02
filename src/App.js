import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './components/Cart';
import ListProducts from './components/ListProducts';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<ListProducts />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
