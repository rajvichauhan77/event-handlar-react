import React from "react";
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import List from "./List";



function Add({}){

    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])
    

    function handletask(){

        let obj = {
          task,
          status: false,
          id : uuidv4()
        }
    
        setTaskList([...taskList, obj])
        console.log(taskList) 
      }

      return(
        <>
            <div className="container border border-dark rounded-3 p-3">
            <input type="text" onChange={(e) => {setTask(e.target.value)}} className='bg-light p-2 border rounded border-dark text-dark'/>
            <button onClick={handletask} className='btn btn-sm  btn-dark m-1 p-2'>Add</button>  
            </div>

            <List list={taskList} setTasklist={setTaskList}/>
        </>
      )

}

export default Add