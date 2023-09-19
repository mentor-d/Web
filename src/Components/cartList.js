import "../css/cartList.css"
const List = () =>{
    return<>
     <div className="cart-body-list-container-item">
              <div className="cart-body-list-container-item-img"></div>
              <div className="cart-body-list-container-item-text">
                <h3>Cow meat</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequuntur et dicta tenetur ipsum? Quibusdam, odio.
                </p>
              </div>
              <div className="cart-body-list-container-item-quantity">
                <i className="bx bx-chevron-left"></i>
                <p>2</p>
                <i className="bx bx-chevron-right"></i>
              </div>
              <div className="cart-body-list-container-item-price">
                <h3>N3500</h3>
                <p>2 x 1350</p>
              </div>
              <div className="cart-body-list-container-item-action">
                <i className="bx bxs-trash-alt"></i>
                <h3>Remove item</h3>
              </div>
            </div>
    </>;
}
export default List;