import { useState } from "react";
import "./login.css"
import Axios from "axios";
import { Link } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";



const Login = () =>{

    const [cookies, setCookie] = useCookies(["user"]);

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const loginHandler = async () => {

        if (Email == '' || Password == ''){
            alert('Please all fields should be filed')
            return
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
                console.log(err.response.data.message);
                alert(err.response.data.message)
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
    <div className="signin">
      <div className="signin-menu">
        <div className="signin-menu-options">
          <div className="signin-menu-options-btn">
            <img src="../Img/profile.png" />
            <p>Sign in as a customer</p>
            <img className="signin-menu-options-btn-icon" src="../Img/tick.png" />
          </div>
          <div className="signin-menu-options-btn">
            <img src="../Img/store.png" />
            <p>Sign in Store</p>
            <img className="signin-menu-options-btn-icon" src="../Img/tick.png" />
          </div>
          <div className="signin-menu-options-btn">
            <img src="../Img/logistics.png" />
            <p>Sign in Logistics Company</p>
            <img className="signin-menu-options-btn-icon" src="../Img/tick.png" />
          </div>
          <div className="signin-menu-options-btn">
            <img src="../Img/farmer.png" />
            <p>Sign in as a Farmer</p>
            <img className="signin-menu-options-btn-icon" src="../Img/tick.png" />
          </div>
        </div>
        <p className="signin-menu-text">New to FarmyApp? <span>SignUp</span></p>
      </div>
      <div className="signin-form">
        <div className="signin-form-logo">
          <img src="../Img/farmylogo.png" alt="" />
        </div>
        <h1 className="signin-form-heading">Welcome to FarmyApp</h1>
        <div className="signin-form-input">
          <p>username or email</p>
          <input type="text" value={Email} onChange={ (e) => {
            setEmail(e.target.value)
          }} />
        </div>
        <div className="signin-form-input-password">
          <p>Password</p>
          <input type="password" value={Password} onChange={(e) => {
            setPassword(e.target.value)
          }} />
        </div>
        <p className="signin-form-forgot">Forgot password ?</p>
        <button className="signin-form-btn" onClick={ () => {
            loginHandler()
            // CheckIfLoggedIn()

        } }>Sign in</button>
        <div className="or">
          <div></div>
          <p>or</p>
          <div></div>
        </div>
        <div className="signin-form-btn-g">
          <img src="../Img/google.png" />
          <p>Sign in with Google</p>
        </div>
        <p className="signin-form-text">
          New to FarmyApp? <Link to={"/signup"}>Create Account</Link>
        </p>
      </div>
    </div>
  </section>
  </>
);
}
export default Login