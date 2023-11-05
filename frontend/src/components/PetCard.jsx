import { Card, Button, Modal, Image, Row, Col } from "react-bootstrap";
import DefaultPetImg from "../assets/images/defaults/goku.png";
import { useState } from "react";
import DefaultCat from "../assets/images/defaults/default-cat.jpg";
import DefaultBird from "../assets/images/defaults/default-bird.jpg";
import DefaultDog from "../assets/images/defaults/default-dog.jpg";
import DefaultQuestionMark from "../assets/images/defaults/default-questionmark.jpg";
import ViewPetModal from "./ViewPetModal";

const PetCard = ({ pet }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <Card>
        {pet.species === "Cat" ? (
          <Card.Img variant="top" src={DefaultCat} />
        ) : pet.species === "Dog" ? (
          <Card.Img variant="top" src={DefaultDog} />
        ) : pet.species === "Bird" ? (
          <Card.Img variant="top" src={DefaultBird} />
        ) : (
          <Image src={DefaultQuestionMark} />
        )}
        <Card.Body>
          <Card.Title>{pet.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {pet.species}
          </Card.Subtitle>
          <hr />
          <Card.Text className="h6 fw-bold">
            Age: <span className="text-muted">{pet.age}</span>
          </Card.Text>
          <Card.Text className="h6 fw-bold">
            Gender: <span className="text-muted">{pet.gender}</span>
          </Card.Text>
          <Card.Text className="h6 fw-bold">
            Breed: <span className="text-muted">{pet.breed}</span>
          </Card.Text>
          <Card.Text className="h6 fw-bold">
            Adopted: <span className="text-muted">{pet.adopted}</span>
          </Card.Text>
          <Card.Text className="h6 fw-bold">
            Description: <br />{" "}
            <span className="text-muted">{pet.description}</span>
          </Card.Text>

          <hr />
          <div style={{ marginTop: "auto" }}>
            <Button variant="primary" onClick={handleShow}>
              View Details
            </Button>
          </div>
        </Card.Body>
      </Card>
      
      <ViewPetModal show={showModal} onHide={() => setShowModal(false)} data={pet} />

  
    </>
  );
};

export default PetCard;
