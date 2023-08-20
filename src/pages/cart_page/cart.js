import "../../css/main.css"
import "./cart.css"
import List from "../../components/cartList"
// import "../../Img/mypic.jpg 1.png"
import Head from "../../components/header/Head"
import Profile from "../../components/profile"
const Cart = () =>{
    return <>
<div className="cart">
<Head/>
<div className="cart-body">
<Profile/>
 <div className="cart-body-list">
          <h1 className="cart-body-list-heading">Shopping Cart</h1>
          <div className="cart-body-list-container">
            <div className="cart-body-list-container-header">
              <p>Item details</p>
              <p>Quantity</p>
              <p>Price</p>
              <p>Action</p>
            </div>
            <List/>
            <List/>
            <List/>

          
           
          </div>
          <div className="cart-body-list-subtotal">
            <div className="cart-body-list-subtotal-text">
              <h3>Subtotal:</h3>
              <h3>N9500</h3>
            </div>
            <div className="cart-body-list-subtotal-btn">
              <button>Book logistics</button>
              <button>Pickup at store</button>
            </div>
          </div>
        </div>
        <div className="order">
          <div className="order-container">
            <div className="order-container-heading">
              <h2>order summary</h2>
              <p>5 items</p>
          </div>
          <div className="order-container-option">
            <p>Delivery Option</p>
            <select name="" id="">
              <option>Home Delivery</option>
            </select>
          </div>
          <div className="order-container-address">
            <p>Address</p>
            <input placeHolder="Enter the delivery address here" type="text"/>
          </div>
          <div className="order-container-location">
            <div>
              <p>State</p>
              <select name="" id="">
                <option>Abuja</option>
              </select>
            </div>
            <div>
              <p>City</p>
              <select name="" id="">
                <option>Gwagwalada</option>
              </select>
            </div>
            
          </div>
          <div className="order-container-logistics">
              <p>Select a logistics</p>
              <select name="" id="">
                <option>Gwagwalada</option>
              </select>
          </div>
          <div className="order-container-time">
            <p>Estimated delivery Time:</p>
            <h4>6pm,30/03/2023</h4>
          </div>
          <div className="order-container-subtotal">
            <p>Subtotal:</p>
            <h4>N11,500</h4>
          </div>
          <div className="order-container-shipping">
            <p>Shipping Cost</p>
            <h4>N1500</h4>
          </div>
          <div className="order-container-total">
            <h4>Total</h4>
            <h4>N12500</h4>
          </div>
          <button className="order-container-btn">Check</button>
        </div>
        <button className="order-btn">Order List</button>
      </div>
</div>
</div>
    </>
}
export default Cart;