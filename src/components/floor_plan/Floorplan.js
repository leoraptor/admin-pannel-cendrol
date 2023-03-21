import React from "react";
import Sidebar_header from "../../re_use/Sidebar_header";
import Sidebar from "../../re_use/side_bar/Sidebar";
import MapLayers from "../MapLayers";
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
        <div className="tab_container">
          <MapLayers />
          {/* <iframe className="floor-plan" src="" title="Floor Plan"></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Floorplan;
