import React from "react";
import { useNavigate } from "react-router-dom";
import './css/Button.css'


const Main = () => {
  const nav = useNavigate();
  return (
   
      <div className="container bg-dark" >
        <div style={{paddingTop:"200px"}} className="btn">
        <button style={{color:"white"}} onClick={()=>nav('/todo')} class="button-89" role="button"> ADD</button>
        <button style={{color:"white"}} onClick={()=>nav('/todolist')} class="button-89" role="button"> LIST</button>
        </div>
        
      </div>
    
  );
};

export default Main;
