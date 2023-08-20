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
                            <h4>2 packs</h4>
                        </div>
                        <div className="order-detail-container-reference-items-box-description-price">
                         <h4>2 x 1,750</h4>
                        </div>
                        <div className="order-detail-container-reference-items-box-description-total">
                         <h4>3,500</h4>
                        </div>
                    </div>
                    <div className="order-detail-container-reference-items-box-description">
                        <div className="order-detail-container-reference-items-box-description-img">
                            {/* <img src={productImage} alt="img"/> */}
                        </div>
                        <div className="order-detail-container-reference-items-box-description-name">
                            <h4>Cow Meat</h4>
                            <h4>2 packs</h4>
                        </div>
                        <div className="order-detail-container-reference-items-box-description-price">
                         <h4>2 x 1,750</h4>
                        </div>
                        <div className="order-detail-container-reference-items-box-description-total">
                         <h4>3,500</h4>
                        </div>
                    </div>
                    <div className="order-detail-container-reference-items-box-description">
                        <div className="order-detail-container-reference-items-box-description-img">
                            {/* <img src={productImage} alt="img"/> */}
                        </div>
                        <div className="order-detail-container-reference-items-box-description-name">
                            <h4>Cow Meat</h4>
                            <h4>2 packs</h4>
                        </div>
                        <div className="order-detail-container-reference-items-box-description-price">
                         <h4>2 x 1,750</h4>
                        </div>
                        <div className="order-detail-container-reference-items-box-description-total">
                         <h4>3,500</h4>
                        </div>
                    </div>
                    
                </div>
                <div className="order-detail-cocntainer-reference-items-subtotal">
                    <h3>Items Total</h3>
                    <h4>8 items</h4>
                    <h4>13,300</h4>
                </div>
                <div className="order-detail-cocntainer-reference-items-logistics-cost">
                    <h3>Logistics Cost</h3>
                    <h4>2,500</h4>
                </div>
                <div className="order-detail-cocntainer-reference-items-total">
                    <h3>Total</h3>
                    <h4>15,899</h4>
                </div>
               </div>
               <div className="order-detail-container-reference-details">
                <h3>Details</h3>
                <div className="order-detail-container-reference-details-destination">
                    <p>Delivered to</p>
                    <h4>1623 Dugbe,Ibadan,Nigeria</h4>
                </div>
                <div className="order-detail-container-reference-details-payment-method">
                    <p>Payment Method</p>
                    <h4>Debit card</h4>
                </div>
               </div>
               <div className="order-detail-container-reference-btns">
                <div className="order-detail-container-reference-btns-1">
                <i class='bx bx-comment-dots' ></i>
                <p>Need support?<br/>
                Chat with us
                </p>
                <p>chat</p>
                </div>
                <div className="order-detail-container-reference-btns-2">
                    <p>Re-order</p>
                </div>
               </div>
            </div>
            <div className="order-detail-container-history">
                <h3>Order History</h3>
                <div className="order-detail-container-history-box">
                    <div className="order-detail-container-history-box-id">
                            <div className="order-detail-container-history-box-id-status">
                                <h5>Delivered</h5>
                                <h5><i class='bx bx-loader-alt bx-rotate-270' ></i> Re-order</h5>
                            </div>
                         <div className="order-detail-container-history-box-id-content">
                        <h3>#5568045678</h3>
                        <p>Today at 6:00pm</p>
                        <p>4 Items</p>
                        <h4>1623 Dugbe, ibadan, Nigeria</h4>
                        <p>Cow meatX2,pineappleX2</p>
                        </div>
                        <h3 className="order-detail-container-history-box-id-price"><span>N</span>3,999.99</h3>
                    </div>
                    
                </div>
                <div className="order-detail-container-history-shipping">
                 <h4 className="order-detail-container-history-shipping-heading">Shipping Details</h4>
                 <h3>kashimawo Logistics</h3>
                 <p>17th september, 2023</p>
                 <i class='bx bx-qr-scan'></i>   
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Order;