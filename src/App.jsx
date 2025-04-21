import "./App.css";
import CardList from "./CardsList.jsx";
import SearchBox from "./SearchBox.jsx";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((jsonArray) => this.setState({ robots: jsonArray }));
  }

  onSearchFieldChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    if (this.state.robots.length === 0) {
      return <p>Loading</p>;
    } else {
      const fileredRobots = this.state.robots.filter((r) => {
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
}

export default App;
