import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Chuchu",
  //     animal: "Bird",
  //     breed: "Chuchuballs",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Doink",
  //     animal: "Cat",
  //     breed: "Mixed",
  //   }),
  // ]);
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <SearchParams />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
