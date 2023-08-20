import "./LandingPage.css";
import "../../css/main.css"
import Logo from "../../Img/farmylogo.png";
import Iphone from "../../Img/iphone.png";
import Pepper from "../../Img/pepper.png";
import Playstore from "../../Img/playstore.png";
import Money from "../../Img/money.png";
import Head from "../../components/header/Head";
import { Link } from "react-router-dom";


const LandingPage = () => {

    return(
        <div>
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

            <div className="choose">
                <div className="choose-left">
                    <div className="choose-left-img"></div>
                </div>
                <div className="choose-right">
                    <div className="-right-top"></div>
                    <div className="-right-bottom"></div>
                </div>
            </div>

            <div className="register-box">
                <div className="register-left">
                    <img className="money-img" src={Money} alt="img" />
                </div>
                <div className="register-right">
                    <div className="register-right-mainText">Register your Store with us</div>
                    <div className="register-right-subText">Partner with us and enjoy the Joy of fast sales. We offer 24/7 support to help you increase your daily sales and double your income when you register your store with us.</div>
                    <a className="creat-acct" href="">Create account</a>
                </div>
            </div>
        </div>
        
    );
};

export default LandingPage;