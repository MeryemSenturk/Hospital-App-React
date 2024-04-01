import "./App.css";
import Cardd from "./components/card/Card.jsx";
import Header from "./components/header/Header";
import { appointmentData, doctorData } from "./components/helper/data.js";
import AppointmentCard from "./components/appointments/AppointmentCard.jsx";
import { useState } from "react";


function App() {

  const [appointmentDatam, setAppointmentDatam]= useState(appointmentData)

  return (
    <div className="App">
      <Header />
      <div className="container py-4 d-flex align-items-center flex-wrap gap-4">
        {doctorData.map((doctor) => {
          return (
            <Cardd
              key={doctor.id}
              doctorName={doctor.name}
              doctorDep={doctor.dep}
              doctorImg={doctor.img}
              setApp={setAppointmentDatam}
              appoint={appointmentData}
            />
          );
        })}
      </div>

      <div className="container py-4 d-flex flex-column gap-4">
        <h2>APPOINTMENT LIST</h2>

        {appointmentDatam.map((item) => (
          <AppointmentCard
            key={item.id}
            doctorName={item.doctor}
            patientName={item.patient}
            day={item.day}
            consulted={item.consulted}
            setApp={setAppointmentDatam}
            appoint={appointmentData}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
