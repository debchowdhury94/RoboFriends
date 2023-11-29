import React from "react";
import Card from "./Card";

export default function CardList(props) {
  const { robots } = props;

  return (
    <React.Fragment>
      {robots.map((robot) => {
        return <Card id={robot.id} name={robot.name} email={robot.email} />;
      })}
    </React.Fragment>
  );
}
