import React from 'react';

import EmployeeEntry from '../EmployeeEntry';
import SortOptions from '../SortOptions';

import Row from '../Row';
import Column from '../Column';

function EmployeeList(props) {
  return (
    <Row>
      <Column>
        <SortOptions setSortMethod={props.setSortMethod} />
        <hr />
        {props.employees.map((employee, i) => (
          <EmployeeEntry {...employee} key={i} row={i % 2 === 0 ? 'even' : 'odd'} />
        ))}
      </Column>
    </Row>
  );
}

export default EmployeeList;
