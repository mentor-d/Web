import "./account.css";
import "../../css/main.css"
import Head from "../../Components/header/Head"
import Profile from "../../Components/profile";
import Photo from "../../Img/mypic.jpg"
import Btn from "../../Components/update_btn"
const Account = () =>{
    return<>
   <Head/> 
    <div className="account-body">
        <Profile/>
        <div className="account-body-form">
          <div className="account-body-form-edit-img">
            <img src={Photo} alt="img" />
            <a href="#"><i className="bx bx-pencil"></i></a>
          </div>
          <div className="account-body-form-input">
            <h3>Username</h3>
            <input placeHolder="Damilare" type="text" />
          </div>
          <div className="account-body-form-input">
            <h3>Name</h3>
            <input placeHolder="Afolabi Damilare" type="text" />
          </div>
          <div className="account-body-form-input">
            <h3>Phone Number</h3>
            <input placeHolder="08056789123" type="text" />
          </div>
          <Btn/>
        </div>
    </div>
    </>
}
export default Account