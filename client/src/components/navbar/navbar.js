import React from "react";
import style from './navbar.module.css';
import { Link } from 'react-router-dom'
import adminIcon from '../../resources/icons/adminIcon.png';

export default function Navbar() {
    return (
      <div className={style.navbar}> 
        <div className={style.leftnav}>
          <Link to="/Home" style={{ textDecoration: 'none' }} ><h1>Notice Board</h1></Link>
          <h2>Sant Longowal Institue of Engineering & Technology, Longowal</h2>
        </div>    
        <div className={style.rightnav}>
          <img src={adminIcon} alt="Admin" />
          <Link to="/Login" style={{ textDecoration: 'none' }} ><h5 id="indicator">Admin</h5></Link> 
         
        </div> 
      </div>
    );
  }