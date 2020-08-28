import React from 'react';

import EmployeeEntry from '../EmployeeEntry';
import SortOptions from '../SortOptions';

function EmployeeList(props) {
  return (
    <div>
      <SortOptions setSortMethod={props.setSortMethod} />
      {props.employees.map((employee, i) => (
        <EmployeeEntry {...employee} key={i} />
      ))}
    </div>
  );
}

export default EmployeeList;
