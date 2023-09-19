import "../css/mobile_bottom_nav.css"
import "../css/main.css"

const MobileBottomNav = () =>{
    return<>
    <div class="mobile-bottom-nav">
            <div class="mobile-bottom-nav-items">
              <i class="bx bx-store"></i>
              <h4>Stores</h4>
            </div>
            <div class="mobile-bottom-nav-items">
              <i class="bx bx-wallet"></i>
              <h4>Wallet</h4>
            </div>
            <div class="mobile-bottom-nav-items">
              <i class="bx bx-message-rounded-dots"></i>
              <h4>Chat</h4>
            </div>
            <div class="mobile-bottom-nav-items">
              <i class="bx bxs-door-open"></i>
              <h4>Profile</h4>
            </div>
          </div>
    </>
}
export default MobileBottomNav