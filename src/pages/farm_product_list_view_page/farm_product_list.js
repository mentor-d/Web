import Head from "../../components/header/Head"
import "../../css/main.css"
import "./farm_product_list.css"
import Ratings from "../../Img/Full Four Stars.png";
import ProductImg from "../../Img/pepper.png";
import Logo from "../../Img/farmylogo.png"
import MobileBottomNav2 from "../../components/mobile_bottom_nav2";
import MobileSearchType from "../../components/mobile_search_type";
import Footer from "../../components/Footer/footer";
const FarmProductList = () =>{
    return<>
    <Head/>
    <div className="farm-product-list-body">
                 <div class="farm-product-list-search-bar">
            <div className="farm-product-list-search-bar-filter">
              <p>City</p>
              <i className="bx bxs-down-arrow"></i>
            </div>
            <div className="farm-product-list-search-bar-filter2">
              <p>Category</p>
              <i className="bx bxs-down-arrow"></i>
            </div>
            <div className="farm-product-list-search-bar-input">
              <input className="farm-product-list-search-bar-input-field" placeholder="...Searching for what " type="text" />
              <div className="farm-product-list-search-bar-input-btn" >
                <h3>Search</h3>
              </div>
            </div>
             </div>
             <div className="farm-product-list-container">
             <div class="farm-product-list-container-box">
              <div class="farm-product-list-container-box-img">
                <img src={ProductImg} />
              </div>
              <h5>obansanjo Farm</h5>
              <h4>Crates of Egg</h4>
              <div class="ratings">
                <img src={Ratings} />
                
              </div>
              <div class="farm-product-list-container-box-price">
                <h3><span>N</span>3500</h3>
                <p>Per Bag</p>
              </div>
              <div class="farm-product-list-container-box-btn">
                <i class="bx bx-basket"></i>
                <p>Add to Basket</p>
              </div>
            </div>
             </div>
    </div>



{/*---- MOBILE_VIEW--- */}


    <div className="mobile-view">
        <div className="farm-product-list-mobile-body">
            <div className="Logo">
            <img className="" src={Logo}/>
            </div>
           <MobileSearchType/>
            <div className="mobile-search-bar">
                <div className="mobile-search-bar-filter">
                    <p>Select Category</p>
                    <i className="bx bx-chevron-down"></i>
                </div>
                <input PlaceHolder="...search product" className="mobile-search-bar-input-field"/>
                <i class="bx bx-search-alt-2"></i>
            </div>
            <div className="farm-product-list-mobile-container">
            <div class="farm-product-list-mobile-container-box">
              <div class="farm-product-list-mobile-container-box-img">
                <img src={ProductImg} />
              </div>
              <h5>obansanjo Farm</h5>
              <h4>Crates of Egg</h4>
              <div class="rating2">
                <img src={Ratings} />
              </div>
              <div class="farm-product-list-mobile-container-box-price">
                <h3><span>N</span>3500</h3>
                <p>Per Bag</p>
              </div>
              <div class="farm-product-list-mobile-container-box-btn">
                <i class="bx bx-basket"></i>
                <p>Add to Basket</p>
              </div>
            </div>
            <div class="farm-product-list-mobile-container-box">
              <div class="farm-product-list-mobile-container-box-img">
                <img src={ProductImg} />
              </div>
              <h5>obansanjo Farm</h5>
              <h4>Crates of Egg</h4>
              <div class="rating2">
                <img src={Ratings} />
              </div>
              <div class="farm-product-list-mobile-container-box-price">
                <h3><span>N</span>3500</h3>
                <p>Per Bag</p>
              </div>
              <div class="farm-product-list-mobile-container-box-btn">
                <i class="bx bx-basket"></i>
                <p>Add to Basket</p>
              </div>
            </div>
            <div class="farm-product-list-mobile-container-box">
              <div class="farm-product-list-mobile-container-box-img">
                <img src={ProductImg} />
              </div>
              <h5>obansanjo Farm</h5>
              <h4>Crates of Egg</h4>
              <div class="rating2">
                <img src={Ratings} />
              </div>
              <div class="farm-product-list-mobile-container-box-price">
                <h3><span>N</span>3500</h3>
                <p>Per Bag</p>
              </div>
              <div class="farm-product-list-mobile-container-box-btn">
                <i class="bx bx-basket"></i>
                <p>Add to Basket</p>
              </div>
            </div>
            <div class="farm-product-list-mobile-container-box">
              <div class="farm-product-list-mobile-container-box-img">
                <img src={ProductImg} />
              </div>
              <h5>obansanjo Farm</h5>
              <h4>Crates of Egg</h4>
              <div class="rating2">
                <img src={Ratings} />
              </div>
              <div class="farm-product-list-mobile-container-box-price">
                <h3><span>N</span>3500</h3>
                <p>Per Bag</p>
              </div>
              <div class="farm-product-list-mobile-container-box-btn">
                <i class="bx bx-basket"></i>
                <p>Add to Basket</p>
              </div>
            </div>
            <div class="farm-product-list-mobile-container-box">
              <div class="farm-product-list-mobile-container-box-img">
                <img src={ProductImg} />
              </div>
              <h5>obansanjo Farm</h5>
              <h4>Crates of Egg</h4>
              <div class="rating2">
                <img src={Ratings} />
              </div>
              <div class="farm-product-list-mobile-container-box-price">
                <h3><span>N</span>3500</h3>
                <p>Per Bag</p>
              </div>
              <div class="farm-product-list-mobile-container-box-btn">
                <i class="bx bx-basket"></i>
                <p>Add to Basket</p>
              </div>
            </div>
            </div>
            <MobileBottomNav2/>
        </div>
    </div>
     <Footer/>
    </>
}
export default FarmProductList;