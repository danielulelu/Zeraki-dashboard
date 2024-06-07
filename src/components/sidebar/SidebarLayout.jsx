import Sidebar from "./Sidebar";
import './Sidebar.scss';

const SidebarLayout = ({ children }) => {
  return (
    <div className="SidebarLayout">
        <Sidebar />
        <div className="content">
            {children}
        </div>
    </div>
  )
}
export default SidebarLayout