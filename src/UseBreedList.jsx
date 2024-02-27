import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./FetchBreedlist";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  // console.log(`result-> useBreedList : ${results.data}`);

  return [results?.data?.breeds ?? [], results.status];
}
