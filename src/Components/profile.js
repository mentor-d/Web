import "../css/profile.css";
// import Cover from "../Img/Rectangle 375.png";
import Photo from "../Img/mypic.jpg";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="profile-photo">
          <div className="profile-photo-img">
            <img src={Photo} alt="icon" />
          </div>
          <h3>Afolabi Damilare</h3>
          <p>@damilare</p>
        </div>
        <div className="profile-items">
            <p>Account</p>
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="profile-items">
            <p>Orders</p>
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="profile-items">
            <p>Wallet</p>
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="profile-items">
            <p>Email Settings</p>
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="profile-items">
            <p>Cart</p>
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="profile-items">
            <p>Security</p>
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="profile-items">
            <p>What's New</p>
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="profile-items">
            <p>Faq</p>
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="profile-items">
            <p>Terms of Servive</p>
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="profile-items">
            <p>Privacy Policy</p>
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="profile-items last-item">
            <i className="bx bx-log-out"></i>
            <p>Logout</p>
          </div>
      </div>
    </>
  );
};
export default Profile;
