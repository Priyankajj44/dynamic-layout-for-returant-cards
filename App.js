





import React from "react";
import reactDom from "react-dom";

import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://c8.alamy.com/comp/MRXFEN/fast-food-cafe-emblem-template-crossed-fork-and-kitchen-spatula-with-sausage-design-element-for-logo-labelsign-vector-illustration-MRXFEN.jpg" />
      </div>
      <div className="nav-heading">
        <h4>Fire Beast</h4>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
          <li>cart</li>

        </ul>
      </div>
    </div>
  )
}


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


const resObj=[
  {
    "type":"resturent",
  
    "data":{
      "resId":0,
      "resturentName":"Sweet Red",
      "dish":"Burger",
      "about":"Order up to more than 100's of different variety of food's and get upto 50% cash Back",
      "rating":4.8,
      "deliveryTime":30,
      "cost":20000,
      "img":"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
    }
  },
  {
    "type":"resturent",
  
    "data":{
      "resId":1,
      "resturentName":"Ahuja's",
      "dish":"Burger",
      "about":"Order up to more than 100's of different variety of food's and get upto 50% cash Back",
      "rating":3.8,
      "deliveryTime":30,
      "cost":40000,
      "img":"https://png.pngtree.com/template/20200704/ourmid/pngtree-restaurant-logo-design-vector-template-image_388753.jpg"
    }
  }
  ,{
    "type":"resturent",
  
    "data":{
      "resId":2,
      "resturentName":"Zomato",
      "dish":"Burger",
      "about":"Order up to more than 100's of different variety of food's and get upto 50% cash Back",
      "rating":4.9,
      "deliveryTime":30,
      "cost":50000,
      "img":"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
    }
  },
  {
    "type":"resturent",
  
    "data":{
      "resId":3,
      "resturentName":"KFC",
      "dish":"Fried Chicken",
      "about":"Order up to more than 100's of different variety of food's and get upto 50% cash Back",
      "rating":4.0,
      "deliveryTime":30,
      "cost":40000,
      "img":"https://images.ctfassets.net/wtodlh47qxpt/2MisPscDV1k33qLnGwQ2il/14bdab6e4b9e25e1b91a8578df5097f2/CAT86?fm=webp&fit=fill"
    }
  },
  {
    "type":"resturent",
  
    "data":{
      "resId":4,
      "resturentName":"Shiva Food Station",
      "dish":"Burger",
      "about":"Order up to more than 100's of different variety of food's and get upto 50% cash Back",
      "rating":3.8,
      "deliveryTime":30,
      "cost":19200,
      "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRJIu0-ICGAJtHkJFKT2_0eHVizJUW0yV6Q&s"
    }
  },
  {
    "type":"resturent",
  
    "data":{
      "resId":5,
      "resturentName":"Ahemdabadi Cusines",
      "dish":"Indian Thali",
      "about":"Best Ahemdabadi Cusines Around You,Order It right Now And Have Lots Of Discount ",
      "rating":4.7,
      "deliveryTime":30,
      "cost":80000,
      "img":"https://b.zmtcdn.com/data/pictures/chains/5/18808035/cd867dbcd742b6cf022939a4a455ba05.jpg"
    }
  },
  {
    "type":"resturent",
  
    "data":{
      "resId":6,
      "resturentName":"Zomato",
      "dish":"Veg THALI",
      "about":"Zomato ,Quick  Delivery And Order Best Food Around",
      "rating":4.4,
      "deliveryTime":30,
      "cost":50000,
      "img":"https://b.zmtcdn.com/data/pictures/chains/6/3301486/828f166cf5dc2ac40565447c99d415d0.jpg"
    }
  },
  {
    "type":"resturent",
  
    "data":{
      "resId":7,
      "resturentName":"KFC",
      "dish":"KFC House Full",
      "about":"KFC,Exprience New Things , YAhOOOo",
      "rating":4.1,
      "deliveryTime":30,
      "cost":70000,
      "img":"https://thumbs.dreamstime.com/z/logo-kfc-fast-food-restaurant-kentucky-fried-chicken-kfc-lop-buri-thailand-logo-kfc-fast-food-restaurant-kentucky-fried-chicken-193969439.jpg"
    }
  },
  {
    "type":"resturent",
  
    "data":{
      "resId":8,
      "resturentName":"Taste Of South",
      "dish":"Masala  Dosa",
      "about":"Order All Kind Of South Indian Food And get Lot's Of Discount On Each Order",
      "rating":4.3,
      "deliveryTime":30,
      "cost":25000,
      "img":"https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2019/12/Onion-Dosa.jpg"
    }
  },
  {
    "type":"resturent",
  
    "data":{
      "resId":9,
      "resturentName":"Hot Point",
      "dish":"Biryani",
      "about":"Order up to more than 100's of different variety of food's and get upto 50% cash Back",
      "rating":4.7,
      "deliveryTime":30,
      "cost":60000,
      "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTucyrmUZL5DPFubdkUxVHoZ_m0uGeStG-bvA&s"
    }
  },
  {
    "type":"resturent",
  
    "data":{
      "resId":10,
      "resturentName":"Pizza Hut",
      "dish":"Pizza",
      "about":"Order up to more than 100's of different variety of food's and get upto 50% cash Back",
      "rating":4.5,
      "deliveryTime":30,
      "cost":45000,
      "img":"https://b.zmtcdn.com/data/pictures/chains/2/20450862/9979d1d417e4516c475045031bb9b4b1_o2_featured_v2.jpg"
    }
  },
  {
    "type":"resturent",
  
    "data":{
      "resId":11,
      "resturentName":"Zomato",
      "dish":"Biryani",
      "about":"Order up to more than 100's of different variety of food's and get upto 50% cash Back",
      "rating":4.9,
      "deliveryTime":30,
      "cost":60000,
      "img":"https://c.ndtvimg.com/2023-12/m17k8gt_biryani_625x300_26_December_23.jpg?im=FaceCrop,algorithm=dnn,width=545,height=307"
    }
  },
  {
    "type":"resturent",
  
    "data":{
      "resId":12,
      "resturentName":"Fast Food",
      "dish":"Noodle",
      "about":"Order up to more than 100's of different variety of food's and get upto 50% cash Back",
      "rating":3.4,
      "deliveryTime":30,
      "cost":20000,
      "img":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/the-food-delivery-app-zomato-has-launched-a-new-feature-to-reduce-food-wastage-due-to-cancelled-orde-114324153-16x9_0.jpg?VersionId=e_OOr0PNj5wFk40u9_SbdR.5oL1KgUbf&size=690:388"
    }
  },
  {
    "type":"resturent",
  
    "data":{
      "resId":13,
      "resturentName":"Swiggy",
      "dish":"Veg. THALI",
      "about":"Order up to more than 100's of different variety of food's and get upto 50% cash Back",
      "rating":4.9,
      "deliveryTime":30,
      "cost":35000,
      "img":"https://b.zmtcdn.com/data/pictures/chains/2/19286532/9a05d37adcba108e13f5ad85f374e17a.jpg"
    }
  }
 

]

const Bbody = () => {
 return(
  <div className="main-body">
  <div className="search">
    <input className="search-field" type="text" placeholder="Search Resturen Food And Many More"></input>
    <button> Search</button> 
  </div>
 <div className="res-container">
{
  resObj?.map((resturent)=>(
    <Body resData={resturent}/>
  ))
}
 
 </div>
</div>
 )
}
const Footer=()=>{
  return(
    <div className="footer-container">
      <div className="f-container">
      <div className="items">
        <ul>
          <li>About us</li>
          <li>Help And Support</li>
          <li>contact uS</li>
          <li>Report</li>
          <li>Help Center</li>
        </ul>
      </div>
    <div>
    <h1 className="fire">Fire Beast</h1>
    <h2>Taste The Best Out Of World </h2>
    </div>
      <div className="social-media">
        <ul>
          <li>priyankajj44@gmail.com</li>
          <li>+91 7876024041</li>
          <li>Git Hub-priyankajj44</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul></div>
      </div>
    </div>
  )
}

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Bbody />
     <Footer/>

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />)