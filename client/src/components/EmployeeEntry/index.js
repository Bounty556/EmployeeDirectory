import React from 'react';

function EmployeeEntry(props) {
  return (
    <div>
      <p>
        {props.name} {props.occupation} {props.department} {props.salary}
      </p>
    </div>
  );
}

export default EmployeeEntry;
