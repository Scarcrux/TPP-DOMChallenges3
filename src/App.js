import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";
import Menu from './components/Menu'

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

  handleClick = (x, y) => {
    const grid = this.state.grid;
    grid[x][y] = this.state.currentColor;
    console.log("new array x y: " + grid[x][y]);
    console.log("x, y: " + x + ", ", y);
    console.log("new grid: " + grid);
    this.setState({grid: grid});
  };

  handleColorChange = (e) => {
    this.setState({currentColor: e});
    console.log("color change event: " + this.state.currentColor);
  };

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
          handleColorChange={this.handleColorChange}
          handleRemoveColumn={this.handleRemoveColumn}
          handleRemoveRow={this.handleRemoveRow}
        />
        <header className="App-header">
          <button onClick={this.handleAddRow}>Add a row</button>
          <button onClick={this.handleAddColumn}>Add a column</button>
          <button onClick={this.handleRemoveRow}>Remove a row</button>
          <button onClick={this.handleRemoveColumn}>Remove a column</button>
          {console.log(this.state.grid)}
          <Table
            grid={this.state.grid}
            handleClick={this.handleClick}
            rows={this.state.grid ? this.state.grid.length : 0}
            cols={this.state.grid.length ? this.state.grid[0].length : 0}
          />
        </header>
      </div>
    );
  }
}

export default App;
