import React from 'react';

import AddEmployee from '../AddEmployee';
import Filters from '../Filters';
import EmployeeList from '../EmployeeList';

function EmployeeDirectory() {
  return (
    <div>
      <h2>Employee Directory</h2>
      <p>You can add a new employee to the employee directory below. Then, use the filters below and sort the columns to see information about specific employees.</p>
      <AddEmployee />
      <Filters />
      <EmployeeList />
    </div>
  );
}

export default EmployeeDirectory;
