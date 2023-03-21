import React from "react";
import Sidebar from "../../re_use/side_bar/Sidebar";
import Sidebar_header from "../../re_use/Sidebar_header";
import "../people.css";

const Attendance = () => {
  return (
    <div className="d-flex ">
      <Sidebar />
      <div className="box">
        <div className="inner_box">
          Attendance
          <Sidebar_header />
        </div>
        <div className="tab_container">
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
