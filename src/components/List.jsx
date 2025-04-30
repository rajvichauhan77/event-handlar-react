import React from "react";

const List = ({list, setTasklist}) => {

    function updateTask(id){
        const update = list.map((ele) => ele.id === id ? {...ele, status: !ele.status} : ele)
        setTasklist(update)
    }

    function delTask(id){
        const detData = list.filter((ele) =>ele.id != id)
        setTasklist(detData)
    }

    return(

        <>
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
        </>

    )

}

export default List