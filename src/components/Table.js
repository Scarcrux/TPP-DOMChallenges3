import React from "react";
import TableRow from "./TableRow";

function Table(props) {
  const cells = [];
  for (let i = 0; i < props.rows; i++) {
    cells.push(
      <TableRow
        cols={props.cols}
        grid={props.grid}
        handleClick={props.handleClick}
        handleMouseEnter={props.handleMouseEnter}
        handleMouseDown={props.handleMouseDown}
        handleMouseUp={props.handleMouseUp}
        row={i}
      />
    );
  }
  return <table id="grid"><tbody>{cells}</tbody></table>;
}

export default Table;
