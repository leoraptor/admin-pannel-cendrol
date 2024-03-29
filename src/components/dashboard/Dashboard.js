import React, { useEffect } from "react";
import Sidebar from "../../re_use/side_bar/Sidebar";
import "../people.css";
import Sidebar_header from "../../re_use/Sidebar_header";

const Dashboard = () => {
  useEffect(() => {
    const myToken = localStorage.getItem("token");

    if (myToken === null) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div className="d-flex ">
      <Sidebar />
      <div className="box">
        <div className="inner_box">
          Dashboard
          <Sidebar_header />
        </div>
        <div className="d-flex content">
          <div className="content_one">
            <div className="f-flex justify-content-evenly ">
              <p>Attendance Overview</p>
            </div>
          </div>
          <div className="content_two">
            <p>Team Attendance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
