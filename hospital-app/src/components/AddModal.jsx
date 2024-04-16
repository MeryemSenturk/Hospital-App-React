<<<<<<< HEAD
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
=======

// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

>>>>>>> 7272b198fff57c00efdd17714c76423b8695b18b

function AddModal({showModal, handleClose}) {
//   const [showModal, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  return (
    <>
<<<<<<< HEAD

=======
>>>>>>> 7272b198fff57c00efdd17714c76423b8695b18b
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
<<<<<<< HEAD
  );
}

export default AddModal;
=======
  )
}

export default AddModal;
>>>>>>> 7272b198fff57c00efdd17714c76423b8695b18b
