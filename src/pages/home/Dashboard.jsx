import React, { useState, useEffect } from "react";
import "./dashboard.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Piechart from "../../components/charts/Piechart";
// import Barchart from "../../components/charts/Barchart"

const Dashboard = () => {
  // State variables for counters
  const [collections, setCollections] = useState(0);
  const [signUps, setSignUps] = useState({
    total: 0,
    analytics: { primary: 0, secondary: 0, igcse: 0 },
    finance: { primary: 0, secondary: 0, igcse: 0 },
    timetable: { primary: 0, secondary: 0, igcse: 0 },
  });
  const [totalRevenue, setTotalRevenue] = useState({
    total: 0,
    analytics: 0,
    finance: 0,
    timetable: 0,
  });
  const [bouncedCheques, setBouncedCheques] = useState(0);

  // Fetch data when the component mounts
  useEffect(() => {
    // Simulating data fetching with static values
    setCollections(123);
    setSignUps({
      total: 90,
      analytics: { primary: 30, secondary: 20, igcse: 10 },
      finance: { primary: 10, secondary: 30, igcse: 20 },
      timetable: { primary: 10, secondary: 20, igcse: 30 },
    });
    setTotalRevenue({
      total: 6789,
      analytics: 3000,
      finance: 2500,
      timetable: 1289,
    });
    setBouncedCheques(2);
  }, []);

  const signUpData = [
    { name: "Analytics", value: signUps.analytics.primary + signUps.analytics.secondary + signUps.analytics.igcse },
    { name: "Finance", value: signUps.finance.primary + signUps.finance.secondary + signUps.finance.igcse },
    { name: "Timetable", value: signUps.timetable.primary + signUps.timetable.secondary + signUps.timetable.igcse },
  ];

  const revenueData = [
    { name: "Analytics", value: totalRevenue.analytics },
    { name: "Finance", value: totalRevenue.finance },
    { name: "Timetable", value: totalRevenue.timetable },
  ];

  const signUpDataAnalytics = [
    { type: 'Primary', analytics: signUps.analytics.primary, finance: signUps.finance.primary, timetable: signUps.timetable.primary },
    { type: 'Secondary', analytics: signUps.analytics.secondary, finance: signUps.finance.secondary, timetable: signUps.timetable.secondary },
    { type: 'IGCSE', analytics: signUps.analytics.igcse, finance: signUps.finance.igcse, timetable: signUps.timetable.igcse },
  ];

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
            <p>Zeraki Analytics: {signUps.analytics.primary + signUps.analytics.secondary + signUps.analytics.igcse}</p>
            <p>Zeraki Finance: {signUps.finance.primary + signUps.finance.secondary + signUps.finance.igcse}</p>
            <p>Zeraki Timetable: {signUps.timetable.primary + signUps.timetable.secondary + signUps.timetable.igcse}</p>
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
        <div className="charts">
          <Piechart data={signUpData} title="Sign Ups" />
          <Piechart data={revenueData} title="Revenue"/>
          {/* <Barchart data={signUpDataAnalytics} title="Sign Ups Distribution" /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
