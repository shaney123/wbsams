import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button, Row, Col, Card, Image } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { toast } from "react-toastify";
import PetModal from "../components/PetModal";
import PetCard from "../components/PetCard";
import { BsFillHeartFill } from "react-icons/bs";

const ViewPetsScreen = () => {
  // authenticated user
  const { userInfo } = useSelector((state) => state.auth);
  // auth user token
  const token = userInfo.token;

  // modal state (open/close)
  const [petModalShow, setPetModalShow] = useState(false);
  // select pet state
  const [selectedPet, setSelectedPet] = useState(null);

  //! FETCH PETS
  const [pets, setPets] = useState([]);
  const getPets = async () => {
    try {
      const petUrl = "http://localhost:3001/api/pet";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(petUrl, { headers });
      if (response) {
        const petArray = response.data.pets;
        const updatedPets = petArray
          .filter((pet) => {
            return !pet.isAdopted;
          })
          .map((pet) => {
            return {
              ...pet,
              imgPath: `http://localhost:3001/${pet.imgPath}`,
            };
          });

        // Update the state with all petDetails objects after the map loop
        setPets([...pets, ...updatedPets]);

        return response;
      }
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  useEffect(() => {
    getPets();
  }, []);

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <Card className="p-3 d-flex hero-card bg-light w-100">
          <Card.Header className="d-flex justify-content-center">
            <h4 className="fw-bold">Adopt a Pet</h4>
            <BsFillHeartFill className="ms-2" size={25} />
          </Card.Header>
          <Card.Body>
            <Row>
              <div
                className="horizontal-scroll-container"
                style={{ maxWidth: "100%", overflowX: "auto" }}
              >
                <Row className="flex-nowrap">
                  {pets.map((pet, index) => (
                    <Col sm={5} key={index} className="pr-2">
                      <PetCard data={pet} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </div>

      <PetModal
        show={petModalShow}
        onHide={() => setPetModalShow(false)}
        data={selectedPet || null}
      />
    </>
  );
};

export default ViewPetsScreen;
