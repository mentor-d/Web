import { useState } from "react";
import Head from "../../components/header/Head";
import './signup.css';
import Axios from 'axios';
import { Link } from "react-router-dom";


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

        if ( Email == '' || FarmName == '' || 
             UserName == '' || PhoneNumber == '' || 
             Password == '' || ConfirmPassword == '' ||
             City == '' || FarmAddress == ''  ) {
            alert('Please all fields should be filed')
            return 
        }

        if ( Password !== ConfirmPassword ) {
            alert('Password and confirm password should be the same')
            return 
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
                <div className="login">
                    <div className="login-menu">
                    <div className="login-menu-options">
                        <div className="login-menu-options-btn">
                        <img src="../Img/profile.png" />
                        <p>Sign in as a customer</p>
                        <img className="login-menu-options-btn-icon" src="../Img/tick.png" />
                        </div>
                        <div className="login-menu-options-btn">
                        <img src="../Img/store.png" />
                        <p>Sign in Store</p>
                        <img className="login-menu-options-btn-icon" src="../Img/tick.png" />
                        </div>
                        <div className="login-menu-options-btn">
                        <img src="../Img/logistics.png" />
                        <p>Sign in Logistics Company</p>
                        <img className="login-menu-options-btn-icon" src="../Img/tick.png" />
                        </div>
                        <div className="login-menu-options-btn">
                        <img src="../Img/farmer.png" />
                        <p>Sign in as a Farmer</p>
                        <img className="login-menu-options-btn-icon" src="../Img/tick.png" />
                        </div>
                    </div>
                    <p className="login-menu-text">New to FarmyApp? <span>SignUp</span></p>
                    </div>
                    <div className="login-form">
                    <div className="login-form-logo">
                        <img src="../Img/farmylogo.png" alt="" />
                    </div>
                    <h1 className="login-form-heading">Welcome to FarmyApp</h1>
                    <div className="login-form-input">
                        <p>Farm Name</p>
                        <input type="text" value={FarmName} onChange={ (e) => {
                            setFarmName(e.target.value)
                        } } />
                    </div>
                    <div className="login-form-input">
                        <p>Farm Address</p>
                        <input type="text" value={FarmAddress} onChange={ (e) => {
                            setFarmAddress(e.target.value)
                        } } />
                    </div>
                    <div className="login-form-input">
                        <p>City</p>
                        <input type="text" value={City} onChange={ (e) => {
                            setCity(e.target.value)
                        } } />
                    </div>
                    <div className="login-form-input">
                        <p>Username</p>
                        <input type="text" value={UserName} onChange={ (e) => {
                            setUserName(e.target.value)
                        } } />
                    </div>
                    <div className="login-form-input">
                        <p>Email</p>
                        <input type="email" value={Email} onChange={ (e) => {
                            setEmail(e.target.value)
                        } } />
                    </div>
                    <div className="login-form-input">
                        <p>Phone Number</p>
                        <input type="text" value={PhoneNumber} onChange={ (e) => {
                            setPhoneNumber(e.target.value)
                        } } />
                    </div>
                    <div className="login-form-input">
                        <p>Password</p>
                        <input type="password" value={Password} onChange={ (e) => {
                            setPassword(e.target.value)
                        } } />
                    </div>
                    <div className="login-form-input">
                        <p>Confirm Password</p>
                        <input type="password" value={ConfirmPassword} onChange={ (e) => {
                            setConfirmPassword(e.target.value)
                        } } />
                    </div>
                    <button className="login-form-btn" onClick={ () => SignUpHandler() } >Sign Up</button>
                    <div className="or">
                        <div></div>
                        <p>or</p>
                        <div></div>
                    </div>
                    <div className="login-form-btn-g">
                        <img src="../Img/google.png" />
                        <p>Sign in with Google</p>
                    </div>
                    <p className="login-form-text">
                        Alredy have an account? <Link to={"/login"}>Login here</Link> 
                    </p>
                    </div>
                </div>
            </section>
        </>

    );

}

export default SignUpPage