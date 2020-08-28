import React from 'react';

function Filters() {
  return (
    <div>
      <form>
        <label htmlFor='filterEmployeeName'>Name:</label>
        <input type='text' id='filterEmployeeName' placeholder='Susan Bog' />

        <label htmlFor='filterEmployeeOccupation'>Occupation:</label>
        <input type='text' id='filterEmployeeOccupation' placeholder='Sales Manager' />
        
        <label htmlFor='filterEmployeeDepartment'>Department:</label>
        <input type='text' id='filterEmployeeDepartment' placeholder='Sales' />

        <label htmlFor='greaterThan'>&gt;=</label>
        <input type='radio' id='greaterThan' name='filterSalaryOption' />
        
        <label htmlFor='lessThan'>&lt;=</label>
        <input type='radio' id='lessThan' name='filterSalaryOption' />

        <label htmlFor='filterEmployeeSalary'>Salary:</label>
        <input type='number' id='filterEmployeeSalary' placeholder='120000' />

        <input type='submit' value='Filter Employees' />
      </form>
    </div>
  );
}

export default Filters;
