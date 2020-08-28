import React from 'react';

function AddEmployee() {
  return (
    <div>
      <form>

        <label for='addEmployeeName'>Name:</label>
        <input type='text' id='addEmployeeName' placeholder='Susan Bog' />

        <label for='addEmployeeOccupation'>Occupation:</label>
        <input type='text' id='addEmployeeOccupation' placeholder='Sales Manager' />
        
        <label for='addEmployeeDepartment'>Department:</label>
        <input type='text' id='addEmployeeDepartment' placeholder='Sales' />

        <label for='addEmployeeSalary'>Salary:</label>
        <input type='number' id='addEmployeeSalary' placeholder='120000' />

        <input type='submit' value='Add Employee' />
      </form>
    </div>
  );
}

export default AddEmployee;
