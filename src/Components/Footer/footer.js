import "./footer.css"
import "../../css/main.css"
import AppStore from "../../Img/appstore.png"
import PlayStore from "../../Img/downloadplaystore.png" 
import store from "../../Img/store.png";
import market from "../../Img/market.png";
import logistics from "../../Img/logistics.png";
import cart from "../../Img/cart.png";
import notification from "../../Img/notification.png";
import { Link } from "react-router-dom"


const Footer = () => {

    return(
        <>
            <div className="footer">

                <div className="footer-quickLinks-container">

                    <Link to={""}><div className="footer-quickLinks">
                        <img className="footer-quickLinks-img" src={store} alt="img" />
                        <div className="footer-quickLinks-text">Search Stores</div>
                    </div></Link>

                    <Link to={""}><div className="footer-quickLinks">
                        <img className="footer-quickLinks-img" src={market} alt="img" />
                        <div className="footer-quickLinks-text">Farmers Market</div>
                    </div></Link>

                    <Link to={""}><div className="footer-quickLinks">
                        <img className="footer-quickLinks-img" src={logistics} alt="img" />
                        <div className="footer-quickLinks-text">Book Logistics</div>
                    </div></Link>

                    <Link to={""}><div className="footer-quickLinks">
                        <img className="footer-quickLinks-img" src={cart} alt="img" />
                        <div className="footer-quickLinks-text">My Cart</div>
                    </div></Link>

                    <Link to={""}><div className="footer-quickLinks">
                        <img className="footer-quickLinks-img" src={notification} alt="img" />
                        <div className="footer-quickLinks-text">Notifications</div>
                    </div></Link>

                </div>

                <div className="footer-farmyDownload">
                    <div className="footer-farmyDownload-text">Download FarmyApp here</div>
                    <Link to={""}><img className="footer-farmyappDownload-img" src={AppStore} alt="img" /></Link> 
                    <Link to={""}><img className="footer-farmyappDownload-img" src={PlayStore} alt="img" /></Link> 
                </div>

                <div className="footer-farmyInfos">
                    <div className="footer-farmyInfos-contact">For more information, contact <p>talktous@farmyapp.com</p> +2348110175635, +2348110175793, +2348110175727</div>

                    <div className="footer-farmyInfos-newTo">
                        <div className="footer-farmyInfos-newTo-Head">NEW TO FarmyApp?
                            <p><span className="">Subscribe to our newsletter to get updates on our latest offers!</span></p> 
                        </div>
                    </div>

                    <div className="footer-farmy-input">
                        <input className="" type="text" placeholder="Enter you email here..." />
                        <button className="">Enter</button>
                    </div>
                </div>


            </div>
        </>
    )
};

export default Footer;