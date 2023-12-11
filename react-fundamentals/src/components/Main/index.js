import React from "react";
import {
    Routes,
    Route,
  } from "react-router-dom";
import Series from "../../containers/Series";


const Main = props => (
    <Routes>
        <Route path="/" element={<Series/>} />
    </Routes>
)


export default Main;
