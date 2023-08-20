import "../../css/main.css"
import "./faq.css"
import Head from "../../Components/header/Head"
import Profile from "../../Components/profile"
const Faq = () =>{
    return<>
    <Head/>
    <div className="faq-body">
        <Profile/>
       <div className="faq">
       <div className="faq-container">
            <i className="bx bx-left-arrow-alt"></i>
            <div className="faq-container-box">
              <h3>FAQS</h3>
              <h3>Frequently Asked Questions</h3>

              <div className="faq-container-box-item">
                <i className="bx bx-plus"></i>
                <p>What is Farmyapp all about</p>
              </div>
              <div className="faq-container-box-item">
                <i className="bx bx-plus"></i>
                <p>How can i place an order?</p>
              </div>
              <div className="faq-container-box-item">
                <i className="bx bx-plus"></i>
                <p>How do i make payments</p>
              </div>
              <div className="faq-container-box-item">
                <i className="bx bx-plus"></i>
                <p>Can i pay on delivery</p>
              </div>
              <div className="faq-container-box-item">
                <i className="bx bx-plus"></i>
                <p>Can i return an item i bought on Farmyapp</p>
              </div>
              <div className="faq-container-box-item">
                <i className="bx bx-plus"></i>
                <p>How long does order delivery takes</p>
              </div>
              <div className="faq-container-box-item">
                <i className="bx bx-plus"></i>
                <p>Does Farmyapp have an office</p>
              </div>
            </div>
          </div>
       </div>
    </div>
    
    </>
}
export default Faq;