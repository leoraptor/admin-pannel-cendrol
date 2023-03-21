import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Attendance from "./components/attendance/Attendance";
import Mangeusers from "./components/manage_users/Manageusers";
import Floorplan from "./components/floor_plan/Floorplan";
import Page404 from "./re_use/Page404";
import MapLayers from "./components/MapLayers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route exact path="/" element={<MapLayers />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/manageusers" element={<Mangeusers />} />
          <Route path="/floorplan" element={<Floorplan />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
