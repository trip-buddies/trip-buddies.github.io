import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header/Header';
import Login from './components/Catalog/Login/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Welcome to our site!</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
