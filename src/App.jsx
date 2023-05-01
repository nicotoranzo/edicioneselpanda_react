import './App.css';
import Navbar from './components/Navbar/Navbar';
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer';
import Itemdetailcontainer from './components/Itemdetailcontainer/Itemdetailcontainer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Itemlistcontainer />}/>
          <Route path='/category' element={<Itemlistcontainer />}/>
          <Route path='/category/:categoryId' element={<Itemlistcontainer />}/>  
          <Route path='/item/:itemId' element={<Itemdetailcontainer />}/>
        </Routes>
    </div>
  );
}

export default App;



