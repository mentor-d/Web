import "./account.css";
import "../../css/main.css"
import Head from "../../components/header/Head"
import Profile from "../../components/profile";
import Photo from "../../Img/mypic.jpg"
import Btn from "../../components/update_btn"
import MobileHeader from "../../components/mobile_header";
import MobileBottomNav from "../../components/mobile_bottom_nav";
// import Logo from "../../Img/FARMY EMB green 2.png"
const Account = () =>{
    return<>
   <Head/> 
   {/* ----------DESKTOP VIEW--------- */}
    <div className="account-body">
        <Profile/>
        <div className="account-body-form">
          <div className="account-body-form-edit-img">
            <img src={Photo} alt="img" />
            <a href="#"><i className="bx bx-pencil"></i></a>
          </div>
          <div className="account-body-form-input">
            <h3>Username</h3>
            <input placeHolder="Damilare" type="text" />
          </div>
          <div className="account-body-form-input">
            <h3>Name</h3>
            <input placeHolder="Afolabi Damilare" type="text" />
          </div>
          <div className="account-body-form-input">
            <h3>Phone Number</h3>
            <input placeHolder="08056789123" type="text" />
          </div>
          <Btn/>
        </div>
    </div>


    {/* ----------- MOBILE VIEW-------- */}

  <div className="mobile-view">
    <div className="account-mobile-body">
      <MobileHeader/>
      <div className="account-mobile-head">
      <i class='bx bx-left-arrow-alt'></i>
      <h4> Edit Profile</h4>

      </div>
      <div className="account-mobile-profile-img">
        <img src={Photo} alt="img"/>
        <div className="account-mobile-profile-icon">
        <i className="bx bx-pencil"></i>
        </div>
      </div>
      <div className="account-mobile-form">
        <div className="account-mobile-form-input">
          <h4>Username</h4>
          <input />
        </div>
        <div className="account-mobile-form-input">
          <h4>Username</h4>
          <input />
        </div>
        <div className="account-mobile-form-input">
          <h4>Username</h4>
          <input />
        </div>
        <div className="account-mobile-form-input">
          <h4>Username</h4>
          <input />
        </div>
        <button className="account-mobile-btn">
        Update
      </button>
    
    </div>
    
    <MobileBottomNav/>
   
    </div>

  </div>
    </>
}
export default Account