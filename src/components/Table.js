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
        row={i}
      />
    );
  }
  console.log("cells: " + cells)
  return <table id="grid"><tbody>{cells}</tbody></table>;
}

export default Table;
