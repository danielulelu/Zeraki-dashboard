import { useState, useEffect } from "react";
import SchoolList from "./SchoolList";
import SchoolDetail from "./SchoolDetail";


const School = () => {
  // create state for holding the list of schools
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState([null]);

  // simulate data fetching with static values
  useEffect(() => {
    setSchools([
      { id: 1, name: "School 1" },
      { id: 2, name: "School 2" },
      { id: 3, name: "School 3" },
      { id: 4, name: "School 4" },
      { id: 5, name: "School 5" },
      { id: 6, name: "School 6" },
    ]);
  }, []);

  const handleSchoolSelect = (school) => {
    setSelectedSchool([...selectedSchool, school]);
  };
  return (
    <div className="school-container">
      <SchoolList schools={schools} onSchoolSelect={handleSchoolSelect} />
      {selectedSchool && <SchoolDetail school={selectedSchool} />}
    </div>
  );
};
export default School;
