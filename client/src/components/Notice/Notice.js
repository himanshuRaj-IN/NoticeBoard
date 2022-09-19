import style from './Notice.module.css';
import {useState} from 'react';
import NoticePopup from '../NoticePopup/NoticePopup';
function Notice({notices}){ 

    const [details, setDetails] = useState([]);
    const [openMOdel, SetOpenModel] = useState(false);

    const showDetails = (event)=>{      
        let   url = `/api/notice/Search?RefNo=${event.target.value}`;
        loadNotices(url);
        if(details.length !== 0){SetOpenModel(true);  }  
        // console.log(details);
    };

    function loadNotices(url){
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) =>  {
            let arrData = data.Notices
            setDetails(arrData);
        }
        )
    }
    return <div className={style.noticeBox}>
        <NoticePopup open={openMOdel} onClose={() =>SetOpenModel(false)} details={details}/>
        {notices.map(notices =>
            <div key={notices._id} className={style.noticeTemp}>
                <div className={style.date}>&nbsp;{notices.IssueDate.substring(0,10)}&nbsp;</div>             
                <div className={style.subject}> {notices.Subject}&nbsp;&nbsp;&nbsp;
                <button className={style.more} onClick={showDetails} value={notices.RefNo}> &nbsp; &#8594; &nbsp;</button>
                </div>        
                <div className={style.postedBy}>&nbsp;{notices.PostedBy}&nbsp;</div>
                                       
            </div>
        )} 
    </div>

}

export default Notice;