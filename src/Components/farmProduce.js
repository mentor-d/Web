
import "../css/farmProduce.css";
import "../css/main.css"

import ProduceImg from "../Img/pepper.png";
import Ratings from "../Img/Full Four Stars.png";
const Farmproduce = () => {
  return (
    <>
      <div class="farm-list-container-box-item">
        <div class="farm-list-container-box-item-img">
          <img src={ProduceImg} alt="img" />
        </div>
        <h5>obansanjo Farm</h5>
        <h4>Crates of Egg</h4>
        <div class="ratings">
          <img src={Ratings} alt="img" />
          <p>4.5Stars</p>
        </div>
        <div class="farm-list-container-box-item-price">
          <h3>N3500</h3>
          <p>per crate</p>
        </div>
        <div class="farm-list-container-box-item-btn">
          <i class="bx bx-basket"></i>
          <p>Add to Basket</p>
        </div>
      </div>
    </>
  );
};
export default Farmproduce;
