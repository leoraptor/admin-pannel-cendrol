import React, { useState } from "react";
import Sidebar_header from "../../re_use/Sidebar_header";
import Sidebar from "../../re_use/side_bar/Sidebar";
import "../people.css";
import { Nav, Tab } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Teams from "./teams/Teams";
import Designation from "./designation/Designation";
import Employees from "./employees/Employees";

const Manageusers = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="d-flex ">
      <Sidebar />

      <div className="box">
        <div className="inner_box">
          Manage Users
          <Sidebar_header />
        </div>
        <div className="tab_container" id="tab-section">
          <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
            <ToastContainer />
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="tab1">Employees</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tab2">Designation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tab3">Teams</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="tab1">
                <Employees />
              </Tab.Pane>
              <Tab.Pane className="tab_content" eventKey="tab2">
                <Designation />
              </Tab.Pane>
              <Tab.Pane className="tab_content" eventKey="tab3">
                <Teams />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

export default Manageusers;
