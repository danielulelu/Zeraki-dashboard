import React, { useState, useEffect } from 'react';
import './dashboard.scss';
import Sidebar from '../../components/sidebar/Sidebar';

const Dashboard = () => {
  // State variables for counters
  const [collections, setCollections] = useState(0);
  const [signUps, setSignUps] = useState({
    total: 0,
    analytics: 0,
    finance: 0,
    timetable: 0
  });
  const [totalRevenue, setTotalRevenue] = useState({
    total: 0,
    analytics: 0,
    finance: 0,
    timetable: 0
  });
  const [bouncedCheques, setBouncedCheques] = useState(0);

  // Fetch data when the component mounts
  useEffect(() => {
    // Simulating data fetching with static values
    setCollections(123);
    setSignUps({
      total: 45,
      analytics: 20,
      finance: 15,
      timetable: 10
    });
    setTotalRevenue({
      total: 6789,
      analytics: 3000,
      finance: 2500,
      timetable: 1289
    });
    setBouncedCheques(2);
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <div className="cards">
          <div className="card">
            <h3>Collections</h3>
            <p>{collections}</p>
          </div>
          <div className="card">
            <h3>Sign-ups</h3>
            <p>Total: {signUps.total}</p>
            <p>Zeraki Analytics: {signUps.analytics}</p>
            <p>Zeraki Finance: {signUps.finance}</p>
            <p>Zeraki Timetable: {signUps.timetable}</p>
          </div>
          <div className="card">
            <h3>Total Revenue</h3>
            <p>Total: ${totalRevenue.total}</p>
            <p>Zeraki Analytics: ${totalRevenue.analytics}</p>
            <p>Zeraki Finance: ${totalRevenue.finance}</p>
            <p>Zeraki Timetable: ${totalRevenue.timetable}</p>
          </div>
          <div className="card">
            <h3>Bounced Cheques</h3>
            <p>{bouncedCheques}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
