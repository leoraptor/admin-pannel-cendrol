import React, { useEffect, useState } from "react";
import Sidebar from "../../re_use/side_bar/Sidebar";
import Sidebar_header from "../../re_use/Sidebar_header";
import slogo from "../../assets/svgs/svg_4.svg";
import "../people.css";
import axios from "axios";
const Attendance = () => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
    "Content-type": "application/json;charset=utf-8",
    authtoken: "Y3VzdG9tdG9rZW50b3Byb3RlY3RhcGlyb3V0ZXM=",
    usertype: "admin",
  };

  const EmployeeCheckin = () => {
    axios
      .get(
        `${base_url}/employee-checkin`,

        {
          headers,
        }
      )
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    EmployeeCheckin();
  });
  return (
    <div className="d-flex ">
      <Sidebar />
      <div className="box">
        <div className="inner_box">
          Attendance
          <Sidebar_header />
        </div>
        <div className="tab_container">
          {/* <svg
            className="slogo"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.82492"
              cy="7.82495"
              r="6.74142"
              stroke="#646464"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5137 12.8638L15.1567 15.5"
              stroke="#646464"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg> */}
          <input
            className="emp_input"
            placeholder="Search by name, Designation, employee ID"
          />

          <table className="table tablebordered">
            <thead>
              <tr>
                <th>Sl.No.</th>
                <th>Employee Name</th>
                <th>Employee ID</th>
                <th>Team</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Jacob</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
