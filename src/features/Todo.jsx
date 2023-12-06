import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../app/creactSclice";
import { useNavigate } from "react-router-dom";
import "./css/Todo.css";
import './css/Button.css'

const Todo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  const handelsubmit = () => {
    if(task===""){
      alert("invalid Task")
    }
    else{
      dispatch(add(task));
    navigate("/todolist");
    }
    
  };
  
  return (
    <div className="container" style={{ paddingTop: "50px" }}>
      <div className="glass">
        <h1 style={{ color: "white" }}>Add Task</h1>
        <div className="input-group mb-3">
          <input type="text" className="form-control" required onChange={(e) => setTask(e.target.value)} />
          <button className="btn btn-primary" onClick={handelsubmit}>ADD TO TASK LIST</button>
        </div>
        <br />
        <br />
        <div className="d-grid gap-2">
          <button className="btn btn-secondary" onClick={() => navigate("/todolist")}>List</button>
        </div>
        {/* <div>
          <p style={{ color:"white", fontSize:"30px" }}>
            “A man's worth is no greater than the worth of his ambitions.” - Marcus Aurelius
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Todo;
