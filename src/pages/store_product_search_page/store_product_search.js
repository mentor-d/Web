import Head from "../../components/header/Head"
import "../../css/main.css"
import "./store_product_search.css"
import Photo from "../../Img/mypic.jpg"
import Ratings from "../../Img/Full Four Stars.png"
import SearchIcon from "../../Img/search.png"
import ProductImg from "../../Img/pexels-rajesh-tp-1633578 1.png"
import MobileHeader from "../../components/mobile_header"
import MobileBottomNav from "../../components/mobile_bottom_nav"
const StoreProductSearch = () =>{
    return<>
    <Head/>
    <div className="store-product-search-body">
    <div className="store-hero">
      <div className="store-hero-search">
        <input
          placeholder="search Mcdonalds for any products of your choice"
          type="text"
        />
        <div className="store-hero-search-icon">
          <img src={SearchIcon} alt="icon"/>
        </div>
      </div>
    </div>
    <div className="store-id">
      <div className="store-id-profile">
        <img src={Photo} alt="img" />
      </div>
      <div className="store-id-name">
        <h1>Foodco</h1>
        <p>@Foodco</p>
        <div className="store-id-ratings">
          <img src={Ratings} alt="img" />
        </div>
      </div>
    </div>
    <div className="store-categories">
    <div><h4>Pepper</h4></div>
    <div><h4>Meat</h4></div>
    <div><h4>Fruits</h4></div>
    <div><h4>Grains</h4></div>
      <div><h4>Sea Food</h4></div>
      <div><h4>Tubers</h4></div>
      <div><h4>Canned</h4></div> 
      
    </div>
    <div className="store-container">
      <div className="store-container-box">
        <div className="store-container-box-img">
          <img src={ProductImg} alt="img"/>
        </div>
        <div className="padding">
          <h3>Foodco</h3>
          <h2>Big Burger Size</h2>
          <div className="ratings">
            <img src={Ratings} alt="img"/>
          </div>
          <p className="store-container-box-price"><span>N</span>3,999.99</p>
          
        </div>
        <button className="store-container-box-btn"> <i class='bx bx-plus'></i></button>
      </div>
    
    </div>
    </div>
      {/* -----MOBILE VIEW---- */}
        <div className="mobile-view">
          <MobileHeader/>
          <div className="store-product-search-mobile-body">
            <div className="store-product-search-mobile-hero">
              
            </div>
            <div className="store-product-search-mobile-id">
              <div className="store-product-search-mobile-id-img">
                <img src={Photo} alt="img" />
              </div>
              <div className="store-product-search-mobile-id-name">
                <h3>FoodCo</h3>
                <p>@foodco</p>
              </div>
              <img className="ratings" src={Ratings}/>
            </div>
            <div className="store-categories">
    <div><h4>Pepper</h4></div>
    <div><h4>Meat</h4></div>
    <div><h4>Fruits</h4></div>
    <div><h4>Grains</h4></div>
      <div><h4>Sea Food</h4></div>
      <div><h4>Tubers</h4></div>
      <div><h4>Canned</h4></div> 
    </div>
            <div className="store-product-search-mobile-container">
                <div className="store-product-search-mobile-container-box">
                    <div className="store-product-search-mobile-container-box-img">
                      <img src={ProductImg} alt="img" />
                    </div>
                  <h3 className="store-product-search-mobile-container-box-name">Cow Meat</h3>
                  <h4 className="store-product-search-mobile-container-box-description">Big Bitter Burger Size</h4>
                  <img className="store-product-search-mobile-container-box-ratings" src={Ratings} alt="img"/>
                  <h3 className="store-product-search-mobile-container-box-price">N3,999.99</h3>
                  <div className="store-product-search-mobile-container-box-icon">
                  <i class='bx bx-plus'></i>
                  </div>
                </div>
                <div className="store-product-search-mobile-container-box">
                <div className="store-product-search-mobile-container-box-img">
                      <img src={ProductImg} alt="img" />
                    </div>
                  <h3 className="store-product-search-mobile-container-box-name">Cow Meat</h3>
                  <h4 className="store-product-search-mobile-container-box-description">Big Bitter Burger Size</h4>
                  <img className="store-product-search-mobile-container-box-ratings" src={Ratings} alt="img"/>
                  <h3 className="store-product-search-mobile-container-box-price">N3,999.99</h3>
                  <div className="store-product-search-mobile-container-box-icon">
                  <i class='bx bx-plus'></i>
                  </div>
                </div>
                <div className="store-product-search-mobile-container-box">
                <div className="store-product-search-mobile-container-box-img">
                      <img src={ProductImg} alt="img" />
                    </div>
                  <h3 className="store-product-search-mobile-container-box-name">Cow Meat</h3>
                  <h4 className="store-product-search-mobile-container-box-description">Big Bitter Burger Size</h4>
                  <img className="store-product-search-mobile-container-box-ratings" src={Ratings} alt="img"/>
                  <h3 className="store-product-search-mobile-container-box-price">N3,999.99</h3>
                  <div className="store-product-search-mobile-container-box-icon">
                  <i class='bx bx-plus'></i>
                  </div>
                </div>
                <div className="store-product-search-mobile-container-box">
                <div className="store-product-search-mobile-container-box-img">
                      <img src={ProductImg} alt="img" />
                    </div>
                  <h3 className="store-product-search-mobile-container-box-name">Cow Meat</h3>
                  <h4 className="store-product-search-mobile-container-box-description">Big Bitter Burger Size</h4>
                  <img className="store-product-search-mobile-container-box-ratings" src={Ratings} alt="img"/>
                  <h3 className="store-product-search-mobile-container-box-price">N3,999.99</h3>
                  <div className="store-product-search-mobile-container-box-icon">
                  <i class='bx bx-plus'></i>
                  </div>
                </div>
                <div className="store-product-search-mobile-container-box">
                <div className="store-product-search-mobile-container-box-img">
                      <img src={ProductImg} alt="img" />
                    </div>
                  <h3 className="store-product-search-mobile-container-box-name">Cow Meat</h3>
                  <h4 className="store-product-search-mobile-container-box-description">Big Bitter Burger Size</h4>
                  <img className="store-product-search-mobile-container-box-ratings" src={Ratings} alt="img"/>
                  <h3 className="store-product-search-mobile-container-box-price">N3,999.99</h3>
                  <div className="store-product-search-mobile-container-box-icon">
                  <i class='bx bx-plus'></i>
                  </div>
                </div>
                <div className="store-product-search-mobile-container-box">
                <div className="store-product-search-mobile-container-box-img">
                      <img src={ProductImg} alt="img" />
                    </div>
                  <h3 className="store-product-search-mobile-container-box-name">Cow Meat</h3>
                  <h4 className="store-product-search-mobile-container-box-description">Big Bitter Burger Size</h4>
                  <img className="store-product-search-mobile-container-box-ratings" src={Ratings} alt="img"/>
                  <h3 className="store-product-search-mobile-container-box-price">N3,999.99</h3>
                  <div className="store-product-search-mobile-container-box-icon">
                  <i class='bx bx-plus'></i>
                  </div>
                </div>
                
            </div>
          </div>
          <MobileBottomNav/>
        </div>

    </>
}
export default StoreProductSearch;