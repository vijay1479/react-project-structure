import {
  Route,
  Routes
} from "react-router-dom";

import _Header from "./shared/Header/Header";
import _Footer from "./shared/Footer/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import About from "./components/about/About";


const MainRouter = () => {
  return (
    <>
      <_Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
      </Routes>
 
      <_Footer />
    </>
  );
};

export default MainRouter;
