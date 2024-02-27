import React, { useEffect, useState } from "react";
import Result from "./Result";
import { useQuery } from "@tanstack/react-query";
import fetchPets from "./RequestPets";
import useBreedList from "./UseBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParam] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, updateAnimal] = useState("");
  const [location, updateLocation] = useState("");

  const [breeds, updateBreed] = useBreedList(animal);
  console.log("breeds:", breeds);
  const results = useQuery(["search", requestParams], fetchPets);

  const pets = results?.data?.pets ?? [];
  console.log("pets:", pets);
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParam(obj);

          {
            //console.log(obj)
          }
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              updateAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select id="breed" disabled={breeds.length === 0} name="breed">
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>

      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
