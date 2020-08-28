import React, { useState } from 'react';

function SortOptions(props) {
  const [sortDirections, setSortDirections] = useState({
    name: 1,
    occupation: 1,
    department: 1,
    salary: 1
  });

  const sortBy = field => {
    const sortObj = {};
    sortObj[field] = sortDirections[field] > 0 ? -1 : 1;
    setSortDirections(prevState => ({ ...prevState, ...sortObj }));
    props.setSortMethod({ sortBy: field, direction: sortObj[field] });
  };

  return (
    <div>
      <p>
        Name{' '}
        <button id='nameSort' onClick={() => sortBy('name')}>
          {sortDirections.name > 0 ? '^' : 'V'}
        </button>
      </p>
      <p>
        Occupation{' '}
        <button id='occupationSort' onClick={() => sortBy('occupation')}>
          {sortDirections.occupation > 0 ? '^' : 'V'}
        </button>
      </p>
      <p>
        Department{' '}
        <button id='departmentSort' onClick={() => sortBy('department')}>
          {sortDirections.department > 0 ? '^' : 'V'}
        </button>
      </p>
      <p>
        Salary{' '}
        <button id='salarySort' onClick={() => sortBy('salary')}>
          {sortDirections.salary > 0 ? '^' : 'V'}
        </button>
      </p>
    </div>
  );
}

export default SortOptions;
