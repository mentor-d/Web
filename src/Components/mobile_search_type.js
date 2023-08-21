import "../css/main.css"
import "../css/mobile_search_type.css"

const MobileSearchType = () =>{
    return<>
    
    <div className="mobile-search-type">
                <div className="mobile-store-search">
                    <i class="bx bxs-store"></i>
                    <p>Store Search</p>
                </div>
                <div className="mobile-logistics-search"><i class="bx bx-car"></i><p>Logistics Company Search</p></div>
                <div className="mobile-farm-product-search"> <i class="bx bx-walk"></i><p>Farm Product Search</p></div>
            </div>
    
    </>
}
export default MobileSearchType;