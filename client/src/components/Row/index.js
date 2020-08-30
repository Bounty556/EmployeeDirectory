import React from 'react';

function Row(props) {
  return <div className={props.gutters ? 'row no-gutters' : 'row'}>{props.children}</div>;
}

export default Row;