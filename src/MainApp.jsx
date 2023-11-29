import React, { useEffect, useState } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import "./MainApp.css";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";

const MainApp = () => {
  const [search, setSearch] = useState("");
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    async function fetchRobots() {
      try {
        const data = await fetch(url).then((res) => res.json());
        setRobots(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchRobots();
  }, []);

  function onSearchChange(event) {
    setSearch(event.target.value);
  }

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
      <ErrorBoundary>
        <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default MainApp;
