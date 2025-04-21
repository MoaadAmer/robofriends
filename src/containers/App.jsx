import "./App.css";
import CardList from "../components/CardsList.jsx";
import SearchBox from "../components/SearchBox.jsx";
import { useState,useEffect } from "react";
import Scroll from "../components/Scroll.jsx";

export default function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  },[]);

  const fileredRobots = robots.filter((r) => {
    return r.name.toLowerCase().startsWith(searchfield.toLowerCase());
  });

  const render = () => {
    if (!robots) {
      return <p>Loading</p>;
    } else {
      return (
        <>
          <h1>Robofriends</h1>
          <SearchBox
            placeholder="Enter Robot Name"
            onChange={(e) => setSearchfield(e.target.value)}
          />
          <Scroll>
            <CardList robots={fileredRobots} />
          </Scroll>
        </>
      );
    }
  };
  return render();
}
