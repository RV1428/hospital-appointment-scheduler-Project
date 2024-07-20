import React, { useState } from 'react';

const formatTime = (time24) => {
  const [hour, minute] = time24.split(':');
  const hour24 = parseInt(hour, 10);
  const period = hour24 >= 12 ? 'PM' : 'AM';
  const hour12 = hour24 % 12 || 12;
  return `${hour12}:${minute} ${period}`;
};

const ViewAppointment = ({ appointments, deleteAppointment, editAppointment }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [appointmentToEdit, setAppointmentToEdit] = useState({
    name: '',
    date: '',
    time: '',
    doctor: '',
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setAppointmentToEdit({ ...appointmentToEdit, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editAppointment(isEditing, appointmentToEdit);
    setIsEditing(null);
  };

  return (
    <div>
      <h2>View Appointments</h2>
      <div className="appointment-list">
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <div className="appointment-item" key={index}>
              {isEditing === index ? (
                <form onSubmit={handleEditSubmit}>
                  <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={appointmentToEdit.name} onChange={handleEditChange} required />
                  </div>
                  <div>
                    <label>Date: </label>
                    <input type="date" name="date" value={appointmentToEdit.date} onChange={handleEditChange} required />
                  </div>
                  <div>
                    <label>Time: </label>
                    <input type="time" name="time" value={appointmentToEdit.time} onChange={handleEditChange} required />
                  </div>
                  <div>
                    <label>Doctor: </label>
                    <input type="text" name="doctor" value={appointmentToEdit.doctor} onChange={handleEditChange} required />
                  </div>
                  <button type="submit">Save</button>
                </form>
              ) : (
                <>
                  <p>{appointment.name}</p>
                  <p>{appointment.date}</p>
                  <p>{formatTime(appointment.time)}</p>
                  <p>{appointment.doctor}</p>
                  <button onClick={() => deleteAppointment(index)}>Delete</button>
                  <button onClick={() => {
                    setIsEditing(index);
                    setAppointmentToEdit(appointment);
                  }}>Edit</button>
                </>
              )}
            </div>
          ))
        ) : (
          <p>No appointments scheduled.</p>
        )}
      </div>
    </div>
  );
};

export default ViewAppointment;
