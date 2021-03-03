import React from 'react'
import NavBar from './NavBar'
import TodoList from './TodoList'
import AddTask from './AddTask'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import initialData from '../initialData'

class App extends React.Component{
    state={
        tasks:initialData
    }
    onToggleCompleted=(taskId)=>{
        let taskToUpdate=this.state.tasks.find(task=>task.id===taskId)
        taskToUpdate.completed = !taskToUpdate.completed
        this.setState(prevState=>{
            prevState.tasks.map((task)=>{
                return task.id === taskId ? taskToUpdate :task
            })
        })
    }
    render(){
        return(
            <section id="todo">
                <BrowserRouter>
                {/* ici si le lien est add-task, on renvoi AddTask 
                Si c'est / on renvoie aussi TodoList */}
                    <Switch>
                        <Route path='/add-task' component={AddTask}/>
                        <Route path='/:filter?' render={(props)=><TodoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted}/>}/>
                    </Switch>
                    <NavBar />
                </BrowserRouter>
            </section>)

    }
  }
  export default App