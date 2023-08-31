import Head from "../../components/header/Head";
import Profile from "../../components/profile";
import "../../css/main.css";
import "./order_detail.css";
import MobileHeader from "../../components/mobile_header"
import MobileBottomNav from "../../components/mobile_bottom_nav"
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

    <div className="mobile-view">
        <MobileHeader/>

        <div className="order-detail-mobile-body">
            <div className="order-detail-mobile-reference">
                <h3 className="order-detail-mobile-reference-id">#5568045678</h3>
                <h3 className="order-detail-mobile-reference-date">
                    27 May, 2020
                </h3>
                <h3 className="order-detail-mobile-reference-label">Delivered to</h3>
                <h3>1623 Dugbe, ibadan, Nigeria</h3>
                <h3 className="order-detail-mobile-reference-label">Payment Method</h3>
                <h3>Debit Card</h3>
                <h3 className="order-detail-mobile-reference-status">Delivered</h3>
          </div>
          <div className="order-detail-mobile-order-box">
            <div className="order-detail-mobile-order-box-items">
                <div className="order-detail-mobile-order-box-items-name">
                    <h3 className="">Cow Meat</h3>
                    <h3 className="order-detail-mobile-order-box-items-name-count   ">4 Packs</h3>
                </div>
                <h3 className="order-detail-mobile-order-box-items-price">
                   <span> N</span>3,999.99
                </h3>
            </div>
            <div className="order-detail-mobile-order-box-items">
                <div className="order-detail-mobile-order-box-items-name">
                    <h3 className="">Cow Meat</h3>
                    <h3 className="order-detail-mobile-order-box-items-name-count   ">4 Packs</h3>
                </div>
                <h3 className="order-detail-mobile-order-box-items-price">
                   <span> N</span>3,999.99
                </h3>
            </div>
            <div className="order-detail-mobile-order-box-items">
                <div className="order-detail-mobile-order-box-items-name">
                    <h3 className="">Cow Meat</h3>
                    <h3 className="order-detail-mobile-order-box-items-name-count   ">4 Packs</h3>
                </div>
                <h3 className="order-detail-mobile-order-box-items-price">
                   <span> N</span>3,999.99
                </h3>
            </div>
            <div className="order-detail-mobile-order-box-items">
                <div className="order-detail-mobile-order-box-items-name">
                    <h3 className="">Cow Meat</h3>
                    <h3 className="order-detail-mobile-order-box-items-name-count   ">4 Packs</h3>
                </div>
                <h3 className="order-detail-mobile-order-box-items-price">
                   <span> N</span>3,999.99
                </h3>
            </div>
          </div>
          <div className="order-detail-mobile-total">
                <div className="order-detail-mobile-item-total">
                    <h3 >Item Total</h3>
                    <h4><span>N</span>11,999.97</h4>
                </div>
                <div className="order-detail-mobile-charges">
                    <h3>Delivery Charges</h3>
                    <h4><span>N</span>1000.00</h4>
                </div>
                <div className="order-detail-mobile-action">
                    <h3>Paid</h3>
                    <h4 ><span>N</span>12,999.97</h4>
                </div>
          </div>
          <div className="order-detail-mobile-support">
                <i class='bx bx-comment-dots' ></i>
                <p>Need support?<br/>   
                Chat with us
                </p>
                <p className="order-detail-mobile-support-link">chat</p>
            </div> 
            <div className="order-detail-mobile-reorder">
               Re-order
            </div> 
          
          
         
        </div>
            <MobileBottomNav/>
    </div>
    </>
}
export default Order;