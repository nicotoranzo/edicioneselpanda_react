import './App.css';
import {NavBar} from './components/navbar/navbar';
import {ItemListContainer} from './components/itemlistcontainer/itemlistcontainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"} />
    </div>
  );
}

export default App;

