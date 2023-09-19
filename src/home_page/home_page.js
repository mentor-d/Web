import Card from "../components/Card"
import "./home_page.css"
import Img from "../img/portfolio6.jpg"
import Photo from "../img/mypic.jpg"
import Table from "../components/table"
const Home = () =>{
    return<>
    <div className="body">
        <div className="info-section">
           <div className="info-section-head">
           <div className="info-section-head-img">
                <img src={Img} alt="img"/>
            </div>
            <div className="info-section-head-details">
                <h1>Pink + White</h1>
                <div className="info-section-head-details-bid">
                    <div>
                        <p className="info-section-head-details-bid-time">current Bid</p>
                        <h5 className="info-section-head-details-bid-rate">0.978 ETH</h5>
                    </div>
                    <button className="info-section-head-details-bid-btn">Buy Now</button>
                </div>
                <div className="info-section-head-details-btn">
                    <button>Details</button>
                    <button>Bids</button>
                </div>
                <div className="info-section-head-details-date">
                    <span></span>
                    <p>Date</p>
                    <h5>Oct, 2021, 12:53 PM</h5>
                </div>
                <div className="info-section-head-details-genotype">
                    <span className="genotype"></span>
                    <p>Genotype</p>
                    <h5>Genotype</h5>
                </div>
                <div className="info-section-head-details-status">
                    <span></span>
                    <p>Status</p>
                    <h5>On Sale</h5>
                </div>
                <div className="info-section-head-details-creator">
                    <div className="info-section-head-details-creator-profile">
                        <div className="info-section-head-details-creator-profile-img">
                            <img src={Photo} alt="img"/>
                        </div>
                        <p>Creator</p>
                        <h5>Mark Grace</h5>

                    </div>
                    <div className="info-section-head-details-creator-profile">
                        <div className="info-section-head-details-creator-profile-img">
                            
                        </div>
                        <p>Instant Price</p>
                        <h5>2.3ETH</h5>

                    </div>
                </div>
            </div>
            
           </div>
           <h4>Trading History</h4>
           <Table/>
        </div>
        <div className="card-section">
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
    </>
}
export default Home;