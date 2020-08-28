import React, { useRef } from 'react';

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
    <div>
      <form>
        <label htmlFor='filterEmployeeName'>Name:</label>
        <input type='text' ref={employeeName} id='filterEmployeeName' placeholder='Susan Bog' />

        <label htmlFor='filterEmployeeOccupation'>Occupation:</label>
        <input
          type='text'
          ref={employeeOccupation}
          id='filterEmployeeOccupation'
          placeholder='Sales Manager'
        />

        <label htmlFor='filterEmployeeDepartment'>Department:</label>
        <input
          type='text'
          ref={employeeDepartment}
          id='filterEmployeeDepartment'
          placeholder='Sales'
        />

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

        <label htmlFor='filterEmployeeSalary'>Salary:</label>
        <input type='number' ref={employeeSalary} id='filterEmployeeSalary' placeholder='120000' />

        <input type='submit' onClick={submitFilters} value='Filter Employees' />
      </form>
    </div>
  );
}

export default Filters;
