import React, { useState } from 'react';

import AddEmployee from '../AddEmployee';
import Filters from '../Filters';
import EmployeeList from '../EmployeeList';

function EmployeeDirectory() {
  const [sortMethod, setSortMethod] = useState({ sortBy: 'name', direction: 1 });
  const [employees, setEmployees] = useState([
    {
      name: 'Bob Truply',
      occupation: 'Senior React Developer',
      department: 'Engineering',
      salary: 150000
    },
    {
      name: 'Kirk Werther',
      occupation: 'Senior React Developer',
      department: 'Engineering',
      salary: 150000
    },
    {
      name: 'Bob Truply',
      occupation: 'Senior React Developer',
      department: 'Engineering',
      salary: 150000
    }
  ]);

  const addEmployee = employee => {
    setEmployees(prevState => [...prevState, employee]);
    // TODO: Make call to database
  };

  return (
    <div>
      <h2>Employee Directory</h2>
      <p>
        You can add a new employee to the employee directory below. Then, use the filters below and
        sort the columns to see information about specific employees.
      </p>
      <AddEmployee addEmployee={addEmployee} />
      <Filters />
      <EmployeeList employees={employees} setSortMethod={setSortMethod} />
    </div>
  );
}

export default EmployeeDirectory;
