import React from 'react';
import style from './Header.module.css';
export default function header() {
  return (
    <div>
         <div className={style.navbar}> 
        <div className={style.leftnav}>
          <h1>Notice Board</h1>
          <h2>Sant Longowal Institue of Engineering & Technology, Longowal</h2>
        </div>    
        <div className={style.rightnav}>
          <h5 id="indicator">Admin</h5>      
        </div> 
      </div>
    </div>
  )
}
