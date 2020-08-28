import React from 'react';

function Filters() {
  return (
    <div>
      <form>
        <label for='filterEmployeeName'>Name:</label>
        <input type='text' id='filterEmployeeName' placeholder='Susan Bog' />

        <label for='filterEmployeeOccupation'>Occupation:</label>
        <input type='text' id='filterEmployeeOccupation' placeholder='Sales Manager' />
        
        <label for='filterEmployeeDepartment'>Department:</label>
        <input type='text' id='filterEmployeeDepartment' placeholder='Sales' />

        <label for='greaterThan'>&gt;=</label>
        <input type='radio' id='greaterThan' name='filterSalaryOption' />
        
        <label for='lessThan'>&lt;=</label>
        <input type='radio' id='lessThan' name='filterSalaryOption' />

        <label for='filterEmployeeSalary'>Salary:</label>
        <input type='number' id='filterEmployeeSalary' placeholder='120000' />

        <input type='submit' value='Filter Employees' />
      </form>
    </div>
  );
}

export default Filters;
