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
import Login from "./pages/login_page/login";
import { CookiesProvider, useCookies } from "react-cookie";
import ForgotPassword from "./pages/ForgotPassword_page/ForgotPassword";
import EnterOtp from "./pages/enterOtp_page/EnterOtp"
import ChangePassword from "./pages/changePassword_page/ChangePassword"
import Farmproduce from "./Components/farmProduce";
import Profile from "./Components/profile";
import farmProductNav from "./Components/farmProductNav";
import Cart from "./pages/cart_page/cart";
import Account from "./pages/account_page/account"; 
import Email from "./pages/email_settings/emailSettings"
import Security from "./pages/change_password_page/change_password";

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
        <Route path="/farmProduce" element={<Farmproduce/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/farmProductNav" element={<farmProductNav/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Account" element={<Account/>}/>
        <Route path="/email" element={<Email/>}/>
        <Route path="/security" element={<Security/>}/>
      </Routes>
      </CookiesProvider>
  );
}

export default App;
