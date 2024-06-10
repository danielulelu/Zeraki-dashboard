import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PaymentsIcon from "@mui/icons-material/Payments";
import TocIcon from "@mui/icons-material/Toc";
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
              <Link to="/" style={{ textDecoration: "none" }}>
                Dashboard
              </Link>
            </span>
          </li>
          <li>
            <span>
              <SchoolIcon className="icon" />
              <Link to="/school" style={{ textDecoration: "none" }}>
                School
              </Link>
            </span>
          </li>

          <p className="title">Products</p>
          <li>
            <AnalyticsIcon className="icon" />
            <span>Zeraki Analytics</span>
          </li>
          <li>
            <PaymentsIcon className="icon" />
            <span>Zeraki Finance</span>
          </li>
          <li>
            <TocIcon className="icon" />
            <span>Zeraki Timetable</span>
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
