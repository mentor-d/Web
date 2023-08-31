import "../css/main.css";
import"../css/mobile_header.css";

const MobileHeader = () =>{
    return<>
    
    <div className="mobile-header">
      <i class='bx bx-menu' ></i>
      {/* <img className="mobile-header-logo" src={Logo} alt="logo"/> */}
      <div className="mobile-header-notification">
          <i class="bx bx-bell"></i>
          <h6>Notification</h6>
        </div>
        <div className="mobile-header-notification">
          <i class="bx bxs-cart-alt"></i>
          <h6>cart</h6>
        </div>
      </div>
    </>
}
export default MobileHeader