import React from "react";
import loaderSrc from "../../assets/loader.gif";
import "./index.css";

const Loader = (props) => (
  <div>
    <img className="loader-typing-icon" src={loaderSrc} alt="Loader icon"></img>
  </div>
);

export default Loader;
