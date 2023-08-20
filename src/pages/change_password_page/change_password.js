import Head from "../../components/header/Head";
import Profile from "../../components/profile";
import "../../css/main.css";
import "./change_password.css";
import Btn from "../../components/update_btn";
import MobileHeader from "../../components/mobile_header";
import MobileBottomNav from "../../components/mobile_bottom_nav"
const Security = () =>{
    return <>
    <Head/>
{/* ----DESKTOP VIEW---- */}

    <div className="password-body">
        <Profile/>
        <div className="password-body-container">
        <p className="password-body-container-text">Change Password</p>
        <div className="password-body-container-input">
            <p>Old Password</p>
            <input placeHolder="damilare"/>
        </div>
        <div className="password-body-container-input">
            <p>New Password</p>
            <input placeHolder="damilare"/>
        </div>
        <div className="password-body-container-input">
            <p>Confirm Password</p>
            <input placeHolder="damilare"/>
        </div>
        <Btn/>
        </div>
    </div>


    {/* ------MOBILE-VIEW---- */}

    <div className="Mobile-view">
        <div className="password-mobile-body">
            <MobileHeader/>
            <div className="password-mobile-head">
      <i class='bx bx-left-arrow-alt'></i>
      <h4> Change Password</h4>

         </div>
         <div className="password-mobile-form">
        <div className="password-mobile-form-input">
          <h4>Old Password</h4>
          <input />
        </div>
        <div className="password-mobile-form-input">
          <h4>New Password</h4>
          <input />
        </div>
        <div className="password-mobile-form-input">
          <h4>Confirm Password</h4>
          <input />
        </div>
        <div className="password-mobile-form-input-check-box">
          <h4>Allow FingerprintLogin</h4>
          <input type="checkbox" />
        </div>
        <button className="password-mobile-btn">
        Update
      </button>
    
    </div>

        </div>
        <MobileBottomNav/>
    </div>

    </>
}
export default Security;