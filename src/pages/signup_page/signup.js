import { useState } from "react";
import profile from "../../Img/profile.png"
import tick from "../../Img/tick.png"
import logo from "../../Img/farmylogo.png"
import unhide from "../../Img/eye.png"
import store from "../../Img/store.png"
import logistics from "../../Img/logistics.png"
import farmer from "../../Img/farmer.png"
import google from "../../Img/google.png"
// import hide from "../../Img/hidden.png"
import './signup.css';
import Axios from 'axios';
import { Link } from "react-router-dom";


const TogglePasswordVisibility = () => {
    const passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }

}
const SignUpPage = () => {

    const [ Email, setEmail ] = useState('')
    const [ FarmName, setFarmName ] = useState('')
    const [ FarmAddress, setFarmAddress ] = useState('')
    const [ UserName, setUserName ] = useState('')
    const [ City, setCity ] = useState('')
    const [ PhoneNumber, setPhoneNumber ] = useState('')
    const [ Password, setPassword ] = useState('')
    const [ ConfirmPassword, setConfirmPassword ] = useState('')

    const SignUpHandler = () => {

        if ( Email === '' || FarmName === '' || 
             UserName === '' || PhoneNumber === '' || 
             Password === '' || ConfirmPassword === '' ||
             City === '' || FarmAddress === ''  ) {
            alert('Please all fields should be filed')
            return 
        }

        if ( Password !== ConfirmPassword ) {
            alert('Password and confirm password should be the same')
            return 
        }

        if ( Password.length < 8){
            alert('Password must be at least 8 characters')
        }

        const Payload = {
            farmName : FarmName,
            farmAddress: FarmAddress,
            city: City,
            email: Email,
            password: Password,
            username: UserName,
            phoneNumber: PhoneNumber
        }

        Axios.post('/api/v1/farm/',Payload)
            .then( (response) => {
                console.log(response.data)
            } )
            .catch( (err) => {
                console.log(err.response.data.message);
                alert(err.response.data.message)
            } )

    }



    return (

        <>
            {/* <Head/> */}
            <section className="container">

                <div className="signUp">

                    <div className="signUp-menu">

                        <div className="signUp-menu-options">

                            <div className="signUp-menu-options-btn">
                                <img className="signUp-menu-options-btn-icon" src={profile} alt="logo" />
                                <p>Sign in as a customer</p>
                                <img className="signUp-menu-options-btn-tick-icon" src={tick} alt="logo" />
                            </div>

                            <div className="signUp-menu-options-btn">
                                <img className="signUp-menu-options-btn-icon" src={store} alt="logo" />
                                <p>Sign in Store</p>
                                <img className="signUp-menu-options-btn-tick-icon" src={tick} alt="logo" />
                            </div>

                            <div className="signUp-menu-options-btn">
                                <img className="signUp-menu-options-btn-icon" src={logistics} alt="logo" />
                                <p>Sign in Logistics Company</p>
                                <img className="signUp-menu-options-btn-tick-icon" src={tick} alt="logo" />
                            </div>

                            <div className="signUp-menu-options-btn">
                                <img className="signUp-menu-options-btn-icon" src={farmer} alt="logo" />
                                <p>Sign in as a Farmer</p>
                                <img className="signUp-menu-options-btn-tick-icon" src={tick} alt="logo" />
                            </div>

                        </div>

                        <p className="signUp-menu-text">New to FarmyApp? <span>SignUp</span></p>
                    </div>

                    <div className="signUp-form">

                        <div className="signUp-form-logo">
                            <img className="" src={logo} alt="Logo" />
                        </div>

                        <h1 className="signUp-form-heading">Welcome to FarmyApp</h1>

                        <div className="signUp-form-input">
                            <p className="signUp-form-input-headText">Farm Name</p>
                            <input type="text" value={FarmName} onChange={ (e) => {
                                setFarmName(e.target.value)
                            } } />
                        </div>

                        <div className="signUp-form-input">
                            <p className="signUp-form-input-headText">Farm Address</p>
                            <input type="text" value={FarmAddress} onChange={ (e) => {
                                setFarmAddress(e.target.value)
                            } } />
                        </div>
                        
                        <div className="signUp-form-input">
                            <p className="signUp-form-input-headText">City</p>
                            <input type="text" value={City} onChange={ (e) => {
                                setCity(e.target.value)
                            } } />
                        </div>

                        <div className="signUp-form-input">
                            <p className="signUp-form-input-headText">Username</p>
                            <input type="text" value={UserName} onChange={ (e) => {
                                setUserName(e.target.value)
                            } } />
                        </div>

                        <div className="signUp-form-input">
                            <p className="signUp-form-input-headText">Email</p>
                            <input type="email" value={Email} onChange={ (e) => {
                                setEmail(e.target.value)
                            } } />
                        </div>

                        <div className="signUp-form-input">
                            <p className="signUp-form-input-headText">Phone Number</p>
                            <input type="text" value={PhoneNumber} onChange={ (e) => {
                                setPhoneNumber(e.target.value)
                            } } />
                        </div>

                        <div className="signUp-form-input">
                            <p className="signUp-form-input-headText">Password</p>
                            <div className="signUp-form-input-cont">
                                <input id="password" type="password" value={Password} onChange={ (e) => {
                                    setPassword(e.target.value)
                                } } />
                            <img onclick="TogglePasswordVisibility()" className="unhide" src={unhide} alt="unhide" />
                            </div>
                        </div>

                        <div className="signUp-form-input">
                            <p className="signUp-form-input-headText">Confirm Password</p>
                            <div className="signUp-form-input-cont">
                                <input id="confirmPassword" type="password" value={ConfirmPassword} onChange={ (e) => {
                                    setConfirmPassword(e.target.value)
                                } } />
                            <img onclick="TogglePasswordVisibility()" className="unhide" src={unhide} alt="unhide" />
                            </div>               
                        </div>  
                    <button className="signUp-form-btn" onClick={ () => SignUpHandler() } >Sign Up</button>

                    <div className="or">
                        <div></div>
                        <p>or</p>
                        <div></div>
                    </div>
                    
                    <div className="signUp-form-btn-g">
                        <img className="" src={google} alt="Logo" />
                        <p>Sign in with Google</p>
                    </div>
                    <p className="signUp-form-text">
                        Already have an account? <Link to={"/login"}>Login here</Link> 
                    </p>
                    </div>

                </div>

            </section>
        </>

    );

}

export default SignUpPage