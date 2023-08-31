import "../../css/main.css"
import "./search_stores.css"
import Head from "../../components/header/Head"
import StoreImg from "../../Img/Rectangle 375.png"
import MobileBottomNav2 from "../../components/mobile_bottom_nav2";
import MobileSearchType from "../../components/mobile_search_type";
import Logo from "../../Img/farmylogo.png"
import Ratings from "../../Img/Full Four Stars.png"

const SearchStore = () =>{
    return<>
    <Head/>
    <div className="search-store-body">
        <div className="search-store-hero">
           <div className="search-store-hero-bar">
            <div className="search-store-hero-bar-filter">
                <h2>Select Category</h2>
                <i className="bx bx-chevron-down"></i>
            </div>
            <input placeHolder="Search for your favourite stores..." className="search-store-hero-bar-input"/>
            </div> 
            <div className="search-store-hero-recent-search">
                <h4 className="search-store-hero-recent-search-title">Recent Searches</h4>
                <div className="search-store-hero-recent-search-list">
                    <p>Ofada sweet rice</p>
                    <p>Ofada sweet rice</p>
                    <p>Ofada sweet rice</p>
                </div>
            </div>
        </div>
        <div className="search-store-section">
            <h3 className="search-store-section-title">Recent Stores</h3>
            <div className="search-store-section-container">
                <div className="search-store-section-container-box">
                    <div className="search-store-section-container-box-img">
                        <img src={StoreImg} alt="img"/>
                    </div>
                    <div className="search-store-section-container-box-status">
                        <p>Open</p>
                    </div>
                    <div className="search-store-section-container-box-description">
                        <h3>Kfc Apata Branch</h3>
                        <p className="search-store-section-container-box-description-text">
                            lorem dolor etet pros con ipsum dote prich asd dolores adola burst padding nation ques loco.
                        </p>
                        <div className="search-store-section-container-box-description-view-icon">
                        <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="search-store-section-container-box">
                    <div className="search-store-section-container-box-img">
                        <img src={StoreImg} alt="img"/>
                    </div>
                    <div className="search-store-section-container-box-status">
                        <p>Open</p>
                    </div>
                    <div className="search-store-section-container-box-description">
                        <h3>Kfc Apata Branch</h3>
                        <p className="search-store-section-container-box-description-text">
                            lorem dolor etet pros con ipsum dote prich asd dolores adola burst padding nation ques loco.
                        </p>
                        <div className="search-store-section-container-box-description-view-icon">
                        <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="search-store-section-container-box">
                    <div className="search-store-section-container-box-img">
                        <img src={StoreImg} alt="img"/>
                    </div>
                    <div className="search-store-section-container-box-status">
                        <p>Open</p>
                    </div>
                    <div className="search-store-section-container-box-description">
                        <h3>Kfc Apata Branch</h3>
                        <p className="search-store-section-container-box-description-text">
                            lorem dolor etet pros con ipsum dote prich asd dolores adola burst padding nation ques loco.
                        </p>
                        <div className="search-store-section-container-box-description-view-icon">
                        <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="search-store-section-container-box">
                    <div className="search-store-section-container-box-img">
                        <img src={StoreImg} alt="img"/>
                    </div>
                    <div className="search-store-section-container-box-status">
                        <p>Open</p>
                    </div>
                    <div className="search-store-section-container-box-description">
                        <h3>Kfc Apata Branch</h3>
                        <p className="search-store-section-container-box-description-text">
                            lorem dolor etet pros con ipsum dote prich asd dolores adola burst padding nation ques loco.
                        </p>
                        <div className="search-store-section-container-box-description-view-icon">
                        <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="search-store-section-container-box">
                    <div className="search-store-section-container-box-img">
                        <img src={StoreImg} alt="img"/>
                    </div>
                    <div className="search-store-section-container-box-status">
                        <p>Open</p>
                    </div>
                    <div className="search-store-section-container-box-description">
                        <h3>Kfc Apata Branch</h3>
                        <p className="search-store-section-container-box-description-text">
                            lorem dolor etet pros con ipsum dote prich asd dolores adola burst padding nation ques loco.
                        </p>
                        <div className="search-store-section-container-box-description-view-icon">
                        <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="search-store-section-container-box">
                    <div className="search-store-section-container-box-img">
                        <img src={StoreImg} alt="img"/>
                    </div>
                    <div className="search-store-section-container-box-status">
                        <p>Open</p>
                    </div>
                    <div className="search-store-section-container-box-description">
                        <h3>Kfc Apata Branch</h3>
                        <p className="search-store-section-container-box-description-text">
                            lorem dolor etet pros con ipsum dote prich asd dolores adola burst padding nation ques loco.
                        </p>
                        <div className="search-store-section-container-box-description-view-icon">
                        <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="search-store-section-container-box">
                    <div className="search-store-section-container-box-img">
                        <img src={StoreImg} alt="img"/>
                    </div>
                    <div className="search-store-section-container-box-status">
                        <p>Open</p>
                    </div>
                    <div className="search-store-section-container-box-description">
                        <h3>Kfc Apata Branch</h3>
                        <p className="search-store-section-container-box-description-text">
                            lorem dolor etet pros con ipsum dote prich asd dolores adola burst padding nation ques loco.
                        </p>
                        <div className="search-store-section-container-box-description-view-icon">
                        <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="search-store-section-container-box">
                    <div className="search-store-section-container-box-img">
                        <img src={StoreImg} alt="img"/>
                    </div>
                    <div className="search-store-section-container-box-status">
                        <p>Open</p>
                    </div>
                    <div className="search-store-section-container-box-description">
                        <h3>Kfc Apata Branch</h3>
                        <p className="search-store-section-container-box-description-text">
                            lorem dolor etet pros con ipsum dote prich asd dolores adola burst padding nation ques loco.
                        </p>
                        <div className="search-store-section-container-box-description-view-icon">
                        <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="search-store-section-container-box">
                    <div className="search-store-section-container-box-img">
                        <img src={StoreImg} alt="img"/>
                    </div>
                    <div className="search-store-section-container-box-status">
                        <p>Open</p>
                    </div>
                    <div className="search-store-section-container-box-description">
                        <h3>Kfc Apata Branch</h3>
                        <p className="search-store-section-container-box-description-text">
                            lorem dolor etet pros con ipsum dote prich asd dolores adola burst padding nation ques loco.
                        </p>
                        <div className="search-store-section-container-box-description-view-icon">
                        <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="search-store-section-container-box">
                    <div className="search-store-section-container-box-img">
                        <img src={StoreImg} alt="img"/>
                    </div>
                    <div className="search-store-section-container-box-status">
                        <p>Open</p>
                    </div>
                    <div className="search-store-section-container-box-description">
                        <h3>Kfc Apata Branch</h3>
                        <p className="search-store-section-container-box-description-text">
                            lorem dolor etet pros con ipsum dote prich asd dolores adola burst padding nation ques loco.
                        </p>
                        <div className="search-store-section-container-box-description-view-icon">
                        <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="search-store-section-container-box">
                    <div className="search-store-section-container-box-img">
                        <img src={StoreImg} alt="img"/>
                    </div>
                    <div className="search-store-section-container-box-status">
                        <p>Open</p>
                    </div>
                    <div className="search-store-section-container-box-description">
                        <h3>Kfc Apata Branch</h3>
                        <p className="search-store-section-container-box-description-text">
                            lorem dolor etet pros con ipsum dote prich asd dolores adola burst padding nation ques loco.
                        </p>
                        <div className="search-store-section-container-box-description-view-icon">
                        <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="search-store-section-container-box">
                    <div className="search-store-section-container-box-img">
                        <img src={StoreImg} alt="img"/>
                    </div>
                    <div className="search-store-section-container-box-status">
                        <p>Open</p>
                    </div>
                    <div className="search-store-section-container-box-description">
                        <h3>Kfc Apata Branch</h3>
                        <p className="search-store-section-container-box-description-text">
                            lorem dolor etet pros con ipsum dote prich asd dolores adola burst padding nation ques loco.
                        </p>
                        <div className="search-store-section-container-box-description-view-icon">
                        <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="search-store-section-container-box">
                    <div className="search-store-section-container-box-img">
                        <img src={StoreImg} alt="img"/>
                    </div>
                    <div className="search-store-section-container-box-status">
                        <p>Open</p>
                    </div>
                    <div className="search-store-section-container-box-description">
                        <h3>Kfc Apata Branch</h3>
                        <p className="search-store-section-container-box-description-text">
                            lorem dolor etet pros con ipsum dote prich asd dolores adola burst padding nation ques loco.
                        </p>
                        <div className="search-store-section-container-box-description-view-icon">
                        <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


      
    {/* -------MOBILE VIEW---- */}
        
    <div className="mobile-view">
           
           <div className="search-store-mobile-body">
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
           <div className="search-store-mobile-container">
               <div className="search-store-mobile-container-box">
                   <div className="search-store-mobile-container-box-img">
                    <img src={StoreImg} alt="img"/>
                   </div>
                   <div className="search-store-mobile-container-box-name">
                       <h3>Foodco Stores</h3>
                       <p className="search-store-mobile-container-box-name-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales sit senectus vel turpis tincidunt nec eget maecenas. Habitant eget viverra orci tellus libero odio pulvinar sed pellentesque.</p>
                   </div>
                   <div className="ratings3"><img  src={Ratings}  alt="img"/> <p>4.8</p></div>
                   <div className="search-store-mobile-container-box-miles">
                        <h6>About <br/>40km Away </h6>
                   </div>
               </div>
           </div>
           </div>
               <MobileBottomNav2/>
       </div>





    </>
};
export default SearchStore;