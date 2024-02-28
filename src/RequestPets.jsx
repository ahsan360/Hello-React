import { useQuery } from "@tanstack/react-query";

const fetchPets = async ({ queryKey }) => {
  const { location, animal, breed } = queryKey[1];
  const apiRes = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!apiRes.ok) {
    throw new Error(`Details fetch not ok`);
  }

  const result = await apiRes.json();
  return result;
};

export default fetchPets;
