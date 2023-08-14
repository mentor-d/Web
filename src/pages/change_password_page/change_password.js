import Head from "../../Components/header/Head";
import Profile from "../../Components/profile";
import "../../css/main.css";
import "./change_password.css";
import Btn from "../../Components/update_btn"
const Security = () =>{
    return <>
    <Head/>
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
    </>
}
export default Security;