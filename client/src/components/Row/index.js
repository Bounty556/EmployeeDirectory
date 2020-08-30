import React from 'react';

function Row(props) {
  return <div className={props.gutters ? 'row no-gutters ' + props.className : 'row ' + props.className}>{props.children}</div>;
}

export default Row;