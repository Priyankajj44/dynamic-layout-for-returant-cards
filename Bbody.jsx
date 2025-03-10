import React, { useEffect } from "react"
import { useState } from "react";
import Body from "./Body";
import Shimmer from "./Shimmer";

const Bbody = () => {


  let [list, setList] = useState([]);
  const[searchBar,setSearchgBar]=useState([]);
  const[filter,setFilter]=useState([]);
  


  useEffect(() => {
    fetchData();
   
  
  }, []);
  
  

  //for online Api-you can fetch data using this method or function
  const fetchData=async()=>{
    const data= await fetch( 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7339466&lng=76.6851979&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
     const json=await data.json();
      setFilter(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
      setList(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
  }




  return list.length===0?<Shimmer/>: (
    <div className="main-body">
      <div className="search">
        <input className="search-field" type="text"
        value={searchBar} onChange={(e)=>{
            setSearchgBar(e.target.value)
        }} placeholder="Search Resturen Food And Many More"></input>
      </div>
      <div className="btn">
        <button className="search-button"
        onClick={()=>{
           const searchFilter=list.filter((x)=>x.info.name.toLowerCase().includes(searchBar.toLowerCase())
           )
          
          setFilter(searchFilter) 
           
        }}> Search</button>
        <button onClick={() => {
          const data = list.filter((x) => x.info.avgRating > 4);
          setList(data)

        }}

        >Top Rated Resturents</button>
      </div>

      <div className="res-container">
        {
          filter.map((restaurants, id) => (
            <Body key={id} resData={restaurants} />
          ))
        }

      </div>
    </div>
  )
}
export default Bbody;