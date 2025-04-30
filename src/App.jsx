import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import { v4 as uuidv4 } from 'uuid';


function App() {

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

  function updateTask(id){
    const update = taskList.map((ele) => ele.id === id ? {...ele, status: !ele.status} : ele)
    setTaskList(update)
    }
    
    function delTask(id)
    {
      const deleData = taskList.filter((ele) => ele.id != id)
      setTaskList(deleData)
    }
    
    

  return (
    <>

     <div className="container border border-dark rounded-3 p-3">

        <input type="text" onChange={(e) => {setTask(e.target.value)}} className='bg-light p-2 border rounded border-dark text-dark'/>
        <button onClick={handletask} className='btn btn-sm  btn-dark m-1 p-2'>Add</button>  


    <div className="container border mt-5">
        
    {
        taskList?.map((ele) => (
          <div className={ele.status ? "row bg-success-subtle" : "row bg-danger-subtle"} key={ele.id}>
            <div className="col">{ele.task}</div>
            <div className="col"><button className="btn btn-outline-secondary mb-1" onClick={() => updateTask(ele.id)}>{ele.status ? "completed" : "not completed"}</button></div>
            <div className="col"><button className='btn btn-outline-danger mb-1' onClick={() => delTask(ele.id)}>Delete</button></div>
          </div>
        ))
      }
    </div>

    </div> 
    
    {/* <Add /> */}
    
    </>
  )
}

export default App
