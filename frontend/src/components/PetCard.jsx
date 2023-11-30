import { Card, Button, Modal, Image, Row, Col } from "react-bootstrap";
import { useState } from "react";
import PetModal from "./PetModal";

const PetCard = ({ pet }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          height={300}
          src={`http://localhost:3001/${pet.imgPath}`}
        />
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

      <PetModal
        show={showModal}
        onHide={() => setShowModal(false)}
        data={pet}
      />
    </>
  );
};

export default PetCard;
