import React from "react";

export default function TableCell(props) {
  const color = props.grid[props.x][props.y];
  return (
    <td className={"grid-cell " + color}
      onClick={() => props.handleClick(props.x, props.y)}
      onMouseEnter={() => props.handleMouseEnter(props.x, props.y)}
      onMouseDown={() => props.handleMouseDown(props.x, props.y)}
      onMouseUp={props.handleMouseUp}
    >
    </td>
  );
}
