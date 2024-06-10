import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

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
              <Link to="/">Dashboard</Link>
            </span>
          </li>
          <li>
            <span>
              <SchoolIcon className="icon" />
              <Link to="/school">School</Link>
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
