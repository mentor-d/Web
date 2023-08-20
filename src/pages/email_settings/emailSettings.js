import "../../css/main.css"
import Head from "../../Components/header/Head";
import Profile from "../../Components/profile";
import "./emailSettings.css";
import Btn from "../../Components/update_btn";

const Email = () =>{
return <>

<Head/>
<div className="email-body">
    <Profile/>
    <div className="email-body-container">
        <p className="email-body-container-text">Edit Email</p>
        <div className="email-body-container-input">
            <p>Old Email</p>
            <input placeHolder="damilare"/>
        </div>
        <div className="email-body-container-input">
            <p>Old Email</p>
            <input placeHolder="damilare"/>
        </div>
        <Btn/>
    </div>
</div>
</>
}
 export default Email;