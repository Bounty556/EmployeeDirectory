import React from 'react';

function Column(props) {
  return <div className={props.width ? 'col-' + props.width : 'col'}>{props.children}</div>;
}

export default Column;
