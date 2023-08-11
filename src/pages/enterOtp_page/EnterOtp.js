import "./EnterOtp.css"
import "../../css/main.css"
import Showcase from "../../components/Showcase";
import Logo from "../../Img/farmylogo.png"


const EnterOtp = () => {

    return(
        <>
            <div className="container">

                <div className="enterOtp">
                    <Showcase/>

                    <div className="enterOtp-form">
                        <img className="forgotPassword-formLogo" src={Logo} alt="Logo"/>

                       <div className="enterOtp-formHeading">OTP Verification</div> 

                       <div className="enterOtp-formSubHeading">Enter the OTP sent to +2348088130811</div> 

                       <div className="login-form-input">
                        <p>OTP Code</p>

                        <input type="text"/>
                        

                        <button className="enterOtp-formBtn">Send OTP</button>
                    </div>


                    </div>

                </div>
            </div>
        </>
    );
};

export default EnterOtp;