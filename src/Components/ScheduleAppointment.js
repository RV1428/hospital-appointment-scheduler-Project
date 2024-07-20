import React, { useState } from 'react';

const ScheduleAppointment = ({ addAppointment }) => {
  const [appointment, setAppointment] = useState({
    name: '',
    date: '',
    time: '',
    doctor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(appointment);
    setAppointment({
      name: '',
      date: '',
      time: '',
      doctor: '',
    });
  };

  return (
    <div className="container">
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={appointment.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={appointment.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" name="time" value={appointment.time} onChange={handleChange} required />
        </div>
        <div>
          <label>Doctor:</label>
          <input type="text" name="doctor" value={appointment.doctor} onChange={handleChange} required />
        </div>
        <div className="button-container">
          <button type="submit">Schedule</button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleAppointment;
