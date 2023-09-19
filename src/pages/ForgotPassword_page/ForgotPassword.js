import "./ForgotPassword.css"
import "../../css/main.css"
import Showcase from "../../components/Showcase";
import Logo from "../../Img/farmylogo.png"



const ForgotPassword = () => {

    return(
        <>
            <div className="container">

                <div className="forgotPassword">

                    <Showcase />

                    <div className="forgotPassword-form">
                        <img className="forgotPassword-formLogo" src={Logo} alt="Logo"/>

                        <div className="forgotPassword-formHeading">Forgot Password</div>

                        <div className="forgotPassword-formSubHeading">Don't worry this happens, Enter your Email or Phone number. <p>We will send you an otp to create a new password</p> </div>

                        <div className="login-form-input">
                            <p>Email or Phone number</p>

                            <input type="text"/>
                        </div>

                        <button className="forgotPassword-formBtn">Send OTP</button>

                    </div>

                </div>

            </div>
        </>
    );

};

export default ForgotPassword;