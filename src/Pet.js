import React from "react";
// your code is going to go here, for now
const Pet = ({ name, animal, breed }) => {
  // return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h2", {}, animal),
  //     React.createElement("h3", {}, breed),
  // ]);
  return (
    <div>
      <h1>{name.toUpperCase()}</h1>
      <h2>{animal}</h2>
      <h3>{breed}</h3>
    </div>
  );
};

export default Pet;
