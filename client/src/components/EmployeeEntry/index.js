import React from 'react';
import Column from '../Column';
import Row from '../Row';

import './employeeEntry.css';

function EmployeeEntry(props) {
  return (
    <Row className={props.row}>
      <Column width='3'>{props.name}</Column>
      <Column width='3'>{props.occupation}</Column>
      <Column width='3'>{props.department}</Column>
      <Column width='3'>{props.salary}</Column>
    </Row>
  );
}

export default EmployeeEntry;
