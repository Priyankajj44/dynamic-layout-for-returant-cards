import resObj from "../../Utils/common";
import Body from "./Body";
const Bbody = () => {
  return(
   <div className="main-body">
   <div className="search">
     <input className="search-field" type="text" placeholder="Search Resturen Food And Many More"></input>
     <button> Search</button> 
   </div>
  <div className="res-container">
 {
   resObj?.map((resturent,resId)=>(
     <Body key={resId} resData={resturent}/>
   ))
 }
  
  </div>
 </div>
  )
 }
 export default Bbody;