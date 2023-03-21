import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logout_logo from "../assets/svgs/svg_3.svg";

const Sidebar_header = () => {
  const navigate = useNavigate();
  const [logdata, setLogdata] = useState(false);

  return (
    <div className="position-relative">
      <img
        src={logout_logo}
        className="logout_logo"
        style={{ cursor: "pointer" }}
        data-bs-toggle="modal"
        data-bs-target="#logout"
        data-bs-dismiss="modal"
        aria-labelledby="btn_logout"
        aria-hidden="true"
      />
      <div className={logdata ? "showit" : "hideit"}>
        {/* <div
          className="btn_logout"
          
        >
          <svg
            tabindex="-1"
            aria-labelledby="btn_logout"
            aria-hidden="true"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.49375 10.2062C9.35625 10.0437 9.2875 9.85925 9.2875 9.65275C9.2875 9.44625 9.35625 9.2745 9.49375 9.1375L10.8813 7.75H5.5C5.2875 7.75 5.10925 7.678 4.96525 7.534C4.82125 7.39 4.7495 7.212 4.75 7C4.75 6.7875 4.822 6.60925 4.966 6.46525C5.11 6.32125 5.288 6.2495 5.5 6.25H10.8813L9.49375 4.8625C9.34375 4.7125 9.26875 4.53425 9.26875 4.32775C9.26875 4.12125 9.34375 3.94325 9.49375 3.79375C9.63125 3.64375 9.80325 3.56875 10.0098 3.56875C10.2163 3.56875 10.388 3.6375 10.525 3.775L13.225 6.475C13.3 6.55 13.3533 6.63125 13.3848 6.71875C13.4163 6.80625 13.4318 6.9 13.4313 7C13.4313 7.1 13.4158 7.19375 13.3848 7.28125C13.3538 7.36875 13.3005 7.45 13.225 7.525L10.525 10.225C10.3625 10.3875 10.1843 10.4595 9.99025 10.441C9.79625 10.4225 9.63075 10.3442 9.49375 10.2062ZM1.75 13.75C1.3375 13.75 0.984251 13.6033 0.690251 13.3098C0.396251 13.0163 0.249501 12.663 0.250001 12.25V1.75C0.250001 1.3375 0.397001 0.984251 0.691001 0.690251C0.985001 0.396251 1.338 0.249501 1.75 0.250001H6.25C6.4625 0.250001 6.64075 0.322001 6.78475 0.466001C6.92875 0.610001 7.0005 0.788001 7 1C7 1.2125 6.928 1.39075 6.784 1.53475C6.64 1.67875 6.462 1.7505 6.25 1.75H1.75V12.25H6.25C6.4625 12.25 6.64075 12.322 6.78475 12.466C6.92875 12.61 7.0005 12.788 7 13C7 13.2125 6.928 13.3908 6.784 13.5348C6.64 13.6788 6.462 13.7505 6.25 13.75H1.75Z"
              fill="#EC5050"
            />
          </svg>
          Logout
        </div> */}
      </div>
      {/* logout pop up  */}
      <div
        className="modal fade change_emp"
        id="logout"
        data-bs-backdrop="static"
        data-bs-keyboard="true"
        aria-labelledby="exampleModalLabel"
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
                width="59"
                height="52"
                viewBox="0 0 59 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.2478 16.583V4C38.2478 2.89543 37.3524 2 36.2478 2H3.67065C2.56608 2 1.67065 2.89543 1.67065 4V43.2886C1.67065 44.3932 2.56609 45.2886 3.67066 45.2886H36.2478C37.3524 45.2886 38.2478 44.3932 38.2478 43.2886V30.9358"
                  stroke="#ED5454"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M24.9302 6.12775L13.1345 2.23904C12.6554 2.08111 12.1508 2.01521 11.6472 2.04483L4.76511 2.44966C2.65086 2.57403 1 4.32486 1 6.44277V42.7641C1 44.633 2.29402 46.2527 4.1167 46.6654L22.7945 50.8943C25.2968 51.4609 27.6778 49.5586 27.6778 46.9931V9.92664C27.6778 8.20005 26.57 6.66833 24.9302 6.12775Z"
                  fill="#ED5454"
                />
                <path
                  d="M53.6075 24.1416L35.5706 24.1416"
                  stroke="#ED5454"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M46.3328 31.3858L53.6077 24.1422L46.3328 16.8973"
                  stroke="#ED5454"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="modal-body d-flex justify-content-center align-items-center">
              Are you sure want to Log out?
            </div>
            <div
              className="d-flex justify-content-evenly align-items-center"
              style={{
                padding: 20,
                paddingBottom: 26,
              }}
            >
              <button
                onClick={() => (localStorage.clear(), navigate("/"))}
                data-bs-dismiss="modal"
                className="e_del"
                type="button"
              >
                Logout
              </button>
              <button
                data-bs-dismiss="modal"
                className="e_back"
                type="button"
                onClick={() => setLogdata(false)}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar_header;
