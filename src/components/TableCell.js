import React from "react";

export default function TableCell(props) {
  const color = props.grid[props.x][props.y];
  return (
    <td className={"grid-cell " + color} >
    </td>
  );
}
