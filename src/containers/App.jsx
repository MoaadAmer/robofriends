import "./App.css";
import CardList from "../components/CardsList.jsx";
import SearchBox from "../components/SearchBox.jsx";
import { Component } from "react";
import Scroll from "../components/Scroll.jsx";

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
    const { robots, searchField } = this.state;
    const fileredRobots = robots.filter((r) => {
      return r.name.toLowerCase().startsWith(searchField.toLowerCase());
    });

    if (!robots) {
      return <p>Loading</p>;
    } else {
      return (
        <>
          <h1>Robofriends</h1>
          <SearchBox
            placeholder="Enter Robot Name"
            onChange={this.onSearchFieldChange}
          />
          <Scroll>
            <CardList robots={fileredRobots} />
          </Scroll>
        </>
      );
    }
  }
}

export default App;
