import "./Head.css";
import myPic from "../../Img/mypic.jpg";
import store from "../../Img/store.png";
import market from "../../Img/market.png";
import logistics from "../../Img/logistics.png";
import cart from "../../Img/cart.png";
import notification from "../../Img/notification.png";
import { Link } from "react-router-dom";



const Head = () => {



    const Logo = require("../../Img/farmylogo.png")
    
    return (
        <div className="header">
            <a className="header-left">
                <img className="logo" src={Logo} alt="logo" />
            </a>

            <div className="header-right">
                <a className="header-links" href="">
                    <div className="links">
                         <img className="link-icon" src={store} alt="store" />
                    </div>
                    <div className="links-text">Search Store</div>
                </a>

                <a className="header-links" href="">
                    <div className="links">
                        <img className="link-icon" src={market} alt="market" />
                    </div>
                    <div className="links-text">Farmer's Market</div>
                </a>

                <a className="header-links" href="">
                    <div className="links">
                        <img className="link-icon" src={logistics} alt="logistics" />
                    </div>
                    <div className="links-text">Book Logistics</div>
                </a>

                <a className="header-links" href="">
                    <div className="links">
                        <img className="link-icon" src={cart} alt="cart" />
                    </div>
                    <div className="links-text">My Cart</div>
                </a>

                <a className="header-links" href="">
                    <div className="links">
                        <img className="link-icon" src={notification} alt="notification" />
                    </div>
                    <div className="links-text">Notification</div>
                </a>

                {/* <a className="header-links" href="/login">
                    <img className="links-img" src={myPic} alt="pfl"/>
                    <div className="links-text">My Profile</div>
                </a> */}

                <Link to={'/signup'} >
                    <img className="links-img" src={myPic} alt="pfl"/>
                    <div className="links-text">My Profile</div>
                </Link>

            </div>
        </div>
    );
};

export default Head;