import "../../css/main.css"
import Head from "../../components/header/Head";
import Profile from "../../components/profile";
import "./emailSettings.css";
import Btn from "../../components/update_btn";

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