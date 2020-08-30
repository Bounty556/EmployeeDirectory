import React, { useState } from 'react';

import Column from '../Column';
import Row from '../Row';

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
    <Row>
      <Column width='3'>
        Name{' '}
        <button id='nameSort' onClick={() => sortBy('name')} className='btn'>
          {sortDirections.name > 0 ? '^' : 'v'}
        </button>
      </Column>
      <Column width='3'>
        Occupation{' '}
        <button id='occupationSort' onClick={() => sortBy('occupation')} className='btn'>
          {sortDirections.occupation > 0 ? '^' : 'v'}
        </button>
      </Column>
      <Column width='3'>
        Department{' '}
        <button id='departmentSort' onClick={() => sortBy('department')} className='btn'>
          {sortDirections.department > 0 ? '^' : 'v'}
        </button>
      </Column>
      <Column width='3'>
        Salary{' '}
        <button id='salarySort' onClick={() => sortBy('salary')} className='btn'>
          {sortDirections.salary > 0 ? '^' : 'v'}
        </button>
      </Column>
    </Row>
  );
}

export default SortOptions;
