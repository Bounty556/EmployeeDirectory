import React, { useState, useEffect } from 'react';

import AddEmployee from '../AddEmployee';
import Filters from '../Filters';
import EmployeeList from '../EmployeeList';

function EmployeeDirectory() {
  const [sortMethod, setSortMethod] = useState({ sortBy: 'name', direction: 1 });
  const [filters, setFilters] = useState(null);
  const [employees, setEmployees] = useState([]);

  const addEmployee = employee => {
    setEmployees(prevState => [...prevState, employee]);
    // TODO: Make call to database
  };

  useEffect(() => {
    // TODO: Filter employees array
    // TODO: Sort employees array
  }, [sortMethod, filters]);

  return (
    <div>
      <h2>Employee Directory</h2>
      <p>
        You can add a new employee to the employee directory below. Then, use the filters below and
        sort the columns to see information about specific employees.
      </p>
      <AddEmployee addEmployee={addEmployee} />
      <Filters setFilters={setFilters} />
      <EmployeeList employees={employees} setSortMethod={setSortMethod} />
    </div>
  );
}

export default EmployeeDirectory;
