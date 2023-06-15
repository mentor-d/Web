import "../css/Head.css"
import logo from "../Img/farmylogo.png";
import myPic from "../Img/mypic.jpg"
import store from "../Img/store.png"
import market from "../Img/market.png"
import logistics from "../Img/logistics.png"
import cart from "../Img/cart.png"
import notification from "../Img/notification.png"



const Head = () => {
    return (
        <div className="header">
            <a className="header-left">
                <img className="logo" scr={logo } alt="logo" />
            </a>

            <div className="header-right">
                <a className="header-links" href="">
                    <div className="links">
     n                    <img className="link-icon" scr={store} alt="store" />
                    </div>
                    <div className="links-text">Search Store</div>
                </a>

                <a className="header-links" href="">
                    <div className="links">
                        <img className="link-icon" scr={market} alt="market" />
                    </div>
                    <div className="links-text">Farmer's Market</div>
                </a>

                <a className="header-links" href="">
                    <div className="links">
                        <img className="link-icon" scr={logistics} alt="logistics" />
                    </div>
                    <div className="links-text">Book Logistics</div>
                </a>

                <a className="header-links" href="">
                    <div className="links">
                        <img className="link-icon" scr={cart} alt="cart" />
                    </div>
                    <div className="links-text">My Cart</div>
                </a>

                <a className="header-links" href="">
                    <div className="links">
                        <img className="link-icon" scr={notification} alt="notification" />
                    </div>
                    <div className="links-text">Notification</div>
                </a>

                <a className="header-links" href="">
                    <img className="links-img" scr={myPic} alt="pfl"/>
                    <div className="links-text">My Profile</div>
                </a>

            </div>
        </div>
    );
};

export default Head;