import "./App.css"; 
import LandingPage from "./pages/landing_page/LandingPage";
// import Head from "./components/Head";
// import Login from "./components/Signin";
// import Showcase from "./components/Showcase"; 
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
import Farmproduce from "./components/farmProduce";
import Profile from "./components/profile";
import farmProductNav from "./components/farmProductNav";
import Cart from "./pages/cart_page/cart";
import Account from "./pages/account_page/account"; 
import Email from "./pages/email_settings/emailSettings"
import Security from "./pages/change_password_page/change_password";
import Wallet from "./pages/wallet_page/wallet"
import Faq from "./pages/faq_page/faq";
import Referral from "./pages/referral_page/referral";
import Order from "./pages/OrderDetailView_page/orderDetail";
import OrderListView from "./pages/orderListView_page/order_list_view";
import SearchStore from "./pages/search_stores/search_stores";
import StoreProductSearch from "./pages/store_product_search_page/store_product_search";
import FarmProductList from "./pages/farm_product_list_view_page/farm_product_list";
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
        <Route path="/Wallet" element={<Wallet/>}/>
        <Route path="/Faq" element={<Faq/>}/> 
        <Route path="/Referral" element={<Referral/>}/>
        <Route path="/OrderDetail" element={<Order/>}/>
        <Route path="/OrderListView" element={<OrderListView/>}/>
        <Route path="/SearchStore" element={<SearchStore/>}/>
        <Route path="/StoreProductSearch" element={<StoreProductSearch/>}/>
        <Route path="farmproductlist" element={<FarmProductList/>}/>
      </Routes>
      </CookiesProvider>
  );
}

export default App;
