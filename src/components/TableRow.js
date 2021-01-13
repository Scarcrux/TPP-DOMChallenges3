import React from "react";
import TableCell from "./TableCell";

export default function TableRow(props) {
  const row = [];
  for (let i = 0; i < props.cols; i++) {
    row.push(
      <TableCell
        grid={props.grid}
        handleClick={props.handleClick}
        handleMouseEnter={props.handleMouseEnter}
        handleMouseDown={props.handleMouseDown}
        handleMouseUp={props.handleMouseUp}
        x={props.row}
        y={i}
      />
    );
  }
  return <tr className="grid-row">{row}</tr>;
}
