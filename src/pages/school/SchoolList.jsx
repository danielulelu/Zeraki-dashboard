import { Link } from "react-router-dom";

const SchoolList = ({ schools, onSchoolSelect }) => {
  return (
    <div className="school-list">
      <h2>Schools</h2>
      <ul>
        {schools.map((school) => (
          <li key={school.id} onClick={() => onSchoolSelect(school)}>
            <Link to={`/school/${school.id}`} >{school.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolList;
