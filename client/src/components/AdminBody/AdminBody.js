import React from 'react'
import { useState } from 'react';
import style from './AdminBody.module.css';
import NoticeLayout from './NoticeLayout/NoticeLayout';
export default function AdminBody() {
  const [openMOdel, SetOpenModel] = useState(false);
  const addNotice = ()=>{
    console.log("Adding Notices");
    SetOpenModel(true);
  }
  if(openMOdel){
    return(
      <NoticeLayout open={openMOdel} onClose={() =>SetOpenModel(false)}/>
    )
  }
  return (
    <>
     <div className={style.adminBody}>
        <NoticeLayout open={openMOdel} onClose={() =>SetOpenModel(false)}/>
        <button onClick={addNotice} className={style.button}>Add Notice </button>
        <button className={style.button}>Edit Notice </button>
        <button className={style.button}>Delete Notice </button>
    </div>
    </>
  )
}
