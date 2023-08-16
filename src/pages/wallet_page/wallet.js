import Head from "../../Components/header/Head";
import Profile from "../../Components/profile";
import "../../css/main.css";
import "./wallet.css"

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
                  <a href=""><i className='bx bxs-message-rounded-dots'></i></a>
                  <p>Message</p>
                </div>
                <div className="wallet-body-container-box-options2-content">
                  <a href=""><i className='bx bx-transfer'></i></a>
                  <p>Refer & Earn </p>
                </div>
                <div className="wallet-body-container-box-options2-content">
                    <a><i className='bx bxl-windows'></i></a>
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
    </>
}
export default Wallet;