import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/schedule">Schedule Appointment</Link></li>
        <li><Link to="/view">View Appointments</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;