import React, { useState } from "react";
import CardList from "./components/CardList";
import { robots } from "./robots";
import SearchBox from "./components/SearchBox";
import "./MainApp.css"

const MainApp = () => {
  const [search, setSearch] = useState("");

  function onSearchChange(event) {
    setSearch(event.target.value);
  }

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchField={search} searchChange={onSearchChange} />
      <br />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default MainApp;
