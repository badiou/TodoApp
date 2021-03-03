import React from 'react'
import ToDo from './ToDo'

const TodoList=({tasks,match,onToggleCompleted})=>{
    let filterTasks
    switch(match.params.filter){
        case 'completed':
            //ici c'est que la tâche a été completeé task.completed
            filterTasks=tasks.filter((task)=> task.completed===true)
            break;
        default:
            filterTasks=tasks
    }
    if (filterTasks.length===0){
        return(
                <div>
                    <h1 className="m-3">Liste de tâches</h1>
                    <ul className="list-group m-3">
                    <i className="alert alert-danger"> Vous n'avez complété aucune tâche  !</i>   
                    </ul>  
                </div>
        )
    }
    else {
        return(
            <React.Fragment>
                <h1 className="m-3">Liste de tâches</h1> 
            <ul className="list-group m-3">
                  { filterTasks.map((task)=><ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted}/>)}
            </ul>
            </React.Fragment>
    )}
}

export default TodoList