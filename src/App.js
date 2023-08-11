import "./App.css"; 
import LandingPage from "./pages/landing_page/LandingPage";
// import Head from "./Components/Head";
// import Login from "./components/Signin";
// import Showcase from "./Components/Showcase"; 
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink
} from "react-router-dom";
import LoginPage from "./pages/signup_page/signup";
import Axios from "axios";
import SignUpPage from "./pages/signup_page/signup";
import Signin from "./components/Signin";
import Login from "./pages/login_page/login";
import { CookiesProvider, useCookies } from "react-cookie";
import ForgotPassword from "./pages/ForgotPassword_page/ForgotPassword";
import EnterOtp from "./pages/enterOtp_page/EnterOtp"
import ChangePassword from "./pages/changePassword_page/ChangePassword"


const App = () => {

  Axios.defaults.baseURL = 'http://localhost:3500'

  return (
    <CookiesProvider>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/Forgot_Password" element={<ForgotPassword/>}/>
        <Route path="/EnterOtp" element={<EnterOtp/>}/>
        <Route path="/ChangePassword" element={<ChangePassword/>}/>
      </Routes>
      </CookiesProvider>
  );
}

export default App;
