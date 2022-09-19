import React from 'react'
import style from './NoticePopup.module.css';
export default function NoticePopup({open, onClose, details}) {
  if(!open) return null;
  return (
    <div onClick={onClose} className={style.overlay}>
        <div onClick={(e)=> e.stopPropagation()} className={style.modelContainer}>
            <div className={style.Subject}></div>
            <div className={style.closebtn}>
            <p className={style.closeBtn} onClick={onClose}>X</p>
            </div>
            <div className={style.mainContentContainer}>
                <div className={style.instituteName}>Sant Longowal Institue of Engineering and Technology, Longowal, Sangrur, Punjab - 148106 IN</div>
                <div className={style.noticeHeading}>Notice</div>
                <div className={style.date}>Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {details[0].IssueDate}</div>
                <div className={style.refno}>Ref No&nbsp;&nbsp;&nbsp;&nbsp;: {details[0].RefNo}</div>
                <div className={style.subject}>Subject&nbsp;&nbsp;&nbsp;: {details[0].Subject}</div>
                <div className={style.body}>{details[0].Body}</div>
                <div className={style.issuerName}>Issuer Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {details[0].IssuerName}</div>
                <div className={style.issuerDesignation}>Designation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {details[0].IssuerDesignation}</div>
                <div className={style.lastModifiedOn}>Last Modified On : {details[0].LastModifiedOn}</div>
                <div className={style.postedBy}>Posted By &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {details[0].PostedBy}</div>                
                
            </div>
        </div>
    </div>
  )
}
