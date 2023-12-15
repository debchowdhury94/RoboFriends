import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./MainApp.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

import { setSearchField, requestRobots } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobotsReducer.searchField,
    robots: state.requestRobotsReducer.robots,
    isPending: state.requestRobotsReducer.isPending,
    error: state.requestRobotsReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

const MainApp = (props) => {
  // while using react we do below, now we are using redux
  // const [search, setSearch] = useState("");
  //const [robots, setRobots] = useState([]);
  const { searchField, onSearchChange, robots, isPending } = props;

  // the bolw code is used when we are not implementing redux
  // useEffect(() => {
  //   const url = "https://jsonplaceholder.typicode.com/users";

  //   async function fetchRobots() {
  //     try {
  //       const data = await fetch(url).then((res) => res.json());
  //       setRobots(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchRobots();
  // }, []);

  //this is while using react, but now we use redux store
  // function onSearchChange(event) {
  //   setSearch(event.target.value);
  // }


  useEffect(() => {
    props.onRequestRobots();
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1>Loading....</h1>
  ) : (
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

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
