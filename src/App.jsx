import "./App.css";
import { robots } from "./robots.js";
import CardList from "./CardsList.jsx";
import SearchBox from "./SearchBox.jsx";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
    };
  }

  onSearchFieldChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const fileredRobots = robots.filter((r) => {
      return r.name
        .toLowerCase()
        .startsWith(this.state.searchField.toLowerCase());
    });
    return (
      <>
        <h1>Robofriends</h1>
        <SearchBox
          placeholder="Enter Robot Name"
          onChange={this.onSearchFieldChange}
        />
        <div className="container">
          <CardList robots={fileredRobots} />
        </div>
      </>
    );
  }
}

export default App;
