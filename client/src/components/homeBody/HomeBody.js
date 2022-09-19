import React, {useState, useEffect} from "react";
import style from './HomeBody.module.css';
import Notice from '../Notice/Notice';

export default function HomeBody(){

    const [tags, setTags] = useState('');
    const [type, setType] = useState('orTags');
    const[notices, setNotices] = useState([]);

    const inputEvent1 = (event)=>{
            setTags(event.target.value);
        };
    const inputEvent2 = (event)=>{
            setType(event.target.value);
        };
    const formSubmit = (event)=>{

        // Routing url building Start from here
        let url = '/api/notice'
        if(type === 'orTags' && tags !== ''){
            url = `http://localhost:5000/api/noticesOrTags?Tags=${tags}`;
        }else if(type === 'andTags' && tags !== ''){
            url = `http://localhost:5000/api/noticesAndTags?Tags=${tags}`;
        }else if(type === 'RefNo' && tags !== ''){
            url = `http://localhost:5000/api/noticeSearch?RefNo=${tags}`;
        }else if(type === 'PostedBy'){
        }
   
        loadNotices(url);
        event.preventDefault()
    };  
    function loadNotices(url){
        fetch( url)
        .then((response) => {
            return response.json();
        })
        .then((data) =>  {
            let arrData = data.Notices
            setNotices(arrData);
        }
        )
    }
    useEffect(()=>{
        loadNotices('/api/notice');
    },[])
    const recent =()=>{
        loadNotices('/api/notice');
    };
    return(
        <div className={style.HomeBody}>
           <div className={style.searchBar}>
            
           <form onSubmit={formSubmit}>
                <button onClick={recent} className={style.formButton}>Recent</button>               
                <select value={type} onChange={inputEvent2}>
                    <option value="orTags">Or Tags</option>
                    <option value="andTags">And Tags</option>                   
                    <option value="RefNo">RefNo</option>
                    <option value="PostedBy">PostedBy</option>
                </select> 
                <input type="text" className={style.inputText} placeholder="Tags...."onChange={inputEvent1}value={tags}></input>
                <input type="submit" className={style.inputSubmit}value="Find"></input>
            </form>
           </div>
           <Notice notices={notices}/>
        </div>
    )
}