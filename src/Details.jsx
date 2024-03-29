import { useQuery } from "@tanstack/react-query";
import { useEffect, useState ,useContext} from "react";
import { json, useParams,useNavigate } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate()
  const [_,setAdoptedPet] = useContext(AdoptedPetContext)
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader"> </h2>
      </div>
    );
  }
  const pet = results.data.pets[0];
  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} — {pet.breed} — {pet.city}, {pet.state}
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1> Would you like to adopet {pet.name}</h1>
                <div className="buttons">
                  <button  onClick={()=>{
                    setAdoptedPet(pet)
                    navigate('/')
                  }}>Yes</button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </h2>
      </div>
      <h1>Ahsan</h1>
    </div>
  );
};

export default Details;
