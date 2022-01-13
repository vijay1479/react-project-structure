import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Outlet
} from "react-router-dom";

import _Header from "./shared/Header";
import _Footer from "./shared/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import About from "./components/about/About";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import RegistrationForm from "./components/auth/registerationForm";
import VerifyOTP from "./components/auth/verify-otp";
import SetPassword from "./components/auth/set-password";

const MainRouter = () => {
  let location = useLocation();
  let state = location.state as { backgroundLocation?: Location };
  console.log("state", state);
  return (
    <>
      <_Header />
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
      </Routes>
 
      <_Footer />
    </>
  );
};

export default MainRouter;
