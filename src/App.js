import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Banner from './pages/Home/Banner/Banner';
import NotFound from './pages/Shared/NotFound';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './pages/Shared/Navbar/Navbar';
import Footer from './pages/Shared/Footer';
import ScrollToTop from "react-scroll-to-top";
import AddReview from './pages/AddReview/AddReview';
import RequireAuth from './pages/Login/RequireAuth';
import Purchage from './pages/Purchage/Purchage';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/purchage/:productsId' element={
          <RequireAuth>
            <Purchage></Purchage>
          </RequireAuth>}>
        </Route>
        <Route path='/addReview' element={
          <RequireAuth>
            <AddReview></AddReview>
          </RequireAuth>}>
        </Route>


        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>

      {/* scrool To Top */}
      <ScrollToTop smooth component={<p style={{ color: "#1B98F5", marginLeft: "6px" }}>
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-up" className="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"></path>
        </svg>
      </p>} />
    </div>
  );
}

export default App;
