import React from 'react'
import { FaListAlt,FaCheckSquare,FaPlusSquare,FaTrash } from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

class NavBar extends React.Component{
    render(){
        return(
            <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
                  <div className="btn-group">
                      <NavLink to="/" className="btn btn-outline-dark bg-light" exact={true}><FaListAlt/></NavLink>
                      <NavLink to="/completed" className="btn btn-outline-dark bg-light" exact={true}><FaCheckSquare/></NavLink>
                      <NavLink to="/add-task" className="btn btn-outline-dark bg-light" exact={true}><FaPlusSquare/></NavLink>
                  </div>
                  <button className="btn btn-outline-dark bg-light"><FaTrash/></button>
            </footer>
        )
    }
}
export default NavBar