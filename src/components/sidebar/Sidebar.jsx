import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";

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
              Dashboard
            </span>
          </li>
          <li>
            <span>
              <SchoolIcon className="icon" />
              School
            </span>
          </li>
        </ul>
      </div>

      <div className="color">
        <span>Color Options</span>
      </div>
    </div>
  );
};
export default Sidebar;
