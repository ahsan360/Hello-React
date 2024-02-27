import { useQuery } from "@tanstack/react-query";

const fetchPets = async ({ queryKey }) => {
  const [_, queryParams] = queryKey;
  const { animal, location, breed } = queryParams;

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
