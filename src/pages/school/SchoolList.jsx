// import "./school.scss";

const SchoolList = ({ schools, onSchoolSelect }) => {
  return (
    <div className="school-list">
      <h2>Schools</h2>
      <ul>
        {schools.map((school) => (
          <li key={school.id} onClick={() => onSchoolSelect(school)}>
            {school.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolList;
