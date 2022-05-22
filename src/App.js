import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Banner from './pages/Home/Banner/Banner';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/banner" element={<Banner/>} />
      </Routes>
    </div>
  );
}

export default App;
