import Head from "../../Components/header/Head";
import Profile from "../../Components/profile";
import "../../css/main.css";
import "./order_detail.css";
// import productImage from "../../Img/pexels-rajesh-tp-1633578 1.png"
const Order = () =>{
    return<>
    <Head/>
    <div className="order-detail-body">
        <Profile/>
        <div className="order-detail-container">
            <div className="order-detail-container-reference">
               <div className="order-detail-container-reference-header">
               <h3>Order ASD12345</h3>
               <div>In Transit</div>
               </div>
               <div className="order-detail-container-reference-items">
                <div className="order-detail-container-reference-items-box">
                    <div className="order-detail-container-reference-items-box-description">
                        <div className="order-detail-container-reference-items-box-description-img">
                            {/* <img src={productImage} alt="img"/> */}
                        </div>
                        <div className="order-detail-container-reference-items-box-description-name">
                            <h4>Cow Meat</h4>
                            <p>2 packs</p>
                        </div>
                        <div className="order-detail-container-reference-items-box-description-price">
                         <p>2 x 1,750</p>
                        </div>
                        <div className="order-detail-container-reference-items-box-description-total">
                         <p>3,500</p>
                        </div>
                    </div>
                    <div className="order-detail-container-reference-items-box-description">
                        <div className="order-detail-container-reference-items-box-description-img">
                            {/* <img src={productImage} alt="img"/> */}
                        </div>
                        <div className="order-detail-container-reference-items-box-description-name">
                            <h4>Cow Meat</h4>
                            <p>2 packs</p>
                        </div>
                        <div className="order-detail-container-reference-items-box-description-price">
                         <p>2 x 1,750</p>
                        </div>
                        <div className="order-detail-container-reference-items-box-description-total">
                         <p>3,500</p>
                        </div>
                    </div>
                    <div className="order-detail-container-reference-items-box-description">
                        <div className="order-detail-container-reference-items-box-description-img">
                            {/* <img src={productImage} alt="img"/> */}
                        </div>
                        <div className="order-detail-container-reference-items-box-description-name">
                            <h4>Cow Meat</h4>
                            <p>2 packs</p>
                        </div>
                        <div className="order-detail-container-reference-items-box-description-price">
                         <p>2 x 1,750</p>
                        </div>
                        <div className="order-detail-container-reference-items-box-description-total">
                         <p>3,500</p>
                        </div>
                    </div>
                    
                </div>
                <div className=""></div>
               </div>
            </div>
            <div className="order-detail-container-history"></div>
        </div>
    </div>
    </>
}
export default Order;