import { CDN_URL } from "../../Utils/constants";

const Body = (props) => {
  const {resData} = props
  
  
  const{
    cloudinaryImageId,
    name,
    areaName,
    cuisines,
    avgRating,
    costForTwo,
  } = resData?.info;
  
    return (
      <div className="body">
  
        <div className="card">
          <div className="card-pic">
            <img className="card-logo" src={CDN_URL+cloudinaryImageId} />
          </div>
          <div>
  
            <div className="card-ratting">
              <h3 className="card-h4">{name}</h3>
              <h4 className="card-shopName">{areaName}</h4>
              <p className="card-disc" >{cuisines + ",  "}</p >
              <h4 className="card-shop">{avgRating}* Rating</h4>
              <p className="card-price" >{costForTwo}</p >
             
  
            </div>
          </div>
          <div className="order-cart">
            <button>Order</button>
            <button>Cart</button>
          </div>
  
        </div>
  
      </div>
    )
  }
  export default Body;
  