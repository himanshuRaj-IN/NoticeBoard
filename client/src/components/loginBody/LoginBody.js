import React from "react";
import style from './loginBody.module.css';
import LoginForm from "./LoginForm/LoginForm";
import Content from "./content/Content";
export default function LoginBody(){
    return(
        <div className={style.Login}>            
            <div className={style.left}> <LoginForm/></div>
            <div className={style.right}> <Content/></div>
          
          
        </div>
    )
}