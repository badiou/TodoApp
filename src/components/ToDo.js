import React from 'react'

class ToDo extends React.Component{
    state={
        completed: this.props.task.completed
    }
    //toToggleCompleted permet de modifier l'état lorsque le user clique sur le bouton.
    //
    toToggleCompleted=()=>{
        this.setState(prevState=>({
            completed: ! prevState.completed
        }))
        //cette fontion onToggleCompleted elle permet de mettre à jour...
        this.props.onToggleCompleted(this.props.task.id)
    }
    
    render(){
    return( 
        // on utilise la valeur de this.state.completed pour changer l'apparence du bouton de outline-success à success et de mettre aussi en gras
        <li className={"list-group-item d-flex align-tiems-center " +(this.state.completed?
        'text-success font-weight-bold':null)}>
            {this.props.task.name}
        <button className={"btn btn-sm ml-auto " +(this.state.completed?
         'btn-success':'btn-outline-success')}
        onClick={()=>this.toToggleCompleted()}>&#x2713;</button>
        </li>)}
}
        
export default ToDo