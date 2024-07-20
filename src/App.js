import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ScheduleAppointment from './Components/ScheduleAppointment';
import ViewAppointment from './Components/ViewAppointment';
import './App.css';

const App = () => {
  const [appointments, setAppointments] = useState(() => {
    const savedAppointments = localStorage.getItem('appointments');
    return savedAppointments ? JSON.parse(savedAppointments) : [];
  });

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const deleteAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  const editAppointment = (index, updatedAppointment) => {
    const updatedAppointments = appointments.map((appointment, i) => 
      i === index ? updatedAppointment : appointment
    );
    setAppointments(updatedAppointments);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<ScheduleAppointment addAppointment={addAppointment} />} />
          <Route path="/view" element={<ViewAppointment appointments={appointments} deleteAppointment={deleteAppointment} editAppointment={editAppointment} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
