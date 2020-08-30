import React from 'react';

function Column(props) {
  return (
    <div
      className={
        props.width ? 'col-' + props.width + ' ' + props.className : 'col ' + props.className
      }
    >
      {props.children}
    </div>
  );
}

export default Column;
