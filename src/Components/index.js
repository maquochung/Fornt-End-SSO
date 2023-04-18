import React from 'react'
// import AddTodo from './AddTodo'
// import ListTodo from './ListTodo'
import { Outlet, Link } from "react-router-dom";
import './index.css';
function Components() {
  return (
    <div>
    <nav className='menu'>
      <ul>
        <li>
          <Link style={{text:'none'}} to="/">Home</Link>
        </li>
        <li>
          <Link to="/AddTodo">AddTodo</Link>
        </li>
        <li>
          <Link to="/ListTodo">ListTodo</Link>
        </li>
      </ul>
    </nav>
    <Outlet />

      {/* <AddTodo/>
      <ListTodo/> */}
  </div>
  )
}

export default Components;