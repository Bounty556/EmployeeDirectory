import React from 'react';

function EmployeeEntry(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Occupation: {props.occupation}</p>
      <p>Department: {props.department}</p>
      <p>Salary: {props.salary}</p>
    </div>
  );
}

export default EmployeeEntry;
