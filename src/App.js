import "./App.css";
// import SidebarLayout from "./components/sidebar/SidebarLayout.jsx";
import Dashboard from "./pages/home/Dashboard.jsx";
import SchoolDetail from "./pages/school/SchoolDetail.jsx";
import School from "./pages/school/School.jsx";
import Analytics from "./pages/products/Analytics.jsx";
import Finance from "./pages/products/Finance.jsx";
import Timetable from "./pages/products/Timetable.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/school" element={<School />} />
          {/* school details */}
          <Route path="/school/:id" element={<SchoolDetail />} />

          <Route path="/product/analytics" element={<Analytics />} />
          <Route path="/product/finance" element={<Finance />} />
          <Route path="/product/timetable" element={<Timetable />} />

          <Route
            path="*"
            element={
              <h1
                style={{
                  textDecoration: "underline",
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                404 Not Found
              </h1>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
