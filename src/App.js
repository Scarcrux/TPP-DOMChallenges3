import React, { Component } from "react";
import "./App.css";
import { Menu, Table } from "./components";

class App extends Component {
  constructor(props) {
    super(props);

    const initialRow = 5;
    const initialCol = 5;
    const initialGrid = [];
    for (let i = 0; i < initialRow; i++) {
      initialGrid.push(new Array(initialCol).fill("default"));
    }

    this.state = {
      coloring: false,
      currentColor: "default",
      grid: initialGrid,
    }
  }

  handleAddColumn = () => {
    const grid = this.state.grid.map(row => row.concat(this.state.currentColor));
    this.setState({grid: grid});
  };

  handleAddRow = () => {
    if (this.state.grid.length === 0) {
      this.setState({grid: [[this.state.currentColor]]});
    } else {
      const row = new Array(this.state.grid[0].length).fill(this.state.currentColor);
      this.setState({grid: [...this.state.grid, row]});
    }
  };

  handleClearAll = () => {
    const grid = this.state.grid.map(row =>
      row.map(() => "default")
    );
    this.setState({grid: grid});
  };

  handleClick = (x, y) => {
    const grid = this.state.grid;
    grid[x][y] = this.state.currentColor;
    this.setState({grid: grid});
  };

  handleColorChange = (e) => {
    this.setState({currentColor: e});
  };

  handleFillAll = () => {
    const grid = this.state.grid.map(row =>
      row.map(() => this.state.currentColor)
    );
    this.setState({grid: grid});
  };

  handleFillUncolored = () => {
    const { currentColor } = this.state;
    const grid = this.state.grid;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === "default") {
          grid[i][j] = currentColor;
        }
      }
    }
    this.setState({grid: grid});
  }

  handleMouseDown = (x, y) => {
    const grid = this.state.grid;
    grid[x][y] = this.state.currentColor;
    this.setState({coloring: true, grid: grid});
  }

  handleMouseUp = () => {
    this.setState({coloring: false});
  }

  handleMouseEnter = (x, y) => {
    if (this.state.coloring) {
      const grid = this.state.grid;
      grid[x][y] = this.state.currentColor;
      this.setState({grid: grid});
    }
  }

  handleRemoveColumn = () => {
      const grid = this.state.grid.map(row => row.slice(0, -1));
      this.setState({grid: grid});
  }

  handleRemoveRow = () => {
      const grid = this.state.grid.slice(0, -1);
      this.setState({grid: grid});
  }

  render() {
    return (
      <div className="App">
        <Menu
          handleAddColumn={this.handleAddColumn}
          handleAddRow={this.handleAddRow}
          handleClearAll={this.handleClearAll}
          handleColorChange={this.handleColorChange}
          handleFillAll={this.handleFillAll}
          handleFillUncolored={this.handleFillUncolored}
          handleRemoveColumn={this.handleRemoveColumn}
          handleRemoveRow={this.handleRemoveRow}
        />
        <header className="App-header">
          <Table
            grid={this.state.grid}
            handleClick={this.handleClick}
            handleMouseEnter={this.handleMouseEnter}
            handleMouseDown={this.handleMouseDown}
            handleMouseUp={this.handleMouseUp}
            rows={this.state.grid ? this.state.grid.length : 0}
            cols={this.state.grid.length ? this.state.grid[0].length : 0}
          />
        </header>
      </div>
    );
  }
}

export default App;
