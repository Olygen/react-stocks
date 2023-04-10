import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Stocks from './pages/Stocks';
import Dashboard from './pages/Dashboard';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/stocks' element={<Dashboard />}/>
        <Route path='/stocks/:symbol' element={<Stocks />}/>
      </Routes>
    </div>
  );
}

export default App;
