import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";
import style from './LoginForm.module.css'
export default function LoginForm() {
    const [userId, setUserId] = useState("");
    const [password,setPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const inputEvent1 = (event)=>{
        setUserId(event.target.value);
    };
    const inputEvent2 = (event)=>{
            setPassword(event.target.value);
    };

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
    <div className={style.error}>{errorMessages.message}</div>
  );

    const navigate = useNavigate();
    const formSubmit = (event)=>{
    getToken();
    event.preventDefault()
}; 

   const parseCookie = str =>
   str
   .split(';')
   .map(v => v.split('='))
   .reduce((acc, v) => {
     acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
     return acc;
   }, {});

function getToken(){
    fetch('http://localhost:5000/api/admin/login',{
        method: "POST",
        body: JSON.stringify({
            UserId : `${userId}`,
            Password: `${password}`,
            DSign: ""
        }),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => {
        return response.json();
    })
    .then((data) =>  {
        document.cookie =`access_token=${data.accessToken}`;
        const c = parseCookie(document.cookie);
        if(c.access_token !== 'undefined'){
            navigate('/Admin');           
        }else{
            alert("Either UserName or Password is incorrect");
        }

    }
    )
}
    return (
        <div className={style.formdiv}>
             <div className={style.signIn}>
                Admin Sign In
            </div>
            <div className="form">
            <form onSubmit={formSubmit}>
                <label className={style.username}>Username </label><br/>
                <input className={style.inputbox} type="text" name="uname" required  onChange={inputEvent1} value={userId}/><br/>
                {renderErrorMessage("uname")}      
                <label className={style.username2}>Password </label><br/>
                <input className={style.inputbox2}type="password" name="pass" required   onChange={inputEvent2} value={password}/><br/>
                {renderErrorMessage("pass")}
                <input className={style.inputSubmit}type="submit" />
            </form>
        </div>
        </div>
    )    
}