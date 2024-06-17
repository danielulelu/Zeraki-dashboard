import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import AnalyticsIcon from "@mui/icons-material/Analytics";
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
          <p className="title">Main Modules</p>
          <li>
            <DashboardIcon className="icon" />
            <span>
              <Link to="/" style={{ textDecoration: "none" }}>
                Dashboard
              </Link>
            </span>
          </li>
          <li>
            <SchoolIcon className="icon" />
            <span>
              <Link to="/school" style={{ textDecoration: "none" }}>
                School
              </Link>
            </span>
          </li>

          <p className="title">Products</p>
          <li>
            <AnalyticsIcon className="icon" />
            <span>
              <Link to="/product/collections" style={{ textDecoration: "none" }}>
                Collections
              </Link>
            </span>
          </li>
         
          <li>
            <TocIcon className="icon" />
            <span>
              <Link to="/product/invoices" style={{ textDecoration: "none" }}>
                Invoices
              </Link>
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
