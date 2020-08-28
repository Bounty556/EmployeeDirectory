import React, { useState, useEffect } from 'react';

import AddEmployee from '../AddEmployee';
import Filters from '../Filters';
import EmployeeList from '../EmployeeList';

function EmployeeDirectory() {
  const [sortMethod, setSortMethod] = useState({ sortBy: 'name', direction: 1 });
  const [filters, setFilters] = useState({});
  const [allEmployees, setAllEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const addEmployee = employee => {
    setAllEmployees(prevState => [...prevState, employee]);
    // TODO: Make call to database
  };

  useEffect(() => {
    filterAndSortEmployees();
  }, [allEmployees, sortMethod, filters]);

  const filterAndSortEmployees = () => {
    let filtered = filterEmployees(allEmployees);
    filtered = sortEmployees(filtered);
    setFilteredEmployees(filtered);
  };

  const filterEmployees = array => {
    if (array.length === 0) {
      return [];
    }

    let copy = array.map(el => ({ ...el }));
    if (filters.name) {
      copy = copy.filter(el => el.name.toLowerCase().includes(filters.name));
    }
    if (filters.occupation) {
      copy = copy.filter(el => el.occupation.toLowerCase().includes(filters.occupation));
    }
    if (filters.department) {
      copy = copy.filter(el => el.department.toLowerCase().includes(filters.department));
    }

    if (filters.salary) {
      if (filters.isGreater) {
        copy = copy.filter(el => el.salary >= filters.salary);
      } else {
        copy = copy.filter(el => el.salary <= filters.salary);
      }
    }

    return copy;
  };

  const sortEmployees = array => {
    if (array.length === 0) {
      return [];
    }
    // TODO: Sort employees array

    return array;
  };

  return (
    <div>
      <h2>Employee Directory</h2>
      <p>
        You can add a new employee to the employee directory below. Then, use the filters below and
        sort the columns to see information about specific employees.
      </p>
      <AddEmployee addEmployee={addEmployee} />
      <Filters setFilters={setFilters} />
      <EmployeeList employees={filteredEmployees} setSortMethod={setSortMethod} />
    </div>
  );
}

export default EmployeeDirectory;
