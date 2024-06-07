import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Zeraki</span>
      </div>
      <div className="center">
        <ul>
          <li>Dashboard</li>
          <li>School</li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
