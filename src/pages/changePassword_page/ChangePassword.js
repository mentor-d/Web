import "./ChangePassword.css"
import "../../css/main.css"
import Showcase from "../../components/Showcase";
import Logo from "../../Img/farmylogo.png"


const ChangePassword = () => {

    return(
        <>
            <div className="container">

                <div className="changePassword">

                    <Showcase />

                    <div className="changePassword-form">
                        <img className="changePassword-formLogo" src={Logo} alt="Logo"/>

                        <div className="changePassword-formHeading">Choose a new password</div>

                        <div className="login-form-input">
                            <p>New Password</p>

                            <input type="password"/>
                        </div>

                        <div className="login-form-input">
                            <p>Confirm New Password</p>

                            <input type="password"/>
                        </div>

                        <button className="changePassword-formBtn">Create Password</button>

                    </div>

                </div>

            </div>
        </>
    );
    };

    export default ChangePassword;