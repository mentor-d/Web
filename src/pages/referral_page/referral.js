import "../../css/main.css"
import "./referral.css"
import Head from "../../components/header/Head"
import Profile from "../../components/profile"
import MobileHeader from "../../components/mobile_header"
import MobileBottomNav from "../../components/mobile_bottom_nav"
const Referral = () =>{
    return <>
    <Head/>
    <div className="referral-body">
<Profile/>
<div className="referral-container">
    <div className="referral-container-box">
        <div className="referral-container-box-header">
            <div>
            <i class='bx bx-left-arrow-alt'></i>
                <p>Back</p>
            </div>
            <h3>Referral</h3>
            <p>Terms</p>
        </div>
        <div className="referral-container-box-items">
            <div className="referral-container-box-items-info">
            <i class='bx bx-share-alt'></i>
            <p><span>share your referral code</span><br/>
         Your friends gets access to all stores Farms and logistics companies on our platform.
            </p>

            </div>
            <div className="referral-container-box-items-info">
            <i class='bx bx-share-alt'></i>
            <p><span>Earn points reward</span><br/>
                You get 30% of the profit we make from every transactions your friends have on FarmyApp for a duration of time
            </p>

            </div>
            <div className="referral-container-box-items-info">
            <i class='bx bx-share-alt'></i>
            <p><span>Get points in your account</span><br/>
        You can withdraw the cash rewards to your bank account once the person is done with his or her transaction or transact with on FarmyApp
            </p>

            </div>
           <div className="line"></div>
           <div className="referral-container-box-items-link">
            <p>http://farmyapp.com/refer/abm...</p>
            <button>Copy</button>
           </div>
           <div className="or">
            <div></div>
            <p>Or share via</p>
            <div></div>
          </div>
          <div className="referral-container-box-items-icons">
            <div>
                <i class='bx bxl-linkedin'></i>
            </div>
            <div>
            <i class='bx bxl-twitter'></i>
            </div>
            <div>
            <i class='bx bxl-twitter'></i>
            </div>
            <div>
            <i class='bx bxl-facebook'></i>
            </div>
            <div>
            <i class='bx bx-dots-horizontal-rounded'  ></i>
            </div>
          </div>
          <div className="referral-container-box-items-referees">
            <h3>Referees</h3>
            <div className="referral-container-box-items-referees-name">
                <p>Abass Fakolujo</p>
                <p>10 days ago</p>
            </div>
          </div>
        </div>
    </div>
</div>

    </div>
    <div className="mobile-view">
        <MobileHeader/>
        <div className="referral-mobile-body">
            <div className="referral-mobile-head">
            <i class='bx bx-left-arrow-alt'></i>
            <h4>Back</h4>
            <h3> Referral</h3>
            <h4>Terms</h4>
            </div>
            <div className="referral-mobile-income">
                <h3>Referral Income</h3>
                <div className="referral-mobile-income-date">
                    <h3>Last Week</h3>
                    <i className="bx bx-chevron-down"></i>
                </div>
            </div>
            <div className="referral-mobile-options">
                <div className="referral-mobile-options-share">
                <i class='bx bx-share-alt'></i>
                <p><span>share your referral code</span><br/>
         Your friends gets access to all stores Farms and logistics companies on our platform.
            </p>
                </div>
                <div className="referral-mobile-options-share">
                <i class='bx bx-share-alt'></i>
            <p><span>Earn points reward</span><br/>
                You get 30% of the profit we make from every transactions your friends have on FarmyApp for a duration of time
            </p>
                </div>
                <div className="referral-mobile-options-share">
                <i class='bx bx-share-alt'></i>
            <p><span>Get points in your account</span><br/>
        You can withdraw the cash rewards to your bank account once the person is done with his or her transaction or transact with on FarmyApp
            </p>

                </div>
                
                
            </div>
            <div className="referral-mobile-link">
            <p>http://farmyapp.com/refer/abm...</p>
            <button>Copy</button>
           </div>
           <div className="or">
            <div></div>
            <p>Or share via</p>
            <div></div>
          </div>
          <div className="referral-mobile-icons">
            <div>
                <i class='bx bxl-linkedin'></i>
            </div>
            <div>
            <i class='bx bxl-twitter'></i>
            </div>
            <div>
            <i class='bx bxl-twitter'></i>
            </div>
            <div>
            <i class='bx bxl-facebook'></i>
            </div>
            <div>
            <i class='bx bx-dots-horizontal-rounded'  ></i>
            </div>
          </div>
          <div className="referral-mobile-referees">
            <h3>Referees</h3>
            <div className="referral-mobile-referees-name">
                <p>Abass Fakolujo</p>
                <p>10 days ago</p>
            </div>
          </div>
        </div>
        <MobileBottomNav/>
    </div>
    </>
}
export default Referral;