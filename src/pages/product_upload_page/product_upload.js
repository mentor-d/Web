import "../../css/main.css";
import "./product_upload.css"
import Head from "../../components/header/Head"
import { Link } from "react-router-dom";
import Profile from "../../components/profile";
import Photo from "../../Img/image 8 (1).png";


const ProductUpload = () => {
    
    return (
        <>
            <Head/>
            <div className="productUpload">
                <Profile />
                <div className="productUpload-display">

                    <div className="productUpload-displayHead">
                        <img className="productUpload-displayHead-img" src={Photo} alt="img" />
                        <div className="productUpload-displayHead-text">Obasanjo Farms <p>@obasanjo</p></div>
                    </div>

                    <div className="productUpload-input">
                        <div className="productUpload-inputText">Product Name</div>
                        <input type="text" />
                    </div>

                    <div className="productUpload-input">
                        <div className="productUpload-inputText">Product Details</div>
                        <textarea className="productUpload-inputDetails" />
                    </div>

                    <div className="productUpload-moreDetails">
                        <div>Delay Time</div>
                        <input type="number" />minutes

                        <div>Measuring Scale</div>
                        <input  type="text" />

                        <div>Price</div>
                        <input type="text" />
                    </div>

                    <div className="productUploadImg">
                        <input placeholder="jhb" type="file" />
                    </div>

                    <div className="productUpload-post">
                        <button className="productUpload-postBtn">POST PRODUCT</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductUpload;