import { CDN_LOGO } from "../../Utils/constants";
import{useState} from "react";
import React from "react";
const Header = () => {
  const[loginBtn,setLoginBtn]=useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_LOGO} />
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
          <button className="login"
          onClick={()=>{
            loginBtn==="Login"
           ? setLoginBtn("Logout")
           :setLoginBtn("Login")
          }}>
           {loginBtn}
          </button>

        </ul>
      </div>
    </div>
  )
}
export default Header;
