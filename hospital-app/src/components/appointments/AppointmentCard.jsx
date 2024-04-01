import React from "react";
import { Card, ListGroup } from "react-boostrap";

const Appointment = (props) => {
  const time = `${props.day.getHours()}:${props.day.getMinutes()}:${props.day.getSeconds()}`;
  console.log(props);

  const { setApp, appoint } = props;
  const handleDelete = (id) => {
    setApp(
      appoint.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const handleDoubleClick = (id) => {
    setApp(
      appoint.map((item) => {
        return item.id == id ? { ...item, consulted: !item.consulted } : item;
      })
    );
  };

  return (
    <Card className="my-2" style={{ width: "18rem" }}>
      <div
        className={props.consulted ? `appointment consulted` : `appointment`}
        onDoubleClick={() => handleDoubleClick(props.id)}
      ></div>

      <ListGroup
        className="d-flex flex-row justify-content-between align-items-center"
        variant="flush"
      >
        <ListGroup.Item>
          <h3 className="text-danger">{props.patient.Name}</h3>
          <h4>{props.doctorName}</h4>
        </ListGroup.Item>

        <ListGroup.Item>
          <p>Date: {props.day.toDate.String()}</p>
          <p>Time: {time}</p>
        </ListGroup.Item>

        <ListGroup.Item
          onClick={() => handleDelete(props.id)}
          className="p-2 bg-dark rounded-circle me-3 opacity-75"
        >
          ❌
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Appointment;
