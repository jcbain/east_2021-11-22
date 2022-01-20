import { useEffect, useState } from 'react';
import axios from 'axios';

const Appointments = () => {
  const [ appointments, setAppointments ] = useState({});
  const [ selectedAppointment, setSelectedAppointment ] = useState(null);
  const [ appointmentId, setAppointmentId ] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8001/api/appointments')
      .then((res) => {
        console.log(res.data);
        setAppointments(res.data)
      })
  }, [])

  useEffect(() => {
    const targetAppointment = appointments[appointmentId];
    console.log(targetAppointment)
    setSelectedAppointment(targetAppointment)

  }, [appointmentId, appointments])

  return (
    <section>
      <h1>Appointments</h1>
      <p>you have {Object.keys(appointments).length} appointments</p>
      <div>
        <p>the selected appointment id is {appointmentId}</p>
        <input 
          value={appointmentId}
          onChange={(event) => setAppointmentId(event.target.value)}
        />
      </div>
      {selectedAppointment && ( 
        <div>
          <h2>selected appointment</h2>
          <p>appointment id: {selectedAppointment.id} </p>
          <p>appointment time: {selectedAppointment.time} </p>

        </div>)
      }
    </section>
  )
};

export default Appointments;