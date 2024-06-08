import "./App.css";
// import SidebarLayout from "./components/sidebar/SidebarLayout.jsx";
import Dashboard from "./pages/home/Dashboard.jsx";
import SchoolDetail from "./pages/school/SchoolDetail.jsx";
import School from "./pages/school/School.jsx";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
