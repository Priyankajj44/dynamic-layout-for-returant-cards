const Body = (props) => {
  const {resData} = props
  
  
  const{
    img,
    dish,
    resturentName,
    about,
    rating,
    cost,
  } = resData?.data;
  
    return (
      <div className="body">
  
        <div className="card">
          <div className="card-pic">
            <img className="card-logo" src={img} />
          </div>
          <div>
  
            <div className="card-ratting">
              <h3 className="card-h4">{dish}</h3>
              <h4 className="card-shopName">{resturentName}</h4>
              <p className="card-disc" >{about}</p >
              <h4 className="card-shop">{rating}* Rating</h4>
              <p className="card-price" >Cost    {cost/100}   INR</p >
             
  
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
  