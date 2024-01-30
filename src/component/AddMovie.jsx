import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddMovie = () => {
  //----------------inputs --------------------
  const [first, setfirst] = useState(second);
  const [first, setfirst] = useState(second);
  const [first, setfirst] = useState(second);
  const [first, setfirst] = useState(second);

  //----------functions----------------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {" "}
      <Button variant="primary" onClick={handleShow}>
        <h6>Add Movie</h6>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie Informations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div>
              <label htmlFor="">Movie name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Movie image</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Movie date</label>
              <input type="date" />
            </div>
            <div>
              <label htmlFor="">Movie rating</label>
              <input type="text" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
