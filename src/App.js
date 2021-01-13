import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";
import Menu from './components/Menu'

class App extends Component {
  constructor(props) {
    super(props);

		const initialRow = 5;
    const initialCol = 5;
    const initialGrid = new Array(initialRow).fill(new Array(initialCol).fill("default"));

    this.state = {
      currentColor: "default",
      grid: initialGrid,
    }
  }

  handleAddRow = () => {
    const row = new Array(this.state.grid[0].length).fill(this.state.currentColor)
    this.setState({grid: [...this.state.grid, row],})
  };

  render() {
    return (
      <div className="App">
        <Menu onclick={this.handleAddRow}/>
        <header className="App-header">
          <button onClick={this.handleAddRow}>Add a row</button>
          {console.log(this.state.grid)}
          <Table
            grid={this.state.grid}
            x={this.state.grid.length}
            y={this.state.grid[0].length}
          />
        </header>
      </div>
    );
  }
}

export default App;
