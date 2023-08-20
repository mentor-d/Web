import "../../css/main.css"
import "./order_list_view.css"
import Head from "../../components/header/Head"
import Profile from "../../components/profile"
 const OrderListView = () =>{
    return <>
    <Head/>
    <div className="order-list-view-body">
    <Profile/>
        <div className="order-list-view-container">
            <h2>Order List</h2>
            <div className="order-list-view-container-nav">
                <h3>All Orders</h3>
                <h3> Completed</h3>
                <h3>Continuing</h3>
                <h3>Restitute</h3>
                <h3>Canceled</h3>
            </div>
            <div className="order-list-view-container-search-bar">
                <div className="order-list-view-container-search-bar-input">
                    <input placeholder="Search for order id, store, order status or something..." className="order-list-view-container-search-bar-input-field" />
                </div>
                <div className="order-list-view-container-search-bar-filter">
                    <i className="bx bx-chevron-down"></i>
                    <h3>Filter</h3>
                </div>
                <div className="order-list-view-container-search-bar-export">
                    <h3>Export</h3>
                </div>
            </div>
            <div className="order-list-view-container-table">
            <table>
                <tr className="order-list-view-container-table-head">
                <th className="order-list-view-container-table-head-order-id">Order Id</th>
                <th className="order-list-view-container-table-head-store">Store</th>
                <th className="order-list-view-container-table-head-item-count">Item Count</th>
                <th className="order-list-view-container-table-head-delivery-type">Delivery Type</th>
                <th className="order-list-view-container-table-head-delivery-status">Delivery Status</th>
                <th className="order-list-view-container-table-head-total">Total</th>
                <th className="order-list-view-container-table-head-logistics">Logistics</th>  
                </tr>
                <tr>
                <td className="order-list-view-container-table-body-data-order-id">
                        AKN2345
                    </td>
                    <td className="order-list-view-container-table-body-data-store">Foodco</td>
                    <td className="order-list-view-container-table-body-data-item-count">12</td>
                    <td className="order-list-view-container-table-body-data-delivery-type">Home Delivery</td>
                    <td className="order-list-view-container-table-body-data-delivery-status"><div>In Transit</div></td>
                    <td className="order-list-view-container-table-body-data-total">N12,999</td>
                    <td className="order-list-view-container-table-body-data-logistics">Ajenifuja Logistics</td>
                </tr>
                <tr>
                <td className="order-list-view-container-table-body-data-order-id">
                        AKN2345
                    </td>
                    <td className="order-list-view-container-table-body-data-store">Foodco</td>
                    <td className="order-list-view-container-table-body-data-item-count">12</td>
                    <td className="order-list-view-container-table-body-data-delivery-type">Home Delivery</td>
                    <td className="order-list-view-container-table-body-data-delivery-status"><div>In Transit</div></td>
                    <td className="order-list-view-container-table-body-data-total">N12,999</td>
                    <td className="order-list-view-container-table-body-data-logistics">Ajenifuja Logistics</td>
                </tr>
                <tr>
                <td className="order-list-view-container-table-body-data-order-id">
                        AKN2345
                    </td>
                    <td className="order-list-view-container-table-body-data-store">Foodco</td>
                    <td className="order-list-view-container-table-body-data-item-count">12</td>
                    <td className="order-list-view-container-table-body-data-delivery-type">Home Delivery</td>
                    <td className="order-list-view-container-table-body-data-delivery-status"><div>In Transit</div></td>
                    <td className="order-list-view-container-table-body-data-total">N12,999</td>
                    <td className="order-list-view-container-table-body-data-logistics">Ajenifuja Logistics</td>
                </tr>
                <tr>
                <td className="order-list-view-container-table-body-data-order-id">
                        AKN2345
                    </td>
                    <td className="order-list-view-container-table-body-data-store">Foodco</td>
                    <td className="order-list-view-container-table-body-data-item-count">12</td>
                    <td className="order-list-view-container-table-body-data-delivery-type">Home Delivery</td>
                    <td className="order-list-view-container-table-body-data-delivery-status"><div>In Transit</div></td>
                    <td className="order-list-view-container-table-body-data-total">N12,999</td>
                    <td className="order-list-view-container-table-body-data-logistics">Ajenifuja Logistics</td>
                </tr>
                <tr>
                <td className="order-list-view-container-table-body-data-order-id">
                        AKN2345
                    </td>
                    <td className="order-list-view-container-table-body-data-store">Foodco</td>
                    <td className="order-list-view-container-table-body-data-item-count">12</td>
                    <td className="order-list-view-container-table-body-data-delivery-type">Home Delivery</td>
                    <td className="order-list-view-container-table-body-data-delivery-status"><div>In Transit</div></td>
                    <td className="order-list-view-container-table-body-data-total">N12,999</td>
                    <td className="order-list-view-container-table-body-data-logistics">Ajenifuja Logistics</td>
                </tr>
                <tr>
                <td className="order-list-view-container-table-body-data-order-id">
                        AKN2345
                    </td>
                    <td className="order-list-view-container-table-body-data-store">Foodco</td>
                    <td className="order-list-view-container-table-body-data-item-count">12</td>
                    <td className="order-list-view-container-table-body-data-delivery-type">Home Delivery</td>
                    <td className="order-list-view-container-table-body-data-delivery-status"><div>In Transit</div></td>
                    <td className="order-list-view-container-table-body-data-total">N12,999</td>
                    <td className="order-list-view-container-table-body-data-logistics">Ajenifuja Logistics</td>
                </tr>
                <tr>
                <td className="order-list-view-container-table-body-data-order-id">
                        AKN2345
                    </td>
                    <td className="order-list-view-container-table-body-data-store">Foodco</td>
                    <td className="order-list-view-container-table-body-data-item-count">12</td>
                    <td className="order-list-view-container-table-body-data-delivery-type">Home Delivery</td>
                    <td className="order-list-view-container-table-body-data-delivery-status"><div>In Transit</div></td>
                    <td className="order-list-view-container-table-body-data-total">N12,999</td>
                    <td className="order-list-view-container-table-body-data-logistics">Ajenifuja Logistics</td>
                </tr>
                <tr>
                <td className="order-list-view-container-table-body-data-order-id">
                        AKN2345
                    </td>
                    <td className="order-list-view-container-table-body-data-store">Foodco</td>
                    <td className="order-list-view-container-table-body-data-item-count">12</td>
                    <td className="order-list-view-container-table-body-data-delivery-type">Home Delivery</td>
                    <td className="order-list-view-container-table-body-data-delivery-status"><div>In Transit</div></td>
                    <td className="order-list-view-container-table-body-data-total">N12,999</td>
                    <td className="order-list-view-container-table-body-data-logistics">Ajenifuja Logistics</td>
                </tr>
                <tr>
                <td className="order-list-view-container-table-body-data-order-id">
                        AKN2345
                    </td>
                    <td className="order-list-view-container-table-body-data-store">Foodco</td>
                    <td className="order-list-view-container-table-body-data-item-count">12</td>
                    <td className="order-list-view-container-table-body-data-delivery-type">Home Delivery</td>
                    <td className="order-list-view-container-table-body-data-delivery-status"><div>In Transit</div></td>
                    <td className="order-list-view-container-table-body-data-total">N12,999</td>
                    <td className="order-list-view-container-table-body-data-logistics">Ajenifuja Logistics</td>
                </tr>
                <tr>
                <td className="order-list-view-container-table-body-data-order-id">
                        AKN2345
                    </td>
                    <td className="order-list-view-container-table-body-data-store">Foodco</td>
                    <td className="order-list-view-container-table-body-data-item-count">12</td>
                    <td className="order-list-view-container-table-body-data-delivery-type">Home Delivery</td>
                    <td className="order-list-view-container-table-body-data-delivery-status"><div>In Transit</div></td>
                    <td className="order-list-view-container-table-body-data-total">N12,999</td>
                    <td className="order-list-view-container-table-body-data-logistics">Ajenifuja Logistics</td>
                </tr>
                <tr>
                <td className="order-list-view-container-table-body-data-order-id">
                        AKN2345
                    </td>
                    <td className="order-list-view-container-table-body-data-store">Foodco</td>
                    <td className="order-list-view-container-table-body-data-item-count">12</td>
                    <td className="order-list-view-container-table-body-data-delivery-type">Home Delivery</td>
                    <td className="order-list-view-container-table-body-data-delivery-status"><div>In Transit</div></td>
                    <td className="order-list-view-container-table-body-data-total">N12,999</td>
                    <td className="order-list-view-container-table-body-data-logistics">Ajenifuja Logistics</td>
                </tr>
                 <tr>
                <td className="order-list-view-container-table-body-data-order-id">
                        AKN2345
                    </td>
                    <td className="order-list-view-container-table-body-data-store">Foodco</td>
                    <td className="order-list-view-container-table-body-data-item-count">12</td>
                    <td className="order-list-view-container-table-body-data-delivery-type">Home Delivery</td>
                    <td className="order-list-view-container-table-body-data-delivery-status"><div>In Transit</div></td>
                    <td className="order-list-view-container-table-body-data-total">N12,999</td>
                    <td className="order-list-view-container-table-body-data-logistics">Ajenifuja Logistics</td>
                </tr>
            </table>
            </div>
         
        </div>
    </div>
    
    </>
 }
 export default OrderListView;