import React, { useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap";

const DoctorModal = (props) => {

    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

    const [name, setName] = useState("")

    const {setApp, appoint} = props

    const handleSubmit = (e) => {
        e.preventDefault()
        setApp([
          ...appoint,
          {
            id: new Date().getTime(),
            patient: name,
            day: new Date(date),
            consulted: false,
            doctor: props.doctorName,
          },
        ]);
        props.setModalShow(false)
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Appointment for {props.doctorName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" />
           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Day&Time</Form.Label>
            <Form.Control type="date" value={date} onChange={(e)=> setDate(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        Collapse
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DoctorModal