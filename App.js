


import Header from "./src/components/Header";

import Bbody from "./src/components/Bbody";
import Footer from "./src/components/Footer";



import React from "react";
import reactDom from "react-dom";

import ReactDOM from "react-dom/client";









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