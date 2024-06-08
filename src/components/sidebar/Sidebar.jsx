import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Zeraki</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <span>
              <DashboardIcon className="icon" />
              <NavLink to="/">Dashboard</NavLink>
            </span>
          </li>
          <li>
            <span>
              <SchoolIcon className="icon" />
              <NavLink to="/school">School</NavLink>
            </span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};
export default Sidebar;
