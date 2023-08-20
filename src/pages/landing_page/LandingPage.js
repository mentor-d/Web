import "./LandingPage.css";
import "../../css/main.css"
import Logo from "../../Img/farmylogo.png";
import Iphone from "../../Img/iphone.png";
import Pepper from "../../Img/pepper.png";
import Playstore from "../../Img/playstore.png";
// <<<<<<< HEAD
import lorry from "../../Img/lorry.png"
import farmland from "../../Img/farmland.png"
import Head from "../../components/header/Head";
import Footer from "../../components/Footer/footer"
// =======
import Money from "../../Img/money.png";
// import Head from "../../components/headxer/Head";
// >>>>>>> f4e527b030ad7089a1abbba8e9abdf7eecd178ca
import { Link } from "react-router-dom";


const LandingPage = () => {

    return(
        <>

            <div className="landpage">

                <Head/>

                <div className="landpage-body">
                    <div className="landpage-body-text">Buy From <p> <span>Favourite</span> Store.</p> </div>
                    <div className="landpage-body-downloadLinks">
                        <Link className="download-links" to={''} >
                            <img className="download-links-icon1" src={Playstore} alt="icon" />
                            <div className="download-links-text" >Get on Andriod</div>
                        </Link>

                        <Link className="download-links" to={''}>
                            <img className="download-links-icon" src={Iphone} alt="icon" />
                            <div className="download-links-text" > Get on iPhone</div>
                        </Link>
                    </div>
                </div>

                <img className="landpage-left-img" src={Pepper} alt="pepper" />
                <img className="landpage-left-img2" src={Pepper} alt="pepper" />
            </div>

            <div className="landpage-options">
                <div className="landpage-optionsLeft">
                    <div className="landpage-optionsLeft-img">
                        <div className="landpage-options-textContainer">
                            <div className="landpage-options-headText">Schedule Order</div>
                            <div className="landpage-options-subText">We know how busy your day can be <p>Fit perfectly into your busy routine.</p></div>
                        </div>
                    </div>
                </div>

                <div className="landpage-optionsRight">

                    <div className="landpage-optionsRight-top-img">
                        <div className="landpage-options-textContainer">
                            <div className="landpage-options-headText">Order From Farms</div>
                            <div className="landpage-options-subText">Order bulk agricultural products directly from the farm before they are harvested with FarmyApp.</div>
                        </div>
                    </div>

                    <div className="landpage-optionsRight-bottom-img">
                        <div className="landpage-options-textContainer">
                            <div className="landpage-options-headText">Choose Logistics</div>
                            <div className="landpage-options-subText">Enjoy nationwide delivery to send and receive items nationwide with FarmyApp. </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="register-container">
                <div className="register-left">
                    <div className="money-img"></div>
                    {/* <img className="money-img" src={Money} alt="img" /> */}
                </div>
                <div className="register-right">
                    <div className="register-right-mainText">Register your Store with us</div>
                    <div className="register-right-subText">Partner with us and enjoy the Joy of fast sales. We offer 24/7 support to help you increase your daily sales and double your income when you register your store with us.</div>
                    <button className="creat-acct">Create Account</button>
                </div>
            </div>

            <div className="joinUs">
                <div className="joinUs-top">
                    <div className="joinUs-topLeft">
                        <div className="joinUs-headText">Register as a Logistics Company <p>with us</p> </div>
                        <div className="joinUs-subText">Join us today and make multiple money income.</div>
                        <button className="joinUs-btn">Join us now!</button>
                    </div>
                    <div className="joinUs-topRight">
                        <img className="joinUs-img" src={lorry} alt="img" />
                    </div>
                </div>

                <div className="joinUs-bottom">
                    <div className="joinUs-bottomLeft">
                        <img className="joinUs-img" src={farmland} alt="img" />
                    </div>
                    <div className="joinUs-bottomRight">
                        <div className="joinUs-headText">Become our favourite customer </div>
                        <div className="joinUs-subText">Become our favourite customer to make more by becoming a referrer on FarmyApp</div>
                        <button className="joinUs-btn">Join us now!</button>
                    </div>
                </div>
            </div>

            <div className="landpage-get">
                <div className="landpage-get-text">Together, let's keep<p>spreading Happiness.</p></div>
                <div className="landpage-body-downloadLinks">
                        <Link className="download-links" to={''} >
                            <img className="download-links-icon1" src={Playstore} alt="icon" />
                            <div className="download-links-text" >Get on Andriod</div>
                        </Link>

                        <Link className="download-links" to={''}>
                            <img className="download-links-icon" src={Iphone} alt="icon" />
                            <div className="download-links-text" > Get on iPhone</div>
                        </Link>
                    </div>
            </div>

            <Footer />
        </>
        
    );
};

export default LandingPage;