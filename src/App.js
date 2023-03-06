import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Attendance from "./components/attendance/Attendance";
import Mangeusers from "./components/manage_users/Manageusers";
import Floorplan from "./components/floor_plan/Floorplan";
import Employees from "./components/manage_users/employees/Employees";
import Designation from "./components/manage_users/designation/Designation";
import Teams from "./components/manage_users/teams/Teams";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/manageusers" element={<Mangeusers />} />
          <Route path="/floorplan" element={<Floorplan />} />
          {/* <Route path="/employees" element={<Employees />} />
          <Route path="/designation" element={<Designation />} />
          <Route path="/teams" element={<Teams />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
