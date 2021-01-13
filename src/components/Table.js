import React from "react";
import TableRow from "./TableRow";

function Table(props) {
  const cells = [];
  for (let i = 0; i < props.x; i++) {
    cells.push(
      <TableRow
        grid={props.grid}
        x={i}
        y={props.y}
      />
    );
  }
  console.log("cells: " + cells)
  return <table id="grid"><tbody>{cells}</tbody></table>;
}

export default Table;
