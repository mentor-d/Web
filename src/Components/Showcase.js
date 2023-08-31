import "../css/Showcase.css";
import Store_img from "../Img/store_img.png"


const Showcase = () => {

    return(
                <div className="showcase-display">
                    <img className="showcase-box-img" src={Store_img} alt="img" />
                    <div className="showcase-box-text">Buy From <p><span>Favourite </span>Stores</p></div>
                    <div className="showcase-box-text-sub">There are a wide range of stores, malls and resturants in your location. You can choose as you like.</div>
                </div>
    );
};

export default Showcase;