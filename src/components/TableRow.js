import React from "react";
import TableCell from "./TableCell";

export default function TableRow(props) {
  const row = [];
  for (let i = 0; i < props.y; i++) {
    row.push(
      <TableCell
        grid={props.grid}
        x={props.x}
        y={i}
      />
    );
  }

  console.log("row: " + row);
  return <tr className="grid-row">{row}</tr>;
}
