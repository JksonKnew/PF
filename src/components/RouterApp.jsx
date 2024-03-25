import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "../pages/Home/homePage"
import AboutPage from "../pages/About/aboutPage"
import ErrorPage from "../pages/error/errorPage"
import Nav from './nav/nav';
import Footer from './footer/footer';

function RouterApp() {
  return (
    <Router>
        <Nav />
      <Routes>
        <Route path="/PF" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default RouterApp;
