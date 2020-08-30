import React, { useRef } from 'react';

import Column from '../Column';
import Row from '../Row';

function Filters(props) {
  const employeeName = useRef(null);
  const employeeOccupation = useRef(null);
  const employeeDepartment = useRef(null);
  const salaryGreater = useRef(null);
  const employeeSalary = useRef(null);

  const submitFilters = event => {
    event.preventDefault();

    const nameVal = employeeName.current.value.toLowerCase();
    const occupationVal = employeeOccupation.current.value.toLowerCase();
    const departmentVal = employeeDepartment.current.value.toLowerCase();
    const isSalaryGreater = salaryGreater.current.checked;
    const salaryVal = parseInt(employeeSalary.current.value);

    const filters = {
      name: nameVal.length > 0 ? nameVal : null,
      occupation: occupationVal.length > 0 ? occupationVal : null,
      department: departmentVal.length > 0 ? departmentVal : null,
      isGreater: isSalaryGreater,
      salary: !isNaN(salaryVal) && salaryVal > 0 ? salaryVal : null
    };

    props.setFilters(filters);
  };

  return (
    <form>
      <Row>
        <Column>
          <label htmlFor='filterEmployeeName'>Name:</label>
          <input type='text' ref={employeeName} id='filterEmployeeName' placeholder='Susan Bog' />
        </Column>

        <Column>
          <label htmlFor='filterEmployeeOccupation'>Occupation:</label>
          <input
            type='text'
            ref={employeeOccupation}
            id='filterEmployeeOccupation'
            placeholder='Sales Manager'
          />
        </Column>

        <Column>
          <label htmlFor='filterEmployeeDepartment'>Department:</label>
          <input
            type='text'
            ref={employeeDepartment}
            id='filterEmployeeDepartment'
            placeholder='Sales'
          />
        </Column>

        <Column>
          <label htmlFor='filterEmployeeSalary'>Salary: &nbsp;</label>
          <label htmlFor='greaterThan'>&gt;=</label>
          <input
            type='radio'
            ref={salaryGreater}
            id='greaterThan'
            name='filterSalaryOption'
            defaultChecked={true}
          />

          <label htmlFor='lessThan'>&lt;=</label>
          <input type='radio' id='lessThan' name='filterSalaryOption' />

          <input
            type='number'
            ref={employeeSalary}
            id='filterEmployeeSalary'
            placeholder='120000'
          />
        </Column>

        <Column>
          <button type='submit' onClick={submitFilters} className='btn-sm btn-primary'>
            Filter Employees
          </button>
        </Column>
      </Row>
    </form>
  );
}

export default Filters;
