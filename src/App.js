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


const App = () => {

  Axios.defaults.baseURL = 'http://localhost:3500'

  return (
    <CookiesProvider>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </CookiesProvider>
  );
}

export default App;
