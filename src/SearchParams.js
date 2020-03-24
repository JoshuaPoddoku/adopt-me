import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet"; //grabbed by parcel
import useDropdown from "./useDropdown";
const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, animalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, breedDropdown] = useDropdown("Breed", "", breeds);
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
        <animalDropdown />
        <breedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
