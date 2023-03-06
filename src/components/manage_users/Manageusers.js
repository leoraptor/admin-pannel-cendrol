import React, { useEffect, useState } from "react";
import Sidebar_header from "../../re_use/Sidebar_header";
import Sidebar from "../../re_use/side_bar/Sidebar";
import "../people.css";
import { Nav, Tab } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Loading from "../../re_use/Loading";

const Manageusers = () => {
  const [name, setName] = useState("");
  const [empId, setEmpId] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [dept, setDept] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState([]);

  //all designation data
  const [designation, setDesignation] = useState([]);
  const [totalDesignation, setTotalDesignation] = useState();
  //all employee data
  const [empDetails, setEmpDetails] = useState([]);
  const [totalEmp, setTotalEmp] = useState();
  // console.log(department);
  //tab section
  const [activeTab, setActiveTab] = useState("tab1");
  // individual emp id from table row state
  const [individualEmp, setIndividualEmp] = useState();
  const fetchAllDepartment = async () => {
    let res = await fetch(
      "https://localserver.cendrol.com/cendrolpeopledev/api/get-all-department",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-type": "application/json;charset=utf-8",
          authtoken: "Y3VzdG9tdG9rZW50b3Byb3RlY3RhcGlyb3V0ZXM=",
          usertype: "admin",
        },
      }
    );
    const data = await res.json();
    setDepartment(data.result);
    // console.log(data);
  };

  //this api is for all designation and to store its data into table
  const fetchAllDesignation = async () => {
    let res = await fetch(
      "https://localserver.cendrol.com/cendrolpeopledev/api/get-all-designation",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-type": "application/json;charset=utf-8",
          authtoken: "Y3VzdG9tdG9rZW50b3Byb3RlY3RhcGlyb3V0ZXM=",
          usertype: "admin",
        },
      }
    );
    const data = await res.json();
    setDesignation(data.result);
    setTotalDesignation(data.result.length);
  };

  //employee tab and by this api we get all employee data and gets into the table
  const getAllEmployee = async () => {
    const res = await fetch(
      "https://localserver.cendrol.com/cendrolpeopledev/api/get-all-employee?page=1&limit=10&search=",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-type": "application/json;charset=utf-8",
          authtoken: "Y3VzdG9tdG9rZW50b3Byb3RlY3RhcGlyb3V0ZXM=",
          usertype: "admin",
        },
      }
    );
    const data = await res.json();
    // console.log(data);
    setEmpDetails(data.result.listOfEmployee);
    setTotalEmp(data.result.totalEmployee);
  };
  const getIndEmp = async (i) => {
    let emp_id = i;
    console.log(emp_id);
    const response = await axios.get(
      `https://localserver.cendrol.com/cendrolpeopledev/api/get-employee?employee_id=${emp_id}`,

      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json;charset=utf-8",
          authtoken: "Y3VzdG9tdG9rZW50b3Byb3RlY3RhcGlyb3V0ZXM=",
          usertype: "admin",
        },
      }
    );
    // let result = JSON.stringify(response);
    setIndividualEmp(response.data.result);
    console.log(individualEmp);
    console.log(individualEmp.name);
    // console.log(individualEmp.data.result.name);
  };
  useEffect(() => {
    fetchAllDepartment();
  }, []);

  useEffect(() => {
    fetchAllDesignation();
  }, []);
  useEffect(() => {
    getAllEmployee();
  }, []);
  const addingEmployee = async () => {
    let employee = {
      name: name,
      emp_id: empId,
      email: email,
      mobile: mobile,
      password: password,
      department: dept,
      designation: role,
    };
    console.log(employee);
    const response = await axios.post(
      "https://localserver.cendrol.com/cendrolpeopledev/api/add-employee",
      {
        name: name,
        emp_id: empId,
        email: email,
        mobile: mobile,
        password: password,
        department: dept,
        designation: role,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json;charset=utf-8",
          authtoken: "Y3VzdG9tdG9rZW50b3Byb3RlY3RhcGlyb3V0ZXM=",
          usertype: "admin",
        },
        // body: JSON.stringify(employee),
      }
    );
    let result = await response.json();
    console.log(result);
  };

  const addEmployee = function (e) {
    e.preventDefault();
    addingEmployee();
    console.log("emp added successfull");
  };

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
                <div className="tab_content">
                  <p className="pt-1">Employees &#40;{totalEmp}&#41;</p>
                  <div className="emp_input">
                    <svg
                      className="emp_slogo"
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
                    </svg>
                    <input
                      className="emp_input"
                      placeholder="Search by name, Designation, employee ID"
                    />

                    <button className="download_btn">
                      Download Report
                      <svg
                        style={{ marginLeft: 10, marginRight: 10 }}
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.00002 8.38317C5.91113 8.38317 5.8278 8.36917 5.75002 8.34117C5.67224 8.31362 5.60002 8.2665 5.53335 8.19984L3.13335 5.79984C3.01113 5.67762 2.95002 5.52206 2.95002 5.33317C2.95002 5.14428 3.01113 4.98873 3.13335 4.8665C3.25558 4.74428 3.4138 4.68028 3.60802 4.6745C3.80269 4.66917 3.96113 4.72761 4.08335 4.84984L5.33335 6.09984V1.33317C5.33335 1.14428 5.39735 0.985837 5.52535 0.857837C5.65291 0.730282 5.81113 0.666504 6.00002 0.666504C6.18891 0.666504 6.34735 0.730282 6.47535 0.857837C6.60291 0.985837 6.66669 1.14428 6.66669 1.33317V6.09984L7.91669 4.84984C8.03891 4.72761 8.19735 4.66917 8.39202 4.6745C8.58624 4.68028 8.74446 4.74428 8.86669 4.8665C8.98891 4.98873 9.05002 5.14428 9.05002 5.33317C9.05002 5.52206 8.98891 5.67762 8.86669 5.79984L6.46669 8.19984C6.40002 8.2665 6.3278 8.31362 6.25002 8.34117C6.17224 8.36917 6.08891 8.38317 6.00002 8.38317ZM2.00002 11.3332C1.63335 11.3332 1.31958 11.2027 1.05869 10.9418C0.797354 10.6805 0.666687 10.3665 0.666687 9.99984V8.6665C0.666687 8.47762 0.730465 8.31917 0.85802 8.19117C0.98602 8.06361 1.14446 7.99984 1.33335 7.99984C1.52224 7.99984 1.68069 8.06361 1.80869 8.19117C1.93624 8.31917 2.00002 8.47762 2.00002 8.6665V9.99984H10V8.6665C10 8.47762 10.064 8.31917 10.192 8.19117C10.3196 8.06361 10.4778 7.99984 10.6667 7.99984C10.8556 7.99984 11.0138 8.06361 11.1414 8.19117C11.2694 8.31917 11.3334 8.47762 11.3334 8.6665V9.99984C11.3334 10.3665 11.2029 10.6805 10.942 10.9418C10.6807 11.2027 10.3667 11.3332 10 11.3332H2.00002Z"
                          fill="#0A0A0A"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className="add_emp_btn "
                      data-bs-toggle="modal"
                      data-bs-target="#addemp_pop_up"
                    >
                      <svg
                        style={{ marginRight: 10, marginLeft: 10 }}
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.15152 10V0H5.84848V10H4.15152ZM0 5.84848V4.15152H10V5.84848H0Z"
                          fill="black"
                        />
                      </svg>
                      Add Employee
                    </button>
                    <div
                      className="modal  "
                      id="addemp_pop_up"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Add Employee
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="model-body">
                            <div className="section">
                              <div>
                                <label>Employee Name</label>
                                <input
                                  type="text"
                                  onChange={(e) => setName(e.target.value)}
                                />
                              </div>
                              <div>
                                <label>Employee ID</label>
                                <input
                                  type="text"
                                  name="emp_id"
                                  onChange={(e) => setEmpId(e.target.value)}
                                />
                              </div>
                            </div>

                            <div className="section">
                              <div>
                                <label>User ID</label>
                                <input
                                  type="text"
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                              <div>
                                <label>Password</label>
                                <input
                                  type="text"
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                              </div>
                            </div>

                            <div className="section">
                              <div>
                                <label>Mobile Number</label>
                                <input
                                  type="text"
                                  onChange={(e) => setMobile(e.target.value)}
                                />
                              </div>
                              <div>
                                <label>Team</label>
                                <select
                                  className="form-control"
                                  id="sel1"
                                  onChange={(e) => setDept(e.target.value)}
                                >
                                  {department?.map((data) => {
                                    return (
                                      <option value={data._id}>
                                        {data.department}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div></div>
                            <div></div>
                          </div>
                          <div className="modal-footer">
                            <p>Designation</p>

                            <div className="form-group">
                              <select
                                className="form-control"
                                id="sel2"
                                onChange={(e) => setRole(e.target.value)}
                              >
                                {designation?.map((data) => {
                                  return (
                                    <option value={data._id}>
                                      {data.designation}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>

                            <button
                              type="button"
                              className="btn btn-warning"
                              data-bs-dismiss="modal"
                              onClick={addEmployee}
                            >
                              Save Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                      {empDetails.map((each_emp, index) => {
                        return (
                          <tr
                            data-bs-toggle="modal"
                            data-bs-target="#hello"
                            onClick={() => getIndEmp(each_emp._id)}
                          >
                            <td>{index + 1}</td>
                            <td>
                              {each_emp.name === "" ? "-" : each_emp.name}
                            </td>
                            <td className="emp_id">
                              {each_emp.emp_id === "" ? "-" : each_emp.emp_id}
                            </td>
                            <td>
                              {each_emp.department === ""
                                ? "-"
                                : each_emp.department}
                            </td>
                            <td>
                              {each_emp.designation === ""
                                ? "-"
                                : each_emp.designation}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div
                    className="modal fade"
                    id="hello"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Employee Details
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {/* <p>{data.name}</p> */}
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane className="tab_content" eventKey="tab2">
                <div className="tab_content">
                  <p className="mt-2 margin-bottom-0">
                    Designation &#40;{totalDesignation}&#41;
                  </p>
                  <div className="emp_input">
                    <svg
                      className="emp_slogo"
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
                    </svg>
                    <input
                      className="emp_input"
                      placeholder="Search by name, Designation, employee ID"
                    />

                    <button className="download_btn">
                      Download Report
                      <svg
                        style={{ marginLeft: 10, marginRight: 10 }}
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.00002 8.38317C5.91113 8.38317 5.8278 8.36917 5.75002 8.34117C5.67224 8.31362 5.60002 8.2665 5.53335 8.19984L3.13335 5.79984C3.01113 5.67762 2.95002 5.52206 2.95002 5.33317C2.95002 5.14428 3.01113 4.98873 3.13335 4.8665C3.25558 4.74428 3.4138 4.68028 3.60802 4.6745C3.80269 4.66917 3.96113 4.72761 4.08335 4.84984L5.33335 6.09984V1.33317C5.33335 1.14428 5.39735 0.985837 5.52535 0.857837C5.65291 0.730282 5.81113 0.666504 6.00002 0.666504C6.18891 0.666504 6.34735 0.730282 6.47535 0.857837C6.60291 0.985837 6.66669 1.14428 6.66669 1.33317V6.09984L7.91669 4.84984C8.03891 4.72761 8.19735 4.66917 8.39202 4.6745C8.58624 4.68028 8.74446 4.74428 8.86669 4.8665C8.98891 4.98873 9.05002 5.14428 9.05002 5.33317C9.05002 5.52206 8.98891 5.67762 8.86669 5.79984L6.46669 8.19984C6.40002 8.2665 6.3278 8.31362 6.25002 8.34117C6.17224 8.36917 6.08891 8.38317 6.00002 8.38317ZM2.00002 11.3332C1.63335 11.3332 1.31958 11.2027 1.05869 10.9418C0.797354 10.6805 0.666687 10.3665 0.666687 9.99984V8.6665C0.666687 8.47762 0.730465 8.31917 0.85802 8.19117C0.98602 8.06361 1.14446 7.99984 1.33335 7.99984C1.52224 7.99984 1.68069 8.06361 1.80869 8.19117C1.93624 8.31917 2.00002 8.47762 2.00002 8.6665V9.99984H10V8.6665C10 8.47762 10.064 8.31917 10.192 8.19117C10.3196 8.06361 10.4778 7.99984 10.6667 7.99984C10.8556 7.99984 11.0138 8.06361 11.1414 8.19117C11.2694 8.31917 11.3334 8.47762 11.3334 8.6665V9.99984C11.3334 10.3665 11.2029 10.6805 10.942 10.9418C10.6807 11.2027 10.3667 11.3332 10 11.3332H2.00002Z"
                          fill="#0A0A0A"
                        />
                      </svg>
                    </button>
                    <button className="add_emp_btn">
                      <svg
                        style={{ marginRight: 10, marginLeft: 10 }}
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.15152 10V0H5.84848V10H4.15152ZM0 5.84848V4.15152H10V5.84848H0Z"
                          fill="black"
                        />
                      </svg>
                      Add Designation
                    </button>
                  </div>
                </div>

                <table className="table tablebordered">
                  <thead>
                    <tr>
                      <th className="col-2">Sl.No.</th>
                      <th>Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {designation.map((item, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            {item.designation === "" ? "-" : item.designation}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Tab.Pane>

              <Tab.Pane className="tab_content" eventKey="tab3">
                <div className="tab_content">
                  <p className="mt-2 margin-bottom-0">
                    Teams &#40;{totalDesignation}&#41;
                  </p>
                  <div className="emp_input">
                    <svg
                      className="emp_slogo"
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
                    </svg>
                    <input
                      className="emp_input"
                      placeholder="Search by name, Designation, employee ID"
                    />

                    <button className="download_btn">
                      Download Report
                      <svg
                        style={{ marginLeft: 10, marginRight: 10 }}
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.00002 8.38317C5.91113 8.38317 5.8278 8.36917 5.75002 8.34117C5.67224 8.31362 5.60002 8.2665 5.53335 8.19984L3.13335 5.79984C3.01113 5.67762 2.95002 5.52206 2.95002 5.33317C2.95002 5.14428 3.01113 4.98873 3.13335 4.8665C3.25558 4.74428 3.4138 4.68028 3.60802 4.6745C3.80269 4.66917 3.96113 4.72761 4.08335 4.84984L5.33335 6.09984V1.33317C5.33335 1.14428 5.39735 0.985837 5.52535 0.857837C5.65291 0.730282 5.81113 0.666504 6.00002 0.666504C6.18891 0.666504 6.34735 0.730282 6.47535 0.857837C6.60291 0.985837 6.66669 1.14428 6.66669 1.33317V6.09984L7.91669 4.84984C8.03891 4.72761 8.19735 4.66917 8.39202 4.6745C8.58624 4.68028 8.74446 4.74428 8.86669 4.8665C8.98891 4.98873 9.05002 5.14428 9.05002 5.33317C9.05002 5.52206 8.98891 5.67762 8.86669 5.79984L6.46669 8.19984C6.40002 8.2665 6.3278 8.31362 6.25002 8.34117C6.17224 8.36917 6.08891 8.38317 6.00002 8.38317ZM2.00002 11.3332C1.63335 11.3332 1.31958 11.2027 1.05869 10.9418C0.797354 10.6805 0.666687 10.3665 0.666687 9.99984V8.6665C0.666687 8.47762 0.730465 8.31917 0.85802 8.19117C0.98602 8.06361 1.14446 7.99984 1.33335 7.99984C1.52224 7.99984 1.68069 8.06361 1.80869 8.19117C1.93624 8.31917 2.00002 8.47762 2.00002 8.6665V9.99984H10V8.6665C10 8.47762 10.064 8.31917 10.192 8.19117C10.3196 8.06361 10.4778 7.99984 10.6667 7.99984C10.8556 7.99984 11.0138 8.06361 11.1414 8.19117C11.2694 8.31917 11.3334 8.47762 11.3334 8.6665V9.99984C11.3334 10.3665 11.2029 10.6805 10.942 10.9418C10.6807 11.2027 10.3667 11.3332 10 11.3332H2.00002Z"
                          fill="#0A0A0A"
                        />
                      </svg>
                    </button>
                    <button className="add_emp_btn">
                      <svg
                        style={{ marginRight: 10, marginLeft: 10 }}
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.15152 10V0H5.84848V10H4.15152ZM0 5.84848V4.15152H10V5.84848H0Z"
                          fill="black"
                        />
                      </svg>
                      Add Team
                    </button>
                  </div>
                </div>
                <table className="table tablebordered">
                  <thead>
                    <tr>
                      <th className="col-2">Sl.No.</th>
                      <th>Team Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {department.map((item, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            {item.department === "" ? "-" : item.department}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

export default Manageusers;
