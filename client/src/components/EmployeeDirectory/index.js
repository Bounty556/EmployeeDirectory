import React, { useState, useEffect } from 'react';

import AddEmployee from '../AddEmployee';
import Filters from '../Filters';
import EmployeeList from '../EmployeeList';

function EmployeeDirectory() {
  const [sortMethod, setSortMethod] = useState({ sortBy: 'name', direction: 1 });
  const [filters, setFilters] = useState({});
  const [allEmployees, setAllEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const filterEmployees = array => {
      if (filters.name) {
        array = array.filter(el => el.name.toLowerCase().includes(filters.name));
      }
      if (filters.occupation) {
        array = array.filter(el => el.occupation.toLowerCase().includes(filters.occupation));
      }
      if (filters.department) {
        array = array.filter(el => el.department.toLowerCase().includes(filters.department));
      }

      if (filters.salary) {
        if (filters.isGreater) {
          array = array.filter(el => el.salary >= filters.salary);
        } else {
          array = array.filter(el => el.salary <= filters.salary);
        }
      }

      return array;
    };

    const sortEmployees = array => {
      if (sortMethod.sortBy === 'salary') {
        array.sort(
          (employee1, employee2) => (employee1.salary - employee2.salary) * sortMethod.direction
        );
      } else {
        array.sort((employee1, employee2) => {
          if (employee1[sortMethod.sortBy] > employee2[sortMethod.sortBy]) {
            return -sortMethod.direction;
          } else if (employee1[sortMethod.sortBy] < employee2[sortMethod.sortBy]) {
            return sortMethod.direction;
          }
          return 0;
        });
      }

      return array;
    };

    let copy = allEmployees.map(el => ({ ...el }));
    copy = filterEmployees(copy);
    copy = sortEmployees(copy);
    setFilteredEmployees(copy);
  }, [allEmployees, sortMethod, filters]);

  const addEmployee = employee => {
    setAllEmployees(prevState => [...prevState, employee]);
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
      <Filters setFilters={setFilters} />
      <EmployeeList employees={filteredEmployees} setSortMethod={setSortMethod} />
    </div>
  );
}

export default EmployeeDirectory;
