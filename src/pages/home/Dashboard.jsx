import "./dashboard.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";

const Dashboard = () => {
  // display dynamic counters for collections, signups, totalRevenue and Bounced cheques
  const [collections, setCollections] = useState(0);
  const [signups, setSignups] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [bouncedCheques, setBouncedCheques] = useState(0);

  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <div className="counters">
          <div className="counter">
            <span>Collections</span>
            <span>{collections}</span>
          </div>
          <div className="counter">
            <span>Signups</span>
            <span>{signups}</span>
          </div>
          <div className="counter">
            <span>Total Revenue</span>
            <span>{totalRevenue}</span>
          </div>
          <div className="counter">
            <span>Bounced Cheques</span>
            <span>{bouncedCheques}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
