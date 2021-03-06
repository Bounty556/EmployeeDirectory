import React, { useRef } from 'react';

import Column from '../Column';
import Row from '../Row';

function AddEmployee(props) {
  const employeeName = useRef(null);
  const employeeOccupation = useRef(null);
  const employeeDepartment = useRef(null);
  const employeeSalary = useRef(null);

  const submitEmployee = event => {
    event.preventDefault();

    const nameVal = employeeName.current.value;
    const occupationVal = employeeOccupation.current.value;
    const departmentVal = employeeDepartment.current.value;
    const salaryVal = employeeSalary.current.value;

    // Make sure all fields have values
    if (nameVal && occupationVal && departmentVal && salaryVal) {
      const employee = {};
      employee.name = capitalize(nameVal);
      employee.occupation = capitalize(occupationVal);
      employee.department = capitalize(departmentVal);
      employee.salary = parseInt(salaryVal);

      props.addEmployee(employee);
    }
  };

  // Capitalize the first letter of every word in the string
  const capitalize = string => {
    const words = string.split(' ');

    for (let i = 0; i < words.length; i++) {
      let letter = words[i].charAt(0);
      words[i] = letter.toUpperCase() + words[i].substr(1).toLowerCase();
    }

    return words.join(' ');
  };

  return (
    <form>
      <Row>
        <Column>
          <label htmlFor='addEmployeeName'>Name:</label>
          <input type='text' ref={employeeName} id='addEmployeeName' placeholder='Susan Bog' />
        </Column>

        <Column>
          <label htmlFor='addEmployeeOccupation'>Occupation:</label>
          <input
            type='text'
            ref={employeeOccupation}
            id='addEmployeeOccupation'
            placeholder='Sales Manager'
          />
        </Column>

        <Column>
          <label htmlFor='addEmployeeDepartment'>Department:</label>
          <input
            type='text'
            ref={employeeDepartment}
            id='addEmployeeDepartment'
            placeholder='Sales'
          />
        </Column>

        <Column>
          <label htmlFor='addEmployeeSalary'>Salary:</label>
          <input type='number' ref={employeeSalary} id='addEmployeeSalary' placeholder='120000' />
        </Column>

        <Column>
          <button type='submit' onClick={submitEmployee} className='btn-sm btn-primary'>
            Add Employee
          </button>
        </Column>
      </Row>
    </form>
  );
}

export default AddEmployee;
