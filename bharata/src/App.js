import { Box } from "@mui/material";
import React from "react";
import Header from "./commonComponets/Header";
import Footer from "./commonComponets/Footer";
import AboutUs from "./commonComponets/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './commonComponets/Home';
import ContactUs from './commonComponets/ContactUs';
import Dashbord from './commonComponets/Dashbord';
import Fmge from "./Courser/Fmge";
import Neetpg from "./Courser/Neetpg";
import FMGE from './CommonRoutes/FmgeRoutes';
// import Services from './commonComponets/Services';
// import Intership from "./Services/";
import Corporate from "./Services/CorporateTraining";
import Jobplacements from "./Services/JobPlacements";
import BscNersing from "./Services/BscNursing";
import Medical from "./Services/Admissions";
import CPR from './Courser/CprmedicalSkills';
import Drone from "./Courser/Drone";
import Ai from "./Courser/Ai";
import Electronics from "./Courser/Electroincs";
import Robotic from "./Courser/Robotic";
import Intership from "./Services/Intership";
const App = () => {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/*" element={
            <>
              <Header />
              <Routes>
                <Route path="/FMGE" element={<FMGE />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/CPR" element={<CPR />} />
                <Route path="/fmge" element={<Fmge />} />
                <Route path="/neet" element={<Neetpg />} />
                <Route path="/Drone" element={<Drone/>} />
                <Route path="/corporate" element={<Corporate />} />
                <Route path="/jobplacements" element={<Jobplacements />} />
                <Route path="/bscnursing" element={<BscNersing />} />
                <Route path="/medical" element={<Medical />} />
                <Route path="/Ai" element={<Ai />} />
                <Route path="/Electronics" element={<Electronics />} />
                <Route path="/Robotic" element={<Robotic />} />
                <Route path="/internship" element={<Intership/>}/>
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
