import React, { useState } from 'react'
import {Card} from "react-boostrap"
import "./Card.css"
import DoctorModal from '../modal/DoctorModal'


const Cardd = (props) => {

    const [modalShow, setModalShow] = React.useState(false)

    const img = props.doctorImg
    const name = props.doctorName
    const dep = props.doctorDep

   return (
     <>
       <Card style={{ width: "300px", height: "300px" }} onclick={() => setModalShow(true)}>
         <Card.Img src={img} className="card-img-top"/>
         <Card.Body>
           <Card.Title className="card-title">{name}</Card.Title>
           <Card.Text className="list-group-flush">
             {dep}
           </Card.Text>
         </Card.Body>
       </Card>

       <DoctorModal
       show={modalShow}
       onHide={()=> setModalShow(false)}
       doctorName={name}
       setApp={props.setApp}
       appoint={props.appoint}
       setModalShow={setModalShow}
       />
     </>
   );
}

export default Cardd
