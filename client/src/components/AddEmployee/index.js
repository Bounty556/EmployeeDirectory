import React from 'react';

function AddEmployee() {
  return (
    <div>
      <form>
        <label htmlFor='addEmployeeName'>Name:</label>
        <input type='text' id='addEmployeeName' placeholder='Susan Bog' />

        <label htmlFor='addEmployeeOccupation'>Occupation:</label>
        <input type='text' id='addEmployeeOccupation' placeholder='Sales Manager' />
        
        <label htmlFor='addEmployeeDepartment'>Department:</label>
        <input type='text' id='addEmployeeDepartment' placeholder='Sales' />

        <label htmlFor='addEmployeeSalary'>Salary:</label>
        <input type='number' id='addEmployeeSalary' placeholder='120000' />

        <input type='submit' value='Add Employee' />
      </form>
    </div>
  );
}

export default AddEmployee;
