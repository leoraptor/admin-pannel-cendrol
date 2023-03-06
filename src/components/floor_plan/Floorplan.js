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
        <div>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="pop_con">
              <p>Employee Details</p>x
            </div>
            <div className="pop_content">
              <div className="pop_left">
                <p>Employee Name</p>
                <p>Sample User</p>
                <p>user@cendrol.com</p>
                <p>Mobile Number</p>
                <p>+91 8328951561</p>
                <p>Designation</p>
              </div>
              <div className="pop_right">
                <p>Employee Name</p>
                <p>CEN070</p>

                <p>Password</p>
                <p>XXXXXXXX</p>
                <p>Team</p>
                <p>IT</p>
              </div>
            </div>
            <div className="foo">
              {" "}
              <button className="del_btn ">
                <svg
                  style={{ marginRight: 10 }}
                  className="mr-1"
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5247 2.49523C11.7841 2.49523 12 2.71056 12 2.98456V3.23789C12 3.50522 11.7841 3.72722 11.5247 3.72722H0.475902C0.215907 3.72722 0 3.50522 0 3.23789V2.98456C0 2.71056 0.215907 2.49523 0.475902 2.49523H2.41971C2.81457 2.49523 3.1582 2.21457 3.24703 1.81857L3.34882 1.36391C3.50702 0.744581 4.02766 0.333252 4.62351 0.333252H7.37649C7.96585 0.333252 8.49233 0.744581 8.64469 1.33124L8.75362 1.8179C8.8418 2.21457 9.18543 2.49523 9.58094 2.49523H11.5247ZM10.5372 11.7559C10.7402 9.86462 11.0955 5.37133 11.0955 5.326C11.1084 5.18867 11.0637 5.05867 10.9749 4.95401C10.8796 4.85601 10.759 4.79801 10.626 4.79801H1.37901C1.24545 4.79801 1.11837 4.85601 1.03019 4.95401C0.940717 5.05867 0.896628 5.18867 0.903112 5.326C0.904303 5.33433 0.917053 5.49261 0.938368 5.75722C1.03306 6.93272 1.29678 10.2067 1.46719 11.7559C1.58779 12.8973 2.33665 13.6146 3.42137 13.6406C4.25842 13.6599 5.12075 13.6666 6.00253 13.6666C6.83309 13.6666 7.67662 13.6599 8.53959 13.6406C9.66192 13.6213 10.4101 12.9166 10.5372 11.7559Z"
                    fill="#EC5050"
                  />
                </svg>
                Delete
              </button>
              <button className="edit_btn">
                <svg
                  style={{ marginRight: 10 }}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.25093 11.3519L10.1085 3.77696C10.4269 3.36847 10.5401 2.8962 10.4339 2.41533C10.342 1.97817 10.0731 1.56251 9.66991 1.24719L8.68657 0.466042C7.83057 -0.214774 6.76941 -0.143109 6.16102 0.638038L5.5031 1.49157C5.41821 1.59835 5.43943 1.75601 5.54554 1.84201C5.54554 1.84201 7.20802 3.17497 7.2434 3.20364C7.35659 3.31114 7.44148 3.45447 7.4627 3.62646C7.49807 3.96329 7.26462 4.27861 6.91797 4.32161C6.75526 4.34311 6.59963 4.29295 6.48644 4.19978L4.73906 2.80948C4.65417 2.7457 4.52683 2.75932 4.45609 2.84532L0.303426 8.22018C0.034599 8.55701 -0.057368 8.99416 0.034599 9.41698L0.565178 11.7174C0.593475 11.8393 0.699591 11.9253 0.82693 11.9253L3.16148 11.8966C3.58594 11.8894 3.98211 11.6959 4.25093 11.3519ZM7.51979 10.6355H11.3265C11.6979 10.6355 12 10.9415 12 11.3178C12 11.6947 11.6979 12 11.3265 12H7.51979C7.14839 12 6.84631 11.6947 6.84631 11.3178C6.84631 10.9415 7.14839 10.6355 7.51979 10.6355Z"
                    fill="#0A0A0A"
                  />
                </svg>
                Edit Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Floorplan;
