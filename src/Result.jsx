import Pet from "./Pet";
const Result = (props) => {
  const {pets} = props
  return (
    <div className="search">
       {
        console.log(pets)
      }
      {!pets.length ? (
        <h1>Pets Not found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city},${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};
export default Result;
