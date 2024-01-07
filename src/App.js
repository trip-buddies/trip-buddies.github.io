import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';

function App() {
  return (
    <div className="App">
      <h1>Welcome to our site!</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
