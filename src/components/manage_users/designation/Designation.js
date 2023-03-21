import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axiosInterceptor from "../../../helpers/axiosInterceptor";
import ClearIcon from "@mui/icons-material/Clear";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  addDesignationSchema,
  updateNewDesignationSchema,
} from "../../../schemas/validation";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import Filter from "react-filter-search";

const Designation = () => {
  const [designation, setDesignation] = useState([]);
  const [tableDesignation, setTableDesignation] = useState("");
  const [tableDesigType, setTableDesigType] = useState("");
  const [btnLoader, setBtnLoader] = useState(true);
  const [search, setSearch] = useState("");
  // get all designation api
  const fetchAllDesignation = () => {
    axiosInterceptor
      .get(`/get-all-designation`)
      .then((res) => {
        setBtnLoader(false);
        setDesignation(res.data.result);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  //add new designation api
  const form1 = useFormik({
    initialValues: {
      toSendDesignation: "",
    },
    validationSchema: addDesignationSchema,
    onSubmit: (values, { resetForm }) => {
      axiosInterceptor
        .post(`/add-designation`, {
          designation: values.toSendDesignation,
        })
        .then((res) => {
          if (res.data.success) {
            setBtnLoader(false);
            fetchAllDesignation();
            toast.success(res.data.message);
            resetForm();
          }
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    },
  });
  //delete designation api
  const deleteDesignation = () => {
    axiosInterceptor
      .delete(`/delete-designation?designation_id=${tableDesignation}`)
      .then((res) => {
        if (res.data.success) {
          setBtnLoader(false);
          fetchAllDesignation();
          toast.success(res.data.message);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  useEffect(() => {
    fetchAllDesignation();
  }, []);
  return (
    <>
      <div className="tab_content">
        <p className="mt-2 margin-bottom-0">
          Designation &#40;{designation.length}&#41;
        </p>
        <div className="emp_input">
          <svg
            className="emp_dlogo"
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5137 12.8638L15.1567 15.5"
              stroke="#646464"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            className="emp_input_box_designation"
            placeholder="Search by Designation"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
            className="add_emp_btn "
            data-bs-toggle="modal"
            data-bs-target="#add_designation"
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
            Add Designation
          </button>
        </div>
      </div>
      {btnLoader === false ? (
        <div>
          <table className="table tablebordered custom-table">
            <thead style={{ display: "block" }}>
              <tr>
                <th style={{ paddingLeft: "35px" }} className="col-2">
                  Sl.No.
                </th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              <Filter
                data={designation}
                filterKeys={["designation"]}
                value={search}
                renderResults={(results) =>
                  results.map((item, index) => (
                    <tr
                      key={index}
                      data-bs-toggle="modal"
                      data-bs-target="#display_designation"
                      onClick={(e) => {
                        setTableDesignation(item._id);
                        setTableDesigType(e.target.innerText);
                      }}
                    >
                      <td style={{ paddingLeft: "35px" }}>{index + 1}</td>
                      <td>{item.designation || "-"}</td>
                    </tr>
                  ))
                }
              />
            </tbody>
          </table>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "50vh",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      )}

      {/* display designation pop up  */}
      <div
        className="modal fade displaydesignation"
        id="display_designation"
        data-bs-backdrop="static"
        data-bs-keyboard="true"
        // tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <p>Designation Details</p>
              <button
                type="button"
                className="border-0 bg_none"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <ClearIcon />
              </button>
            </div>
            <div className="modal-body">
              <p>Designation Name</p>
              <h2>{tableDesigType}</h2>
            </div>
            <div className="modal-footer">
              <button
                className="del_btn "
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#del_desingnation"
                data-bs-dismiss="modal"
              >
                <svg
                  style={{ marginRight: 10 }}
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.5247 2.49523C11.7841 2.49523 12 2.71056 12 2.98456V3.23789C12 3.50522 11.7841 3.72722 11.5247 3.72722H0.475902C0.215907 3.72722 0 3.50522 0 3.23789V2.98456C0 2.71056 0.215907 2.49523 0.475902 2.49523H2.41971C2.81457 2.49523 3.1582 2.21457 3.24703 1.81857L3.34882 1.36391C3.50702 0.744581 4.02766 0.333252 4.62351 0.333252H7.37649C7.96585 0.333252 8.49233 0.744581 8.64469 1.33124L8.75362 1.8179C8.8418 2.21457 9.18543 2.49523 9.58094 2.49523H11.5247ZM10.5372 11.7559C10.7402 9.86462 11.0955 5.37133 11.0955 5.326C11.1084 5.18867 11.0637 5.05867 10.9749 4.95401C10.8796 4.85601 10.759 4.79801 10.626 4.79801H1.37901C1.24545 4.79801 1.11837 4.85601 1.03019 4.95401C0.940717 5.05867 0.896628 5.18867 0.903112 5.326C0.904303 5.33433 0.917053 5.49261 0.938368 5.75722C1.03306 6.93272 1.29678 10.2067 1.46719 11.7559C1.58779 12.8973 2.33665 13.6146 3.42137 13.6406C4.25842 13.6599 5.12075 13.6666 6.00253 13.6666C6.83309 13.6666 7.67662 13.6599 8.53959 13.6406C9.66192 13.6213 10.4101 12.9166 10.5372 11.7559Z"
                    fill="#EC5050"
                  />
                </svg>
                Delete
              </button>
              <button
                className="edit_btn"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#editDesignation"
                data-bs-dismiss="modal"
              >
                <svg
                  style={{ marginRight: 10 }}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
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
      <div
        className="modal fade change_emp"
        id="del_desingnation"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div
              className="modal-header d-flex justify-content-center align-items-center"
              style={{
                marginTop: 31,
              }}
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.833496 29.998C0.833496 13.9009 13.9002 0.831299 30.0002 0.831299C46.1293 0.831299 59.1668 13.9009 59.1668 29.998C59.1668 46.1009 46.1293 59.1646 30.0002 59.1646C13.9002 59.1646 0.833496 46.1009 0.833496 29.998ZM27.4335 18.9438C27.4335 17.5467 28.6002 16.3771 30.0002 16.3771C31.4002 16.3771 32.5377 17.5467 32.5377 18.9438V31.8355C32.5377 33.2384 31.4002 34.373 30.0002 34.373C28.6002 34.373 27.4335 33.2384 27.4335 31.8355V18.9438ZM30.0293 43.6509C28.6002 43.6509 27.4627 42.4842 27.4627 41.0842C27.4627 39.6842 28.6002 38.5467 30.0002 38.5467C31.4293 38.5467 32.5668 39.6842 32.5668 41.0842C32.5668 42.4842 31.4293 43.6509 30.0293 43.6509Z"
                  fill="#ED5454"
                />
              </svg>
            </div>
            <div className="modal-body d-flex justify-content-center align-items-center">
              Are you sure want to delete?
            </div>
            <div
              className="d-flex justify-content-evenly align-items-center"
              style={{
                padding: 20,
                paddingBottom: 26,
              }}
            >
              <button
                onClick={() => deleteDesignation()}
                data-bs-dismiss="modal"
                className="e_del"
                type="button"
              >
                Delete
              </button>
              <button data-bs-dismiss="modal" className="e_back" type="button">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* edit designation pop up  */}
      <div
        className="modal fade displaydesignation editdesignation"
        id="editDesignation"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <p>Designation Details</p>
              <button
                type="button"
                className="border-0 bg_none"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <ClearIcon />
              </button>
            </div>
            <div className="modal-body">
              <Formik
                enableReinitialize={true}
                initialValues={{
                  currentDesignation: tableDesigType,
                }}
                validationSchema={updateNewDesignationSchema(tableDesigType)}
                onSubmit={(values) => {
                  axiosInterceptor
                    .put(
                      `/update-designation?designation_id=${tableDesignation}`,
                      {
                        designation: values.currentDesignation,
                      }
                    )
                    .then((res) => {
                      if (res.data.success) {
                        setBtnLoader(false);
                        fetchAllDesignation();
                        setTableDesigType("");
                        toast.success(res.data.message);
                      }
                    })
                    .catch((error) => {
                      toast.error(error.response.data.message);
                    });
                }}
                validateOnBlur={false}
                validateOnChange={false}
              >
                <Form>
                  <label htmlFor="currentDesignation">Designation Name</label>
                  <Field
                    className="input_feild_designation"
                    placeholder="eg. Legacy Manager"
                    name="currentDesignation"
                  />
                  <p className="error_mess_addemp mb-3">
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="currentDesignation"
                    />
                  </p>
                  <button type="submit" className="save_new_designation_btn">
                    Save Details
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {/* add designation  */}
      <div
        className="modal fade displaydesignation editdesignation"
        id="add_designation"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <p>Add Designation</p>
              <button
                type="button"
                className="border-0 bg_none"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <ClearIcon />
              </button>
            </div>
            <form onSubmit={form1.handleSubmit}>
              <div className="modal-body">
                <h2 htmlFor="toSendDesignation">Designation Name</h2>
                <input
                  className="input_feild_designation"
                  placeholder="eg. Legacy Manager"
                  id="toSendDesignation"
                  value={form1.values.toSendDesignation}
                  onChange={form1.handleChange}
                  onBlur={form1.handleBlur}
                />
                {form1.errors.toSendDesignation &&
                  form1.touched.toSendDesignation && (
                    <p style={{ color: "red" }}>
                      {form1.errors.toSendDesignation}
                    </p>
                  )}
                <button type="submit" className="save_new_designation_btn">
                  Add Designation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* display designation pop up  */}
    </>
  );
};

export default Designation;
