import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tododelete, update } from "../app/creactSclice";
import { useNavigate } from "react-router-dom";
import "./css/Todolist.css";
import { RiChatDeleteFill } from "react-icons/ri";
import { BiSolidCommentEdit } from "react-icons/bi";
import { CiBoxList } from "react-icons/ci";
import Button from "react-bootstrap/Button";
import { CiSaveUp1 } from "react-icons/ci";
import './css/Button.css'

const Todolist = () => {
  const tasks = useSelector((state) => state);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [listtask, setListed] = useState({ id: null, text: "" });
  const [edit, setEdit] = useState(null);

  const handleupdate = () => {
    dispatch(update({id:listtask.id, text:listtask.text}));
    setListed({})
    setEdit(null);
  };

  const handleInputChange = (e, taskId) => {
    setListed({ id: taskId, text: e.target.value });
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <section className="intro">
        <div className="bg-image h-100">
          <div className="mask d-flex align-items-center ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="card mask-custom">
                    <div className="card-body">
                      <div className="table-responsive table-container">
                        <table className="table table-borderless text-white mb-0">
                          <thead style={{ marginRight: "10px" }}>
                            <tr>
                              <th>
                                <CiBoxList style={{ fontSize: "20px" }} />
                              </th>
                              <th>Task-List</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tasks.map((task,index) => (
                              <tr key={task.id}>
                                <td style={{ color: "white" }}>{index+1}</td>
                                {task.id === edit ? (
                                  <>
                                    <td>
                                      <input
                                        type="text"
                                        id="input"
                                       
                                        onChange={(e) =>
                                          handleInputChange(e, task.id)
                                        }
                                      />
                                    </td>
                                    <td>
                                      <CiSaveUp1
                                        style={{
                                          fontWeight: 200,
                                          fontSize: "40px",
                                          color: "#747474",
                                        }}
                                        onClick={handleupdate}
                                      />
                                    </td>
                                  </>
                                ) : (
                                  <>
                                    <td style={{ color: "white" }}>
                                      {task.text}</td>
                                     <td> <RiChatDeleteFill
                                        style={{
                                          fontSize: "40px",
                                          color: "#747474",
                                        }}
                                        onClick={() =>
                                          dispatch(tododelete(task.id))
                                        }
                                      />
                                      <BiSolidCommentEdit
                                        style={{
                                          fontSize: "40px",
                                          color: "#747474",
                                        }}
                                        onClick={() => setEdit(task.id)}
                                      />
                                    </td>
                                  </>
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <br></br>
        <button onClick={()=>nav('/todo')} class="button-89" role="button"> ADD</button>
      </div>
    </div>
  );
};

export default Todolist;
