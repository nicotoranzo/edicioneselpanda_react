import './App.css';
import Navbar from './components/Navbar/Navbar';
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer';
import Itemdetailcontainer from './components/Itemdetailcontainer/Itemdetailcontainer';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      <CartProvider>
      <Navbar />
        <Routes>
          <Route path='/' element={<Itemlistcontainer />}/>
          <Route path='/category' element={<Itemlistcontainer />}/>
          <Route path='/category/:categoryId' element={<Itemlistcontainer />}/>  
          <Route path='/item/:itemId' element={<Itemdetailcontainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      <Footer />  
      </CartProvider>
    </div>
  );
}

export default App;



