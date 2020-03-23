   // your code is going to go here, for now
   const Pet = ({ name, animal, breed }) => {
       return React.createElement("div", {}, [
           React.createElement("h1", {}, name),
           React.createElement("h2", {}, animal),
           React.createElement("h3", {}, breed)
       ]);
   }
   
   
   
   const App = () => {
    return React.createElement(
        "div",
        {  id: "something-important" },
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet,
                 {  name: "Luna",
                    animal: "Dog",
                    breed:"havanese"
                }),
            React.createElement(Pet, {
                name: "Chuchu",
                animal: "Bird", 
                breed:"Chuchuballs"
            }),
            React.createElement(Pet, {
                name: "Doink",
                animal: "Cat",
                breed:"Mixed"
            })
        ]
       
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);