import "../css/Signin.css";
import profile from "../Img/Vector.png";
import store from "../Img/store.png";
import car from "../Img/car.png";
import farmer from "../Img/farmer.png"

const Signin = () => {
    return(
        <div className="signin-display">
            <div className="signin-left-box">
                <div className="signin-options">
                    <img className="sign-in-options-icon" src={profile} alt="icon" />
                    <div className="signin-options-text">Sign in as a customer</div>
                </div>

                <div className="signin-options">
                    <img className="sign-in-options-icon" src={store} alt="icon" />
                    <div className="signin-options-text">Sign in Store</div>
                </div>

                <div className="signin-options">
                    <img className="sign-in-options-icon" src={car} alt="icon" />
                    <div className="signin-options-text">Sign in Logistic Company</div>
                </div>

                <div className="signin-options">
                    <img className="sign-in-options-icon" src={farmer} alt="icon" />
                    <div className="signin-options-text">Sign in as a Farmer</div>
                </div>

                <div className="signin-login-text">Already have an account? <a href="" className="">Login</a></div>
            </div>

            <div className="signin-right-box"></div>
        </div>
    );
};

export default Signin;