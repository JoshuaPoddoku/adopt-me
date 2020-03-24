import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet"; //grabbed by parcel

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setaAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location:
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal:
          <select
            id="animal"
            value={animal}
            onChange={(e) => setaAnimal(e.target.value)}
            onBlur={(e) => setaAnimal(e.target.value)}
          >
            <option value="">All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed:
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disabled={!breeds.length}
          >
            <option>All</option>
            {breeds.map((breedString) => {
              <option key={BreedString} value={breedString}>
                {breedString}
              </option>;
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
