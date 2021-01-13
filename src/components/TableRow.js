import React from "react";
import TableCell from "./TableCell";

export default function TableRow(props) {
  const row = [];
  for (let i = 0; i < props.cols; i++) {
    row.push(
      <TableCell
        grid={props.grid}
        handleClick={props.handleClick}
        x={props.row}
        y={i}
      />
    );
  }

  console.log("row: " + row);
  return <tr className="grid-row">{row}</tr>;
}
