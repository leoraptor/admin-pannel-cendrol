import React from "react";
import Sidebar_header from "../../re_use/Sidebar_header";
import Sidebar from "../../re_use/side_bar/Sidebar";
import "../people.css";
const Floorplan = () => {
  return (
    <div className="d-flex ">
      <Sidebar />
      <div className="box">
        <div className="inner_box">
          Floor plan
          <Sidebar_header />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Floorplan;
