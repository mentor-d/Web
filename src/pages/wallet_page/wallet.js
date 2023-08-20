import Head from "../../components/header/Head";
import MobileBottomNav from "../../components/mobile_bottom_nav";
import MobileHeader from "../../components/mobile_header";
import Profile from "../../components/profile";
import "../../css/main.css";
import "./wallet.css"
import Photo from "../../Img/mypic.jpg"

const Wallet = () =>{
    return < >
    <Head/>
<div className="wallet-body">
    
    <Profile/>
    <div className="wallet-body-container">
    <div className="wallet-body-container-box">
            <h1 className="wallet-body-container-box-heading">Wallet</h1>
            <div className="wallet-body-container-box-balance">
              <h3>N233,500.00</h3>
              <h4>Total Balance</h4>
            </div>
            <div className="wallet-body-container-box-ul">
              <div className="wallet-body-container-box-ul-li">
                <p>Withdrawable</p>
                <h4>N150,000</h4>
              </div>
              <div className="wallet-body-container-box-ul-li">
                <p>Transanctional</p>
                <h4>N180,000</h4>
              </div>
              <div className="wallet-body-container-box-ul-li">
                <p>Unavailable</p>
                <h4>N150,000</h4>
              </div>
            </div>
            <div className="wallet-body-container-box-options">
              <div className="wallet-body-container-box-options-content">
                <a href="#"><i className="bx bx-line-chart"></i></a>
                <p>Fund Wallet</p>
              </div>
              <div className="wallet-body-container-box-options-content">
                <a href="#"><i className='bx bx-transfer'></i></a>
                <p>Transfer</p>
              </div>
              <div className="wallet-body-container-box-options-content">
                <a href="#"><i className='bx bx-list-ul'></i></a>
                <p>Orders</p>
              </div>
            </div>
            <div className="wallet-body-container-box-options2">
                <div className="wallet-body-container-box-options2-content">
                  <a href="#"><i className='bx bxs-message-rounded-dots'></i></a>
                  <p>Message</p>
                </div>
                <div className="wallet-body-container-box-options2-content">
                  <a href="#"><i className='bx bx-transfer'></i></a>
                  <p>Refer & Earn </p>
                </div>
                <div className="wallet-body-container-box-options2-content">
                    <a href="#"><i className='bx bxl-windows'></i></a>
                  <p>More</p>
                </div>
            </div>
            <h3 className="wallet-body-container-box-text">Hot Topics</h3>
        <div className="wallet-body-container-box-text2">
            <h1>Refer and Win Promo</h1>
        </div>
            
        </div>
      </div>
     </div> 


     <div className="mobile-view">
      <MobileHeader/>
      <div className="wallet-mobile-body">
      <div className="wallet-mobile-head">
      <i class='bx bx-left-arrow-alt'></i>
      <h4> Wallet</h4>

      </div>
      <div className="wallet-mobile-head2">
        <div className="wallet-mobile-head2-balance">
          <h3>N233,500.00</h3>
          <h5>Total Balance</h5>
        </div>
        <div className="wallet-mobile-head2-img">
          <img src={Photo} alt="img"/>
        </div>
      </div>
      <div className="wallet-mobile-head3">
        <div className="wallet-mobile-head3-withdrawable-balance">
          <h5>Withdrawable</h5>
          <h3>150,000</h3>
        </div>
        <div className="wallet-mobile-head3-withdrawable-balance">
          <h5>Withdrawable</h5>
          <h3>180,000</h3>
        </div>
        <div className="wallet-mobile-head3-withdrawable-balance">
          <h5>Withdrawable</h5>
          <h3>53,000</h3>
        </div>
      </div>
      <div className="wallet-mobile-container-options">
      <div className="wallet-mobile-option1">
        <div className="wallet-mobile-option1-content">
          <div className="wallet-mobile-option1-content-icon-fund">
          <i className="bx bx-line-chart"></i>
          </div>
          <h4>Fund Wallet</h4>
          </div>   
          <div className="wallet-mobile-option1-content">
          <div className="wallet-mobile-option1-content-icon-message">
          <i className='bx bxs-message-rounded-dots'></i>
          </div>
          <h4>Message</h4>
          </div> 
          <div className="wallet-mobile-option1-content">
          <div className="wallet-mobile-option1-content-icon-order">
          <i className='bx bx-list-ul'></i>
          </div>
          <h4>Orders</h4>
          </div>    
      </div>
      <div className="wallet-mobile-option1">
        <div className="wallet-mobile-option1-content">
          <div className="wallet-mobile-option1-content-icon-transfer">
          <i className='bx bx-transfer'></i>
          </div>
          <h4>Transfer</h4>
          </div>   
          <div className="wallet-mobile-option1-content">
          <div className="wallet-mobile-option1-content-icon-refer">
          <i className="bx bx-line-chart"></i>
          </div>
          <h4>Refer & earn</h4>
          </div> 
          <div className="wallet-mobile-option1-content">
          <div className="wallet-mobile-option1-content-icon-more">
          <i className='bx bxl-windows'></i>
          </div>
          <h4>More</h4>
          </div>    
      </div>
      </div>
      <h2 className="wallet-mobile-text">Hot Topics</h2>
      <div className="wallet-mobile-refer">
        <h1>Refer and <br/>
        Win Promo
         </h1>
      </div>
      </div>
      <MobileBottomNav/>
      </div>   
    </>
}
export default Wallet;