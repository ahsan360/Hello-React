async function fetchBreedList({ queryKey }) {
  console.log(`query key ${queryKey}`);
  const animal = queryKey[1]; // dog
  console.log(animal);
  if (!animal) return [];

  const res = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!res.ok) {
    throw new Error(`breeds ${animal} fetch not ok`);
  }

  return res.json();
}

export default fetchBreedList;
