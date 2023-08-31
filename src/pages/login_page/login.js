import { useState } from "react";
import "./login.css"
import profile from "../../Img/profile.png"
import tick from "../../Img/tick.png"
import logo from "../../Img/farmylogo.png"
import unhide from "../../Img/eye.png"
import store from "../../Img/store.png"
import logistics from "../../Img/logistics.png"
import farmer from "../../Img/farmer.png"
import google from "../../Img/google.png"
import Axios from "axios";
import { Link } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";



const Login = () =>{

    const [cookies, setCookie] = useCookies(["user"]);

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const loginHandler = async () => {

        if (Email == '' || Password == ''){
            alert('Please all fields should be filled')
            return
        }

        if ( Password.length < 8 ) {
            alert('Password must be at least 8')
        }




        const config = { headers: {"Content-Type":"application/json"}}; 
        const Payload = {
            email: Email,
            password: Password
        }


        // try {
        //     const response = await fetch('/api/v1/farm/auth',Payload);
        //     console.log("Download complete", response);
        //   } catch (error) {
        //     console.error(`Download error: ${error.message}`);
        //   }

        Axios.post('/api/v1/farm/auth',Payload, config)
            .then( (response) => {
                document.cookie = response.jwt
                // console.log(document.cookie)
                console.log(response)
                // setCookie("jwt", response.data, { path: "/" });
            })
            .catch( (err) => {
                console.log(err);
                alert(err.response)
            })
    }

    const CheckIfLoggedIn = () => {

        Axios.get('/api/v1/farm/profile')
            .then( (response) => {
                console.log(response.data)
            } )
            .catch( (err) => {
                console.log(err)
            } )

    }




return(
    <>
    <section className="container">

        <div className="login">

            <div className="login-menu">
                <div className="login-menu-options">
                <div className="login-menu-options-btn">
                    <img className="signUp-menu-options-btn-icon" src={profile} alt="logo" />
                    <p>Sign in as a customer</p>
                    <img className="signUp-menu-options-btn-tick-icon" src={tick} alt="logo" />
                </div>

                <div className="login-menu-options-btn">
                    <img className="signUp-menu-options-btn-icon" src={store} alt="logo" />
                    <p>Sign in Store</p>
                    <img className="signUp-menu-options-btn-tick-icon" src={tick} alt="logo" />
                </div>

                <div className="login-menu-options-btn">
                    <img className="signUp-menu-options-btn-icon" src={logistics} alt="logo" />
                    <p>Sign in Logistics Company</p>
                    <img className="signUp-menu-options-btn-tick-icon" src={tick} alt="logo" />
                </div>

                <div className="login-menu-options-btn">
                    <img className="signUp-menu-options-btn-icon" src={farmer} alt="logo" />
                    <p>Sign in as a Farmer</p>
                    <img className="signUp-menu-options-btn-tick-icon" src={tick} alt="logo" />
                </div>

            </div>
                <p className="login-menu-text">Already have an account? <span>Login</span></p>
            </div>

            <div className="login-form">

                <div className="login-form-logo">
                    <img src={logo} alt="logo" />
                </div>

                <h1 className="login-form-heading">Welcome to FarmyApp</h1>

                <div className="login-form-input">
                    <p>Username or Email</p>

                    <input type="text" value={Email} onChange={ (e) => {
                        setEmail(e.target.value)}} />
                </div>

                <div className="login-form-input-password">
                    <p>Password</p>
                    <input type="password" value={Password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                </div>

                <Link className="login-form-forgot" to={"/Forgot_password"}>Forgot password?</Link>

                <button className="login-form-btn" onClick={ () => {
                    loginHandler()
                    // CheckIfLoggedIn()

                } }>Sign in</button>

                <div className="or">
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>

                <div className="login-form-btn-g">
                    <img src={google} alt="logo" />
                    <p>Sign in with Google</p>
                </div>

                <p className="login-form-text">
                New to FarmyApp? <Link to={"/signup"}>Create Account</Link>
                </p>
            </div>

        </div>
        
  </section>
  </>
);
}
export default Login