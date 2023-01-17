import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Header/Navbar';
import BackgroundImage from './Components/HeroArea/BackgroundImage';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Projects from './Components/Pages/Projects';
import Achievement from './Components/Pages/Achievement';
import GoogleMap from './Components/Pages/GoogleMap';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy';
import TermsOfUse from './Components/Pages/TermsOfUse';

import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";


function App() {
  return (
    <> 
    <Router>
    <Navbar />
    <BackgroundImage />
    <Routes>
      <Route exact path='/about' element={< About />} />
      <Route exact path='/achievement' element={ <Achievement />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route exact path='/projects' element={<Projects />}/>
      <Route path='contact/address' element={<GoogleMap />}/>
      <Route path='contact/address' element={<GoogleMap />}/>
      <Route path='privacy' element={<PrivacyPolicy />}/>
      <Route path='terms' element={<TermsOfUse />}/>
    </Routes>
   <Footer />
   </Router>
  </>
  );
}

export default App;