import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Banner from './pages/Home/Banner/Banner';
import NotFound from './pages/Shared/NotFound';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/banner" element={<Banner/>} />


        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
