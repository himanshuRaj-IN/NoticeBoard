import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './NoticeLayout.module.css';
export default function NoticeLayout({open, onClose}) {

    const [date,setDate] = useState('');
    const [refno, setRefno] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [issuerName,setIssuerName] = useState('');
    const [designation, setDesignation] = useState('');
    const [postedby, setPostedby] = useState('');
    const [tags, setTags] = useState('');
    
    const inputEvent1 = (event)=>{
        setDate(event.target.value);
    };
    const inputEvent2 = (event)=>{
        setRefno(event.target.value);
    };
    const inputEvent3 = (event)=>{
        setSubject(event.target.value);
    };
    const inputEvent4 = (event)=>{
        setBody(event.target.value);
    };
    const inputEvent5 = (event)=>{
        setIssuerName(event.target.value);
    };
    const inputEvent6 = (event)=>{
        setDesignation(event.target.value);
    };
    const inputEvent7 = (event)=>{
        setPostedby(event.target.value);
    };
    const inputEvent8 = (event)=>{
        setTags(event.target.value);
    };

    const parseCookie = str =>
    str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
 
    const navigate = useNavigate();
    function addNotice(){
        fetch('http://localhost:5000/api/admin/addNotice',{
            mode:'no-cors',
            method: "POST",
            body: {createFormJson},
    
            headers: {
                'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjMyMjY3MDMsImV4cCI6MTY2MzIyODUwMywiYXVkIjoibm90aWNlLWVlIiwiaXNzIjoiSGltYW5zaHUuY29tIn0.jISfmeh_4wO8DEc6k8hWF96Wcb8hLgOffwclSFFKOLY`, 
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) =>  {
            console.log(data);
    
        }
        )
    }

    const formSubmit = (event)=>{
            // const c = parseCookie(document.cookie);
            // console.log(c);
            addNotice();
            console.log("submitting form");
            event.preventDefault();
        }; 
    
    const createFormJson = ()=>JSON.stringify({
        RefNo: `${refno}`,
        IssueDate: `${new Date(date).toUTCString()}`,
        Subject: `${subject}`,
        Tags: `${tags.split(' ')}`,
        Body: `${body}`,
        IssuerName: `${issuerName}`,
        IssuerDesignation: `${designation}`,
        LastModifiedOn: `${new Date().toUTCString()}`,
        PostedBy: `${postedby}`,
    });


// From here jsx return codes_____________________________
  if(!open) return null;
  return (
    <div className={style.overlay}>
         
         <div className={style.modelContainer}> 
         <div className={style.closebtn}>
            <p className={style.closeBtn} onClick={onClose}>X</p>
            </div>
        <form onSubmit={formSubmit}>
            <label>Date</label>
            <input required type="text" value={date} onChange={inputEvent1} ></input><br/>
            <label>RefNo</label>
            <input required type="text" value={refno} onChange={inputEvent2} ></input><br/>
            <label>Subject</label>
            <input required type="text" value={subject} onChange={inputEvent3} ></input><br/>
            <label>Body</label><br/>
            <input  type="text" value={body} onChange={inputEvent4} ></input><br/>
            <label>Issuer Name</label>
            <input required type="text" value={issuerName} onChange={inputEvent5} ></input><br/> 
            <label>Designation</label>
            <input required type="text" value={designation} onChange={inputEvent6} ></input><br/>
            <label>Posted By</label>
            <input type="text" value={postedby} onChange={inputEvent7} ></input><br/>
            <label>Tags</label>
            <input type="text" value={tags} onChange={inputEvent8} ></input><br/>
            <input type="submit" value="Submit"></input>
        </form>
        </div>
    </div>
  )
}
