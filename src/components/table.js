import "../css/table.css"

const Table = () =>{
    return<>
    <div className="table-body">
        <table>
        <tr className="info-section-table-head">
                <th className="info-section-head-event">Event</th>
                <th className="info-section-head-price">Price</th>
                <th className="info-section-head-From">From</th>
                <th className="info-section-head-To">To</th>
                <th className="info-section-head-Date">Date</th>
         </tr>
         <tr>
            <td className="info-section-body-event">Sale</td>
            <td className="info-section-body-price">0.1</td>
            <td className="info-section-body-From">omara</td>
            <td className="info-section-body-To">annek</td>
            <td className="info-section-body-Date">12 days ago</td>
         </tr>
         <tr>
            <td className="info-section-body-event">Transfer</td>
            <td className="info-section-body-price">0.1</td>
            <td className="info-section-body-From">omara</td>
            <td className="info-section-body-To">annek</td>
            <td className="info-section-body-Date">12 days ago</td>
         </tr>
         <tr>
            <td className="info-section-body-event">List</td>
            <td className="info-section-body-price">0.1</td>
            <td className="info-section-body-From">omara</td>
            <td className="info-section-body-To">annek</td>
            <td className="info-section-body-Date">12 days ago</td>
         </tr>
        </table>
    </div>

    </>
}
export default Table